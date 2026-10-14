// Core UI Enhancements, Counters, and Non-Intrusive Form Validation
document.addEventListener("DOMContentLoaded", () => {
    // 1. Animated Number Counters
    const counters = document.querySelectorAll(".counter");
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = Number(counter.dataset.target || 0);
                    const startTime = performance.now();
                    const duration = 1800;

                    const step = (now) => {
                        const progress = Math.min((now - startTime) / duration, 1);
                        // Ease out cubic
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        counter.textContent = Math.floor(target * easeOut).toLocaleString();
                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            counter.textContent = target.toLocaleString();
                        }
                    };
                    requestAnimationFrame(step);
                    obs.unobserve(counter);
                }
            });
        }, { threshold: 0.2 });

        counters.forEach(c => observer.observe(c));
    }

    // 2. Realtime Input Error Clearing
    document.querySelectorAll("input, textarea, select").forEach(input => {
        input.addEventListener("input", () => {
            if (String(input.value).trim()) {
                input.classList.remove("input-error");
                const errHelp = input.parentElement?.querySelector(".field-error-msg");
                if (errHelp) errHelp.remove();
            }
        });
    });

    // 3. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const el = document.querySelector(targetId);
                if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Global Modern Toast Notification System (Replaces disruptive window.alert popups)
window.showToast = function (message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast-item toast-${type}`;
    
    let icon = "ri-information-line";
    if (type === "success") icon = "ri-checkbox-circle-fill";
    if (type === "error") icon = "ri-error-warning-fill";
    if (type === "warning") icon = "ri-alert-fill";

    toast.innerHTML = `
        <i class="${icon}"></i>
        <div class="toast-body">
            <span>${escapeHtml(message)}</span>
        </div>
        <button type="button" class="toast-close" aria-label="Close">&times;</button>
    `;

    toast.querySelector(".toast-close").addEventListener("click", () => {
        toast.classList.add("toast-fadeout");
        setTimeout(() => toast.remove(), 300);
    });

    container.appendChild(toast);

    setTimeout(() => {
        if (toast.parentElement) {
            toast.classList.add("toast-fadeout");
            setTimeout(() => toast.remove(), 300);
        }
    }, 4500);
};