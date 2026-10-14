# R-Tech Pure Water (Production Web Platform)

A high-performance, modern web application for **R-Tech Pure Water** RO purification solutions, equipped with Supabase Database + Authentication, Vercel Serverless SMS notifications, instant WhatsApp integrations, and hardened cybersecurity.

---

## 🚀 Key Features

* **Multi-Channel Owner Notifications (Mobile: `8056639518`)**:
  * **Automatic SMS Notification**: Dispatches order and contact summaries to `+91 80566 39518` via `/api/send-order-sms` powered by Twilio/Fast2SMS.
  * **Instant WhatsApp Direct Messaging**: Every booking and contact inquiry generates a pre-formatted message sent directly to `8056639518` via 1 click.
  * **Global Floating Quick Contact Widget**: Floating WhatsApp & Direct Call buttons on every page linking directly to `+91 80566 39518`.
* **Beautiful Dedicated Booking Confirmation (`booking-confirmation.html`)**:
  * Replaces legacy browser alert popups with a modern, animated confirmation page.
  * Displays unique booking tracking reference (`#RTW-XXXXXX`), customer info, date, and service requested.
  * 1-click WhatsApp message dispatch, direct call button, and printable receipt slip.
* **Security & Hardening**:
  * **Strict Database Row-Level Security (RLS)**: Protects customer records, bookings, and contact inquiries so only authenticated owner email can query sensitive data.
  * **HTTP Security Headers** in `vercel.json` (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`, `HSTS`).
  * **Anti-Spam Honeypots**: Hidden honeypot fields on booking and contact forms to block bot submissions.
  * **Rate Limiting & Sanitization**: Protects `/api/send-order-sms` against request flooding and script injection.
  * **XSS Defense**: Sanitized data rendering in Owner Admin dashboards and client templates.
* **Polished Modern UI**:
  * Powered by **Plus Jakarta Sans** and **RemixIcon**.
  * Non-intrusive interactive form validation and global Toast Notification system (`showToast`).

---

## 🛠️ Configuration & Setup

### 1. Supabase Database Setup
1. Open your Supabase project SQL Editor.
2. Run [`supabase/schema.sql`](supabase/schema.sql) to create tables (`customers`, `water_bookings`, `contacts`) with secure RLS policies and check constraints.
3. Configure your Supabase project URL, anonymous public key, and owner email in [`js/supabase-config.js`](js/supabase-config.js).

### 2. SMS Gateway Setup (Vercel Environment Variables)
To enable carrier SMS dispatch to `+91 80566 39518`, configure the following in your Vercel Project Settings > Environment Variables:

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `OWNER_PHONE_NUMBER` | Mobile number to receive order alerts | `8056639518` |
| `FAST2SMS_API_KEY` | Fast2SMS Quick Transactional Key (India) | `your_fast2sms_key` |
| `TWILIO_ACCOUNT_SID` | Your Twilio Account SID | `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |
| `TWILIO_AUTH_TOKEN` | Your Twilio Auth Token | `your_auth_token_here` |
| `TWILIO_PHONE_NUMBER` | Your Twilio phone number | `+1234567890` |

*(Note: Even before SMS keys are set up, customer inquiries and bookings are safely recorded in Supabase, and customers can immediately connect to WhatsApp at `+91 80566 39518`)*.

### 3. Running Locally
Run any local static server:
```bash
npx serve .
# or
python -m http.server 3000
```
Open `http://localhost:3000` in your browser.

---

## 📂 Project Structure
* [`index.html`](index.html) – Homepage with service overview and counters
* [`booking.html`](booking.html) – Service scheduling form
* [`booking-confirmation.html`](booking-confirmation.html) – Dedicated booking confirmation and receipt page
* [`contact.html`](contact.html) – Contact form and direct communication channels
* [`owner-details.html`](owner-details.html) – Owner information and equipment gallery
* [`services.html`](services.html) & [`products.html`](products.html) – Catalog of RO machines and maintenance plans
* [`admin/`](admin/) – Protected Owner Management Portal (Bookings, Customers, Messages)
* [`api/send-order-sms.js`](api/send-order-sms.js) – Serverless SMS notification handler
