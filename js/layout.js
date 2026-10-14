(() => {
    const rawPath = location.pathname.split('/').pop() || 'index.html';
    const page = rawPath.endsWith('.html') ? rawPath : (rawPath + '.html');
    const active = (n) => (page === n || page === n.replace('.html', '')) ? ' aria-current="page" class="active"' : '';

    const OWNER_PHONE_RAW = '9025281363';
    const OWNER_PHONE_DISPLAY = '+91 90252 81363';
    const OWNER_PHONE_TEL = '+919025281363';
    const WHATSAPP_URL = 'https://wa.me/919025281363?text=' + encodeURIComponent('Hello R-Tech Pure Water! I would like to inquire about your RO water purifier services.');

    // Top Navigation Header
    const header = `
    <header class="header">
        <div class="container nav-container">
            <a href="index.html" class="logo" title="R-Tech Pure Water Home">
                <span class="logo-icon"><i class="ri-drop-fill"></i></span>
                R-Tech Pure <span>Water</span>
            </a>
            <div class="nav-right">
                <nav class="navbar" id="navbar">
                    <a href="index.html"${active('index.html')}>Home</a>
                    <a href="about.html"${active('about.html')}>About</a>
                    <a href="services.html"${active('services.html')}>Services</a>
                    <a href="products.html"${active('products.html')}>Products</a>
                    <a href="contact.html"${active('contact.html')}>Contact</a>
                    <a href="owner-details.html"${active('owner-details.html')}>Owner Details</a>
                    <a href="booking.html" class="nav-btn nav-btn-mobile"${active('booking.html')}>
                        <i class="ri-calendar-check-line"></i> Book Service
                    </a>
                </nav>
                <div class="header-contact-quick">
                    <a href="booking.html" class="nav-btn nav-btn-desktop"${active('booking.html')}>
                        <i class="ri-calendar-check-line"></i> Book Service
                    </a>
                    <a href="tel:${OWNER_PHONE_TEL}" class="nav-phone-link" title="Call Owner Directly">
                        <i class="ri-phone-fill"></i>
                        <span>${OWNER_PHONE_DISPLAY}</span>
                    </a>
                </div>
                <button class="menu-btn" id="menuBtn" type="button" aria-label="Toggle navigation menu">
                    <i class="ri-menu-line"></i>
                </button>
            </div>
        </div>
    </header>`;

    // Footer with verified owner phone 9025281363
    const footer = `
    <footer class="footer">
        <div class="container footer-grid">
            <div class="footer-about">
                <a href="index.html" class="logo footer-logo">
                    <span class="logo-icon"><i class="ri-drop-fill"></i></span>
                    R-Tech Pure <span>Water</span>
                </a>
                <p>Providing premium, certified RO water purification, installation, filter replacement, and annual maintenance solutions across Tirupathur and surrounding regions.</p>
                <div class="trust-pill">
                    <i class="ri-shield-star-fill"></i> Verified Water Specialist
                </div>
            </div>
            <div>
                <h3>Quick Links</h3>
                <a href="index.html">Home</a>
                <a href="about.html">About Us</a>
                <a href="services.html">Our Services</a>
                <a href="products.html">Purifier Products</a>
                <a href="owner-details.html">Owner Profile</a>
            </div>
            <div>
                <h3>Our Services</h3>
                <a href="booking.html?service=RO%20Installation">RO Installation</a>
                <a href="booking.html?service=RO%20Repair">RO Repair & Fix</a>
                <a href="booking.html?service=Filter%20Replacement">Filter Replacement</a>
                <a href="booking.html?service=Annual%20Maintenance">Annual Maintenance (AMC)</a>
                <a href="booking.html?service=Commercial%20RO">Commercial RO Setup</a>
            </div>
            <div>
                <h3>Contact & Support</h3>
                <div class="footer-contact">
                    <a href="tel:${OWNER_PHONE_TEL}" class="footer-call-btn">
                        <i class="ri-phone-fill"></i> 📞 ${OWNER_PHONE_DISPLAY}
                    </a>
                    <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
                        <i class="ri-whatsapp-fill"></i> 💬 WhatsApp (${OWNER_PHONE_RAW})
                    </a>
                    <a href="mailto:thavasikutti89@gmail.com" class="email-link">
                        <i class="ri-mail-line"></i> thavasikutti89@gmail.com
                    </a>
                    <a href="https://maps.app.goo.gl/uCsNtSsbRwa6mUzb9?g_st=aw" target="_blank" rel="noopener noreferrer" class="maps-link">
                        <i class="ri-map-pin-2-fill"></i> 📍 View on Google Maps
                    </a>
                </div>
                <p class="footer-address">
                    <i class="ri-building-line"></i> <strong>R TECH PURE WATER</strong><br>
                    Bus Stop: Chinnakadai,<br>
                    Tiruvannamalai Road,<br>
                    Tirupathur, Tamil Nadu - 635602
                </p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© ${new Date().getFullYear()} R-Tech Pure Water. All Rights Reserved. Created by Yoganathan_A | <a href="admin/login.html" class="owner-login-link"><i class="ri-lock-line"></i> Owner Login</a></p>
        </div>
    </footer>`;

    // Floating Interactive Quick Contact Bar (WhatsApp & Direct Call to 9025281363)
    const floatingBar = `
    <aside class="floating-contact-bar" aria-label="Instant Contact Options">
        <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="float-btn float-whatsapp" title="Chat on WhatsApp (+91 9025281363)" aria-label="Chat on WhatsApp">
            <i class="ri-whatsapp-line"></i>
            <span class="float-tooltip">Chat with us</span>
        </a>
        <a href="tel:${OWNER_PHONE_TEL}" class="float-btn float-call" title="Call Owner Directly (+91 9025281363)" aria-label="Direct Phone Call">
            <i class="ri-phone-line"></i>
            <span class="float-tooltip">Call: ${OWNER_PHONE_RAW}</span>
        </a>
    </aside>`;

    // Inject into document
    document.getElementById('site-header')?.insertAdjacentHTML('afterbegin', header);
    document.getElementById('site-footer')?.insertAdjacentHTML('afterbegin', footer);
    document.body?.insertAdjacentHTML('beforeend', floatingBar);

    // Mobile Hamburger Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const navbar = document.getElementById('navbar');
    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', () => {
            const isOpen = navbar.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', isOpen);
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.className = isOpen ? 'ri-close-line' : 'ri-menu-line';
            }
        });
    }
})();
