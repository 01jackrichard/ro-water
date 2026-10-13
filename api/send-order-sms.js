// Vercel Serverless Function: /api/send-order-sms
const twilio = require('twilio');

module.exports = async (req, res) => {
    // Only accept POST requests
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({
            success: false,
            error: `Method ${req.method} not allowed. Please use POST.`
        });
    }

    try {
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
        const { id, name, phone, service, booking_date, address, message } = body;

        // Validate required booking data
        if (!name || !phone || !service || !booking_date) {
            return res.status(400).json({
                success: false,
                error: 'Missing required booking details (name, phone, service, and booking_date are required).'
            });
        }

        // Retrieve Twilio credentials from Vercel Environment Variables
        const accountSid = (process.env.TWILIO_ACCOUNT_SID || '').trim();
        const authToken = (process.env.TWILIO_AUTH_TOKEN || '').trim();
        const fromNumber = (process.env.TWILIO_PHONE_NUMBER || '').trim();
        let ownerNumber = (process.env.OWNER_PHONE_NUMBER || '').trim();

        // Check if environment variables are configured
        if (!accountSid || !authToken || !fromNumber || !ownerNumber) {
            console.warn('[Twilio SMS] Required environment variables are missing on Vercel.');
            return res.status(200).json({
                success: false,
                warning: 'Twilio environment variables (TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, OWNER_PHONE_NUMBER) are not yet configured in Vercel.'
            });
        }

        // Format owner phone number with country code if not present (defaults to +91 for India)
        if (!ownerNumber.startsWith('+')) {
            const cleanDigits = ownerNumber.replace(/\D/g, '');
            if (cleanDigits.length === 10) {
                ownerNumber = '+91' + cleanDigits;
            } else if (cleanDigits.length === 11 && cleanDigits.startsWith('0')) {
                ownerNumber = '+91' + cleanDigits.slice(1);
            } else {
                ownerNumber = '+' + cleanDigits;
            }
        }

        // Format order ID
        const orderIdDisplay = id ? `#${id}` : 'NEW';

        // Construct concise SMS text message
        const smsMessage = 
`R-TECH PURE WATER - NEW ORDER

Order ID: ${orderIdDisplay}
Customer: ${name.trim()}
Phone: ${phone.trim()}
Service: ${service.trim()}
Booking Date: ${booking_date.trim()}

Please check the admin dashboard for full details.`;

        // Initialize Twilio client and send SMS
        const client = twilio(accountSid, authToken);
        const result = await client.messages.create({
            body: smsMessage,
            from: fromNumber,
            to: ownerNumber
        });

        console.log(`[Twilio SMS] SMS sent successfully. SID: ${result.sid}`);

        return res.status(200).json({
            success: true,
            messageId: result.sid,
            status: result.status
        });

    } catch (err) {
        console.error('[Twilio SMS] Failed to dispatch SMS:', err);
        return res.status(200).json({
            success: false,
            error: err.message || 'Twilio SMS dispatch failed'
        });
    }
};
