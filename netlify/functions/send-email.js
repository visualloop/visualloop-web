const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the request body
    const { name, email, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Get environment variables
    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
    const TO_EMAIL = process.env.TO_EMAIL || GMAIL_USER;
    const FORWARD_EMAIL = process.env.FORWARD_EMAIL; // Comma-separated list of emails to forward to

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Email configuration missing' }),
      };
    }

    // Build recipient list (primary + forwarded emails)
    let recipients = [TO_EMAIL];
    if (FORWARD_EMAIL) {
      // Split by comma and trim whitespace, filter out empty strings
      const forwardEmails = FORWARD_EMAIL.split(',')
        .map(email => email.trim())
        .filter(email => email.length > 0);
      recipients = [...recipients, ...forwardEmails];
    }
    // Remove duplicates
    recipients = [...new Set(recipients)];

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Escape HTML to prevent XSS
    const escapeHtml = (text) => {
      return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Beautiful HTML email template
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 20px;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                New Contact Form Submission
              </h1>
              <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 400;">
                Visual Loop Website
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <!-- Name Section -->
              <table role="presentation" style="width: 100%; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #1a1a2e;">
                    <p style="margin: 0 0 6px 0; color: #6c757d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Name
                    </p>
                    <p style="margin: 0; color: #212529; font-size: 16px; font-weight: 500;">
                      ${safeName}
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Email Section -->
              <table role="presentation" style="width: 100%; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #1a1a2e;">
                    <p style="margin: 0 0 6px 0; color: #6c757d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Email Address
                    </p>
                    <p style="margin: 0; color: #212529; font-size: 16px; font-weight: 500;">
                      <a href="mailto:${safeEmail}" style="color: #1a1a2e; text-decoration: none;">${safeEmail}</a>
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Message Section -->
              <table role="presentation" style="width: 100%; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #1a1a2e;">
                    <p style="margin: 0 0 12px 0; color: #6c757d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Message
                    </p>
                    <p style="margin: 0; color: #212529; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">
                      ${safeMessage}
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Action Button -->
              <table role="presentation" style="width: 100%; margin-top: 32px;">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="mailto:${safeEmail}?subject=Re: Contact Form Submission from ${safeName}" 
                       style="display: inline-block; padding: 14px 32px; background-color: #1a1a2e; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; transition: background-color 0.3s;">
                      Reply to ${safeName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #f8f9fa; border-top: 1px solid #e9ecef; text-align: center;">
              <p style="margin: 0; color: #6c757d; font-size: 13px; line-height: 1.6;">
                This email was automatically generated from the<br>
                <strong style="color: #1a1a2e;">Visual Loop</strong> website contact form.
              </p>
              <p style="margin: 12px 0 0 0; color: #adb5bd; font-size: 12px;">
                Please do not reply directly to this email. Use the "Reply" button above.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Plain text version for email clients that don't support HTML
    const textVersion = `
NEW CONTACT FORM SUBMISSION
Visual Loop Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NAME:
${name}

EMAIL:
${email}

MESSAGE:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was automatically generated from the Visual Loop website contact form.
Please reply directly to ${email} to respond to this inquiry.
    `;

    // Email content
    const mailOptions = {
      from: `"Visual Loop Contact Form" <${GMAIL_USER}>`,
      to: recipients.join(', '), // Send to primary recipient + forwarded emails
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: htmlTemplate,
      text: textVersion,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Email sent successfully',
        success: true
      }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send email',
        message: error.message
      }),
    };
  }
};

