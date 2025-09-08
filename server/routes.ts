import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
import type { InsertContactInquiry } from "@shared/schema";

// Email formatting functions
function formatEmailMessage(data: InsertContactInquiry): string {
  return `🚨 URGENT EVENT INQUIRY - IMMEDIATE ATTENTION REQUIRED 🚨

Dear Nicole,

I hope this message finds you well. I am writing to inquire about your emcee services for an upcoming event and would appreciate your prompt response.

📞 CONTACT DETAILS:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

🎉 EVENT DETAILS:
Event Type: ${data.eventType}
Event Date: ${data.eventDate || 'Not specified'}
Location: ${data.location || 'Not specified'}
Duration: ${data.duration || 'Not specified'}
Expected Attendees: ${data.attendees || 'Not specified'}
Budget Range: ${data.budget || 'Not specified'}

📝 SPECIFIC REQUIREMENTS:
${data.requirements || 'No specific requirements mentioned'}

⏰ URGENT REQUEST:
I would be grateful if you could provide information about your availability, pricing, and any additional services you offer at your earliest convenience. Please let me know if you need any further details.

Thank you for your time and consideration.

Best regards,
${data.name}

---
This inquiry was sent from Nicole's official website and marked as URGENT.`;
}

function formatEmailHTML(data: InsertContactInquiry): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ff4444; color: white; padding: 15px; text-align: center; border-radius: 5px; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 18px;">🚨 URGENT EVENT INQUIRY - IMMEDIATE ATTENTION REQUIRED 🚨</h1>
      </div>
      
      <div style="background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        <p>Dear Nicole,</p>
        
        <p>I hope this message finds you well. I am writing to inquire about your emcee services for an upcoming event and would appreciate your prompt response.</p>
        
        <h3 style="color: #333; border-bottom: 2px solid #ffd700; padding-bottom: 5px;">📞 CONTACT DETAILS:</h3>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
        </ul>
        
        <h3 style="color: #333; border-bottom: 2px solid #ffd700; padding-bottom: 5px;">🎉 EVENT DETAILS:</h3>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Event Type:</strong> ${data.eventType}</li>
          <li><strong>Event Date:</strong> ${data.eventDate || 'Not specified'}</li>
          <li><strong>Location:</strong> ${data.location || 'Not specified'}</li>
          <li><strong>Duration:</strong> ${data.duration || 'Not specified'}</li>
          <li><strong>Expected Attendees:</strong> ${data.attendees || 'Not specified'}</li>
          <li><strong>Budget Range:</strong> ${data.budget || 'Not specified'}</li>
        </ul>
        
        <h3 style="color: #333; border-bottom: 2px solid #ffd700; padding-bottom: 5px;">📝 SPECIFIC REQUIREMENTS:</h3>
        <p style="background-color: #f5f5f5; padding: 10px; border-radius: 3px;">${data.requirements || 'No specific requirements mentioned'}</p>
        
        <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #856404; margin-top: 0;">⏰ URGENT REQUEST:</h3>
          <p style="margin-bottom: 0;">I would be grateful if you could provide information about your availability, pricing, and any additional services you offer at your earliest convenience. Please let me know if you need any further details.</p>
        </div>
        
        <p>Thank you for your time and consideration.</p>
        
        <p>Best regards,<br>${data.name}</p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #666; text-align: center;">This inquiry was sent from Nicole's official website and marked as URGENT.</p>
      </div>
    </div>
  `;
}

function formatWhatsAppMessage(data: InsertContactInquiry): string {
  return `🎤 *New Event Inquiry for Nicole Adams*

👤 *Contact Details:*
• Name: ${data.name}
• Email: ${data.email}
• Phone: ${data.phone}

🎉 *Event Details:*
• Event Type: ${data.eventType}
• Event Date: ${data.eventDate || 'Not specified'}
• Location: ${data.location || 'Not specified'}
• Duration: ${data.duration || 'Not specified'}
• Attendees: ${data.attendees || 'Not specified'}
• Budget: ${data.budget || 'Not specified'}

📝 *Requirements:*
${data.requirements || 'No specific requirements mentioned'}

---
*This inquiry was sent from Nicole's official website.*`;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Configuration: Set to 'email' to send emails, 'whatsapp' for WhatsApp (default)
  const SEND_METHOD = process.env.SEND_METHOD || 'whatsapp';
  
  // Create email transporter (only if email method is enabled)
  let transporter: nodemailer.Transporter | null = null;
  if (SEND_METHOD === 'email') {
    transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'nicoleadams927@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
      }
    });
  }

  // Contact inquiry submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      
      // Store inquiry in database
      const inquiry = await storage.createContactInquiry(validatedData);
      
      if (SEND_METHOD === 'email' && transporter) {
        // Send email notification
        const emailSubject = `🚨 URGENT: New Event Inquiry from ${validatedData.name}`;
        const emailBody = formatEmailMessage(validatedData);
        
        const mailOptions = {
          from: process.env.EMAIL_USER || 'nicoleadams927@gmail.com',
          to: 'nicoleadams927@gmail.com',
          subject: emailSubject,
          text: emailBody,
          html: formatEmailHTML(validatedData),
          priority: 'high'
        };

        await transporter.sendMail(mailOptions);
        
        res.json({ 
          success: true, 
          inquiry, 
          method: 'email',
          message: 'Inquiry sent via email successfully'
        });
      } else {
        // Return WhatsApp URL for client-side handling
        const whatsappMessage = formatWhatsAppMessage(validatedData);
        const whatsappNumber = "919845965597";
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        res.json({ 
          success: true, 
          inquiry, 
          method: 'whatsapp',
          whatsappUrl,
          message: 'Inquiry ready for WhatsApp'
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error('Inquiry submission error:', error);
        res.status(500).json({ 
          message: "Failed to submit inquiry" 
        });
      }
    }
  });

  // Get all inquiries (for admin use)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch inquiries" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
