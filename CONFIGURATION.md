# Contact Form Configuration

The contact form can be configured to send inquiries via either **WhatsApp** (default) or **Email**.

## Configuration Options

### Environment Variables

Set the following environment variables to configure the contact form behavior:

```bash
# Sending method: 'whatsapp' (default) or 'email'
SEND_METHOD=whatsapp

# Email configuration (only needed if SEND_METHOD=email)
EMAIL_USER=nicoleadams927@gmail.com
EMAIL_PASS=your-gmail-app-password
```

## Modes

### 1. WhatsApp Mode (Default)
- **SEND_METHOD=whatsapp** or leave unset
- Opens WhatsApp with pre-filled message
- Works on both mobile and desktop
- No additional configuration required

### 2. Email Mode
- **SEND_METHOD=email**
- Sends emails directly via Gmail SMTP
- Requires Gmail App Password setup
- Seamless - no user interaction needed

## Setup Instructions

### For WhatsApp Mode (Default)
No setup required - works out of the box!

### For Email Mode
1. **Enable 2-Factor Authentication** on Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Set Environment Variables**:
   ```bash
   SEND_METHOD=email
   EMAIL_USER=nicoleadams927@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

## Switching Modes

To switch from WhatsApp to Email:
```bash
export SEND_METHOD=email
export EMAIL_USER=nicoleadams927@gmail.com
export EMAIL_PASS=your-app-password
npm run dev
```

To switch back to WhatsApp:
```bash
export SEND_METHOD=whatsapp
# or simply unset the variable
unset SEND_METHOD
npm run dev
```

## Features

### WhatsApp Mode
- ✅ Pre-filled professional message
- ✅ Mobile app integration
- ✅ Desktop web fallback
- ✅ No configuration needed
- ✅ Works immediately

### Email Mode
- ✅ Direct email sending
- ✅ Beautiful HTML formatting
- ✅ High priority marking
- ✅ Professional templates
- ✅ Seamless user experience
- ✅ Database backup

## Current Status
- **Default Mode**: WhatsApp
- **Configuration**: Environment variable based
- **Fallback**: Graceful error handling
