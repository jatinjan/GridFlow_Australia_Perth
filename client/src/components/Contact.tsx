import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, AlertTriangle, Shield } from "lucide-react";
import emailjs from '@emailjs/browser';

// reCAPTCHA v3 site key - Replace with your actual site key
const RECAPTCHA_SITE_KEY = "6LdDRrIrAAAAAIDwSOpBpgwAaue7tVzN-d40MK4u";

// EmailJS configuration - Replace with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_5qettsv";
const EMAILJS_TEMPLATE_ID = "template_hl39txj"; 
const EMAILJS_PUBLIC_KEY = "D1Hja_w6KAtKNGEha";

// Declare grecaptcha for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    message: ""
  });
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize reCAPTCHA and EmailJS
  useEffect(() => {
    const initializeRecaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setIsRecaptchaReady(true);
        });
      } else {
        // Retry after a short delay if grecaptcha is not yet loaded
        setTimeout(initializeRecaptcha, 100);
      }
    };
    
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    initializeRecaptcha();
  }, []);

  // EmailJS send function
  const sendEmail = async (templateParams: any) => {
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      return result;
    } catch (error) {
      throw error;
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    // Enhanced validation
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your first and last name.",
        variant: "destructive",
      });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.projectType) {
      toast({
        title: "Project Type Required",
        description: "Please select a project type to help us serve you better.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      toast({
        title: "Message Too Short",
        description: "Please provide more details about your project (minimum 10 characters).",
        variant: "destructive",
      });
      return;
    }

    // Execute reCAPTCHA v3
    if (!isRecaptchaReady) {
      toast({
        title: "Security Check Loading",
        description: "Please wait a moment for security verification to load.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA with 'contact_form' action
      const recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: 'contact_form'
      });

      // Prepare email template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        project_type: formData.projectType,
        message: formData.message,
        to_email: 'admin@gridflow.com.au',
        reply_to: formData.email,
        recaptcha_token: recaptchaToken
      };

      // Send email using EmailJS
      await sendEmail(templateParams);

      // Success notification
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for your inquiry! We'll respond within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        projectType: "",
        message: ""
      });

    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly at admin@gridflow.com.au",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-grid-deep-navy" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Get in touch with our expert team to discuss your power engineering requirements and discover how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-grid-electric-blue rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-grid-vibrant-yellow mb-1">Email</h4>
                  <p className="text-gray-300">admin@gridflow.com.au</p>
                </div>
              </div>
              

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-grid-electric-blue rounded-lg flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-grid-vibrant-yellow mb-1">Business Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM AWST</p>
                    {/* <br />Saturday: 9:00 AM - 2:00 PM AWST<br />24/7 Emergency Support Available */}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-grid-charcoal/80 to-grid-deep-navy/90 backdrop-blur-md rounded-2xl border border-grid-electric-blue/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(16,185,129,0.15)] transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-grid-vibrant-yellow mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="w-full bg-white/90 border-2 border-grid-electric-blue/50 text-grid-deep-navy placeholder:text-gray-500 focus:border-grid-electric-blue focus:bg-white transition-all duration-300 rounded-lg backdrop-blur-sm"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="w-full bg-white/90 border-2 border-grid-electric-blue/50 text-grid-deep-navy placeholder:text-gray-500 focus:border-grid-electric-blue focus:bg-white transition-all duration-300 rounded-lg backdrop-blur-sm"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-white/90 border-2 border-grid-electric-blue/50 text-grid-deep-navy placeholder:text-gray-500 focus:border-grid-electric-blue focus:bg-white transition-all duration-300 rounded-lg backdrop-blur-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="block text-sm font-medium text-white mb-2">Company (Optional)</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="w-full bg-white/90 border-2 border-grid-electric-blue/50 text-grid-deep-navy placeholder:text-gray-500 focus:border-grid-electric-blue focus:bg-white transition-all duration-300 rounded-lg backdrop-blur-sm"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <Label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">Project Type</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="w-full bg-white/90 border-2 border-grid-electric-blue/50 text-grid-deep-navy focus:border-grid-electric-blue transition-all duration-300 rounded-lg backdrop-blur-sm">
                      <SelectValue placeholder="Select project type" className="text-gray-500" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="power-systems">Power Systems Study</SelectItem>
                      <SelectItem value="renewable-energy">Renewable Energy Integration</SelectItem>
                      <SelectItem value="industrial-automation">Industrial Automation</SelectItem>
                      <SelectItem value="substation-design">Substation Design</SelectItem>
                      <SelectItem value="grid-integration">Grid Integration</SelectItem>
                      <SelectItem value="safety-compliance">Safety & Compliance Audit</SelectItem>
                      <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                      <SelectItem value="consulting">General Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="w-full bg-white/90 border-2 border-grid-electric-blue/50 text-grid-deep-navy placeholder:text-gray-500 focus:border-grid-electric-blue focus:bg-white transition-all duration-300 rounded-lg resize-none backdrop-blur-sm"
                    placeholder="Describe your project requirements, timeline, and any specific challenges you're facing..."
                    required
                    minLength={10}
                  />
                </div>
                {/* reCAPTCHA Notice */}
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 mb-4">
                  <Shield className="h-4 w-4" />
                  <span>Protected by reCAPTCHA v3</span>
                  {isRecaptchaReady && <span className="text-green-400">✓</span>}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-grid-vibrant-yellow to-yellow-400 hover:from-yellow-300 hover:to-yellow-500 text-grid-deep-navy py-4 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-yellow-300/50"
                  disabled={isSubmitting || !isRecaptchaReady}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-grid-deep-navy border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Email...</span>
                    </div>
                  ) : !isRecaptchaReady ? (
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>Loading Security...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
