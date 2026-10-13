async function requireAdmin() {
    try {
        const sb = getSupabaseClient();
        const { data, error } = await sb.auth.getSession();
        if (error || !data || !data.session) {
            location.href = "login.html";
            return null;
        }

        const session = data.session;
        const adminEmail = (window.ADMIN_LOGIN_EMAIL || "").trim().toLowerCase();
        if (adminEmail && session.user && session.user.email) {
            if (session.user.email.toLowerCase() !== adminEmail) {
                await sb.auth.signOut();
                location.href = "login.html";
                return null;
            }
        }
        return { sb, session };
    } catch (e) {
        console.error("Auth check failed:", e);
        location.href = "login.html";
        return null;
    }
}

async function logout() {
    try {
        const sb = getSupabaseClient();
        await sb.auth.signOut();
    } catch (e) {
        console.error("Sign out error:", e);
    }
    location.href = "login.html";
}

function esc(v) {
    if (v === null || v === undefined) return "-";
    return String(v)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function row(cells) {
    return "<tr>" + cells.map(v => "<td>" + esc(v) + "</td>").join("") + "</tr>";
}