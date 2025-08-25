import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

// reCAPTCHA v3 secret key - Replace with your actual secret key
const RECAPTCHA_SECRET_KEY = "6LdDRrIrAAAAAFlbVes7115xgOp2sW3LPSDN1oCV";

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token: string, remoteIp: string): Promise<{ success: boolean; score?: number; action?: string }> {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
        remoteip: remoteIp,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return { success: false };
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const { recaptchaToken, ...contactData } = validatedData;
      
      // Get client IP address
      const clientIp = req.headers['x-forwarded-for']?.toString().split(',')[0] || 
                      req.headers['x-real-ip']?.toString() || 
                      req.connection.remoteAddress || 
                      req.ip || 
                      '';

      // Verify reCAPTCHA token
      const recaptchaResult = await verifyRecaptcha(recaptchaToken, clientIp);
      
      if (!recaptchaResult.success) {
        return res.status(400).json({ 
          success: false, 
          message: "reCAPTCHA verification failed. Please try again." 
        });
      }

      // Check reCAPTCHA score (optional - you can adjust the threshold)
      const scoreThreshold = 0.5;
      if (recaptchaResult.score !== undefined && recaptchaResult.score < scoreThreshold) {
        console.log(`Low reCAPTCHA score: ${recaptchaResult.score} for IP: ${clientIp}`);
        // You can choose to reject low scores or flag them for manual review
        // For now, we'll allow it but log it
      }

      // Verify the action name matches what we expect
      if (recaptchaResult.action !== 'contact_form') {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid reCAPTCHA action." 
        });
      }

      // Create the contact inquiry (without the reCAPTCHA token)
      const inquiry = await storage.createContactInquiry(contactData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your inquiry! We will contact you within 24 hours.",
        id: inquiry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch inquiries" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
