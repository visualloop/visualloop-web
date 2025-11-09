# Gmail SMTP Setup Guide

This guide explains how to configure Gmail SMTP for the contact form on Netlify.

## Step 1: Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable it if not already enabled)
3. Scroll down to **App passwords**
4. Click **Select app** → Choose **Mail**
5. Click **Select device** → Choose **Other (Custom name)**
6. Enter "Netlify Contact Form" or any name you prefer
7. Click **Generate**
8. **Copy the 16-character password** (you'll need this for Step 3)

## Step 2: Get Your Gmail Address

Use the Gmail address you want to send emails from (e.g., `yourname@gmail.com`)

## Step 3: Configure Environment Variables in Netlify

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your site (`visualloop-web`)
3. Go to **Site settings** → **Environment variables**
4. Add the following environment variables:

   | Key | Value | Description |
   |-----|-------|-------------|
   | `GMAIL_USER` | `yourname@gmail.com` | Your Gmail address (Required) |
   | `GMAIL_APP_PASSWORD` | `xxxx xxxx xxxx xxxx` | The 16-character app password from Step 1 (Required) |
   | `TO_EMAIL` | `recipient@gmail.com` | (Optional) Primary email address to receive form submissions. If not set, uses `GMAIL_USER` |
   | `FORWARD_EMAIL` | `email1@gmail.com, email2@gmail.com` | (Optional) Additional email addresses to forward form submissions to. Separate multiple emails with commas |

## Step 4: Redeploy Your Site

After adding the environment variables:

1. Go to **Deploys** tab in Netlify
2. Click **Trigger deploy** → **Deploy site**
3. Wait for the deployment to complete

## Testing the Form

1. Visit your deployed site
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check the email inbox(es) - emails will be sent to `TO_EMAIL` (or `GMAIL_USER` if `TO_EMAIL` is not set) and any addresses in `FORWARD_EMAIL`

## Email Forwarding

You can forward form submissions to multiple email addresses by setting the `FORWARD_EMAIL` environment variable:

**Example:**
- `FORWARD_EMAIL`: `team@visualloop.com, manager@visualloop.com`

This will send the form submission to:
1. The primary recipient (`TO_EMAIL` or `GMAIL_USER`)
2. All email addresses listed in `FORWARD_EMAIL`

**Note:** Separate multiple email addresses with commas. Duplicate addresses are automatically removed.

## Troubleshooting

### Email not sending?
- Verify the app password is correct (no spaces)
- Ensure 2-Step Verification is enabled on your Google Account
- Check Netlify Function logs: **Functions** tab → Click on `send-email` → View logs

### Function not found?
- Make sure the `netlify/functions/send-email.js` file exists
- Verify `netlify.toml` has the functions directory configured (default: `netlify/functions`)

### Still having issues?
- Check Netlify Function logs for detailed error messages
- Verify all environment variables are set correctly
- Ensure `nodemailer` is installed in `netlify/functions/package.json`

