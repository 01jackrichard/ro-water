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

    // Footer with verified owner phone 9025281363 (Organized & Clean)
    const footer = `
    <footer class="footer">
        <div class="container footer-grid">
            <!-- Col 1: Brand & Bio -->
            <div class="footer-about">
                <a href="index.html" class="logo footer-logo" title="R-Tech Pure Water">
                    <span class="logo-icon"><i class="ri-drop-fill"></i></span>
                    R-Tech Pure <span>Water</span>
                </a>
                <p class="footer-bio">
                    Providing certified RO water purification, genuine filter replacements, precision TDS testing, and express maintenance solutions across Tirupathur and surrounding regions.
                </p>
                <div class="footer-badges">
                    <span class="trust-pill"><i class="ri-shield-check-fill"></i> Verified Water Specialist</span>
                    <span class="trust-pill-time"><i class="ri-time-line"></i> Daily: 8:00 AM – 9:00 PM</span>
                </div>
            </div>

            <!-- Col 2: Quick Links -->
            <div class="footer-links-col">
                <h3 class="footer-heading">Quick Links</h3>
                <ul class="footer-nav-list">
                    <li><a href="index.html"><i class="ri-arrow-right-s-line"></i> Home</a></li>
                    <li><a href="about.html"><i class="ri-arrow-right-s-line"></i> About Us</a></li>
                    <li><a href="services.html"><i class="ri-arrow-right-s-line"></i> Our Services</a></li>
                    <li><a href="products.html"><i class="ri-arrow-right-s-line"></i> Purifier Products</a></li>
                    <li><a href="owner-details.html"><i class="ri-arrow-right-s-line"></i> Owner Profile</a></li>
                    <li><a href="booking.html"><i class="ri-arrow-right-s-line"></i> Book Service</a></li>
                </ul>
            </div>

            <!-- Col 3: Services -->
            <div class="footer-links-col">
                <h3 class="footer-heading">Our Services</h3>
                <ul class="footer-nav-list">
                    <li><a href="booking.html?service=RO%20Installation"><i class="ri-arrow-right-s-line"></i> RO Installation</a></li>
                    <li><a href="booking.html?service=RO%20Repair"><i class="ri-arrow-right-s-line"></i> RO Repair & Fix</a></li>
                    <li><a href="booking.html?service=Filter%20Replacement"><i class="ri-arrow-right-s-line"></i> Filter Replacement</a></li>
                    <li><a href="booking.html?service=Annual%20Maintenance"><i class="ri-arrow-right-s-line"></i> Annual Maintenance (AMC)</a></li>
                    <li><a href="booking.html?service=Commercial%20RO"><i class="ri-arrow-right-s-line"></i> Commercial RO Setup</a></li>
                </ul>
            </div>

            <!-- Col 4: Contact & Support (Clean Icons, Zero Duplicate Emojis) -->
            <div class="footer-contact-col">
                <h3 class="footer-heading">Contact & Support</h3>
                <div class="footer-contact-cards">
                    <!-- Phone Item -->
                    <a href="tel:${OWNER_PHONE_TEL}" class="contact-card" title="Call Owner Directly">
                        <span class="contact-card-icon icon-phone"><i class="ri-phone-fill"></i></span>
                        <div class="contact-card-info">
                            <span class="contact-card-label">Direct Phone Call</span>
                            <span class="contact-card-value">${OWNER_PHONE_DISPLAY}</span>
                        </div>
                    </a>

                    <!-- WhatsApp Item -->
                    <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="contact-card contact-card-wa" title="Chat on WhatsApp">
                        <span class="contact-card-icon icon-wa"><i class="ri-whatsapp-fill"></i></span>
                        <div class="contact-card-info">
                            <span class="contact-card-label">WhatsApp Support (24/7)</span>
                            <span class="contact-card-value">+91 ${OWNER_PHONE_RAW}</span>
                        </div>
                        <i class="ri-arrow-right-up-line contact-card-arrow"></i>
                    </a>

                    <!-- Email Item -->
                    <a href="mailto:thavasikutti89@gmail.com" class="contact-card" title="Send Email">
                        <span class="contact-card-icon icon-email"><i class="ri-mail-fill"></i></span>
                        <div class="contact-card-info">
                            <span class="contact-card-label">Email Support</span>
                            <span class="contact-card-value">thavasikutti89@gmail.com</span>
                        </div>
                    </a>

                    <!-- Location Item -->
                    <div class="contact-location-card">
                        <div class="location-header">
                            <span class="contact-card-icon icon-location"><i class="ri-map-pin-2-fill"></i></span>
                            <div>
                                <span class="contact-card-label">Service Center</span>
                                <strong class="location-name">R TECH PURE WATER</strong>
                            </div>
                        </div>
                        <p class="location-address">
                            Bus Stop: Chinnakadai, Tiruvannamalai Road, Tirupathur - 635602
                        </p>
                        <a href="https://maps.app.goo.gl/uCsNtSsbRwa6mUzb9?g_st=aw" target="_blank" rel="noopener noreferrer" class="location-map-btn">
                            <i class="ri-direction-line"></i> View on Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <div class="container footer-bottom-flex">
                <p class="footer-copy">© ${new Date().getFullYear()} R-Tech Pure Water. All Rights Reserved. Created by Yoganathan_A</p>
                <a href="admin/login.html" class="owner-login-btn">
                    <i class="ri-lock-2-line"></i> Owner Login
                </a>
            </div>
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
