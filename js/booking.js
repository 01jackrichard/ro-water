document.addEventListener("DOMContentLoaded", () => {
    const f = document.getElementById("bookingForm");
    if (!f) return;

    let isSubmitting = false;

    f.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        if (!f.checkValidity()) {
            f.reportValidity();
            return;
        }

        const b = f.querySelector("button[type=submit]");
        if (b) b.disabled = true;
        isSubmitting = true;

        try {
            const s = getSupabaseClient();
            const d = Object.fromEntries(new FormData(f).entries());

            const bookingData = {
                name: d.name.trim(),
                phone: d.phone.trim(),
                email: d.email.trim(),
                service: d.service.trim(),
                booking_date: d.booking_date.trim(),
                address: d.address.trim(),
                message: (d.message || "").trim()
            };

            // 1. Insert into Supabase water_bookings table (primary record)
            const r = await s.from("water_bookings").insert(bookingData);
            if (r.error) throw r.error;

            // 2. Insert into customers table (safe sync)
            try {
                await s.from("customers").insert({
                    name: d.name.trim(),
                    email: d.email.trim(),
                    phone: d.phone.trim()
                });
            } catch (custErr) {
                console.warn("Customer record sync notice:", custErr);
            }

            // 3. Trigger serverless SMS notification via Vercel backend
            // Failure of SMS does NOT break or undo the successful booking
            try {
                await fetch("/api/send-order-sms", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(bookingData)
                });
            } catch (smsErr) {
                console.error("SMS notification dispatch notice:", smsErr);
            }

            alert("Your RO service booking has been submitted successfully!");
            f.reset();
            location.href = "index.html";

        } catch (x) {
            console.error("Booking error:", x);
            alert("Booking failed. Please check your details and try again.");
        } finally {
            isSubmitting = false;
            if (b) b.disabled = false;
        }
    });
});