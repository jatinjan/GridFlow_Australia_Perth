import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Globe, ArrowRight, Bolt, Headphones, Send, Zap, Target, Shield } from "lucide-react";
import emailjs from '@emailjs/browser';

// reCAPTCHA v3 site key
const RECAPTCHA_SITE_KEY = "6LdDRrIrAAAAAIDwSOpBpgwAaue7tVzN-d40MK4u";

// EmailJS configuration
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

const ContactPage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle hash fragments on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for the page to load completely before scrolling
      const timer = setTimeout(() => {
        const sectionId = hash.substring(1); // Remove the '#' character
        scrollToSection(sectionId);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

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

  const offices = [
    {
      city: "Sydney",
      address: "Level 42, Aurora Place\n88 Phillip Street\nSydney NSW 2000",
      phone: "+61 2 9247 1234",
      email: "sydney@gridflow.com.au",
      isHeadquarters: true
    },
    {
      city: "Melbourne",
      address: "Collins Square Tower 5\n727 Collins Street\nMelbourne VIC 3008",
      phone: "+61 3 9001 5678",
      email: "melbourne@gridflow.com.au"
    },
    {
      city: "Perth",
      address: "Central Park\n152-158 St Georges Terrace\nPerth WA 6000",
      phone: "+61 8 6365 9012",
      email: "perth@gridflow.com.au"
    }
  ];

  const contactOptions = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about our services or capabilities",
      contact: "admin@gridflow.com.au",
      action: "Send Email",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "New Projects",
      description: "Discuss your upcoming power engineering needs",
      contact: "admin@gridflow.com.au",
      action: "Start Discussion",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Globe,
      title: "Partnerships",
      description: "Explore collaboration opportunities",
      contact: "admin@gridflow.com.au",
      action: "Partner With Us",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="contact-hero"
        className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden"
      >
        {/* Background with overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/gridflow-hero-banner.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Strong dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-grid-deep-navy/80 via-grid-charcoal/70 to-grid-deep-navy/80 z-15"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 z-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24 text-center">
          {/* Service badge */}
          <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-transparent rounded-full border-2 border-grid-vibrant-yellow mb-6 sm:mb-8 shadow-xl backdrop-blur-sm">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-grid-vibrant-yellow" />
              <span className="text-xs sm:text-sm font-bold text-grid-vibrant-yellow tracking-wide">Ready to Connect</span>
            </div>
          </div>

          {/* Main headline with better contrast */}
          <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 relative px-2">
              <span className="text-white drop-shadow-2xl">Let's Build the</span>
              <span className="block text-grid-vibrant-yellow mt-1 sm:mt-2 relative drop-shadow-2xl">
                Future Together
                <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-grid-vibrant-yellow to-transparent rounded-full shadow-lg"></div>
              </span>
            </h1>
          </div>

          {/* Enhanced subheading with better visibility */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl max-w-4xl mx-auto text-white mb-8 sm:mb-12 leading-relaxed drop-shadow-lg font-medium px-2">
              Your power engineering project starts with a conversation. Connect with Australia's leading electrical engineers and let's turn your vision into reality.
            </p>
          </div>

          {/* Enhanced CTAs */}
          <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Button
                onClick={() => scrollToSection('contact-form')}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-grid-vibrant-yellow text-grid-deep-navy font-bold rounded-xl shadow-2xl hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/25 focus:ring-4 focus:ring-yellow-400/50 group text-base sm:text-lg border-2 border-grid-vibrant-yellow"
              >
                <Send className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                Start Your Project
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact-options')}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-transparent hover:bg-white/10 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-white/20 font-semibold text-base sm:text-lg border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
              >
                <Target className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                Explore Options
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 md:bottom-8 left-0 right-0 flex justify-center text-white animate-bounce z-30">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-3 text-white font-medium drop-shadow-lg">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-center shadow-lg">
              <div className="w-1 h-3 bg-grid-vibrant-yellow rounded-full animate-pulse shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section id="contact-options" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-grid-electric-blue/10 text-grid-electric-blue rounded-full text-sm font-semibold mb-4">
              <MessageSquare className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-grid-deep-navy mb-4 sm:mb-6 tracking-tight px-2">
              How Can We <span className="text-grid-electric-blue">Help You?</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              Choose the best way to connect with our expert team based on your specific needs and project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden relative">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <CardContent className="p-6 sm:p-8 text-center relative">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-grid-deep-navy mb-2 sm:mb-3 group-hover:text-grid-electric-blue transition-colors">{option.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">{option.description}</p>
                    <div className="mb-4 sm:mb-6">
                      <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600">
                        <Mail className="h-3 w-3 mr-1" />
                        <span className="break-all">admin@gridflow.com.au</span>
                      </div>
                    </div>
                    <Button
                      className={`w-full sm:w-auto bg-gradient-to-r ${option.color} hover:shadow-lg text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 group-hover:scale-105 border-0 text-sm sm:text-base`}
                      onClick={() => {
                        const formSection = document.getElementById('contact-form');
                        if (formSection) {
                          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                    >
                      {option.action}
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section id="contact-form" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-grid-deep-navy to-slate-900 relative overflow-hidden">
        {/* Background elements with reduced opacity */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-grid-electric-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-grid-vibrant-yellow rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-16 sm:mb-20 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-grid-vibrant-yellow text-grid-deep-navy rounded-full text-sm font-bold mb-6 sm:mb-8 shadow-lg transform hover:scale-105 transition-transform">
              <Send className="h-4 w-4 mr-2" />
              Ready to Connect
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Let's Start the <span className="text-grid-vibrant-yellow bg-gradient-to-r from-grid-vibrant-yellow to-yellow-400 bg-clip-text text-transparent">Conversation</span>
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed font-medium">
              Fill out the form below or reach out directly. Our team of experts will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="xl:col-span-8">
              <Card className="bg-white rounded-3xl shadow-2xl border-0 overflow-hidden backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-grid-deep-navy via-slate-800 to-grid-deep-navy text-white p-8">
                  <CardTitle className="text-2xl sm:text-3xl font-bold flex items-center text-white mb-2">
                    <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 mr-3 text-grid-vibrant-yellow" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-200 font-medium text-base">We'll respond within 24 hours with a detailed proposal</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information Section */}
                    <div className="space-y-6">
                      <div className="border-l-4 border-grid-electric-blue pl-4">
                        <h3 className="text-lg font-bold text-grid-deep-navy mb-1">Personal Information</h3>
                        <p className="text-gray-600 text-sm">Tell us about yourself</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-semibold text-grid-deep-navy flex items-center">
                            First Name <span className="text-red-500 ml-1">*</span>
                          </Label>
                          <Input
                            id="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="w-full h-14 border-2 border-gray-200 hover:border-gray-300 focus:border-grid-electric-blue focus:ring-2 focus:ring-grid-electric-blue/20 rounded-xl transition-all text-base"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-semibold text-grid-deep-navy flex items-center">
                            Last Name <span className="text-red-500 ml-1">*</span>
                          </Label>
                          <Input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className="w-full h-14 border-2 border-gray-200 hover:border-gray-300 focus:border-grid-electric-blue focus:ring-2 focus:ring-grid-electric-blue/20 rounded-xl transition-all text-base"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold text-grid-deep-navy flex items-center">
                            Email Address <span className="text-red-500 ml-1">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full h-14 border-2 border-gray-200 hover:border-gray-300 focus:border-grid-electric-blue focus:ring-2 focus:ring-grid-electric-blue/20 rounded-xl transition-all text-base"
                            placeholder="john.doe@company.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-sm font-semibold text-grid-deep-navy">Company / Organization</Label>
                          <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            className="w-full h-14 border-2 border-gray-200 hover:border-gray-300 focus:border-grid-electric-blue focus:ring-2 focus:ring-grid-electric-blue/20 rounded-xl transition-all text-base"
                            placeholder="Your Company Name"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Information Section */}
                    <div className="space-y-6">
                      <div className="border-l-4 border-grid-vibrant-yellow pl-4">
                        <h3 className="text-lg font-bold text-grid-deep-navy mb-1">Project Information</h3>
                        <p className="text-gray-600 text-sm">Help us understand your needs</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectType" className="text-sm font-semibold text-grid-deep-navy">Project Type</Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                          <SelectTrigger className="w-full h-14 border-2 border-gray-200 hover:border-gray-300 focus:border-grid-electric-blue focus:ring-2 focus:ring-grid-electric-blue/20 rounded-xl transition-all text-base">
                            <SelectValue placeholder="Select your project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="power-systems-study">Power Systems Study & Feasibility Analysis</SelectItem>
                            <SelectItem value="lines-cables-design">Lines and Cables Design</SelectItem>
                            <SelectItem value="earthing-lightning">Earthing & Lightning Protection</SelectItem>
                            <SelectItem value="industrial-automation">Industrial Automation</SelectItem>
                            <SelectItem value="renewable-energy">Renewable Energy Solutions</SelectItem>
                            <SelectItem value="surveying">Surveying</SelectItem>
                            <SelectItem value="power-safety-compliance">Power Safety & Compliance</SelectItem>
                            <SelectItem value="construction-support">Construction Support</SelectItem>
                            <SelectItem value="maintenance-support">Maintenance & Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold text-grid-deep-navy flex items-center">
                          Project Details <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          rows={6}
                          className="w-full border-2 border-gray-200 hover:border-gray-300 focus:border-grid-electric-blue focus:ring-2 focus:ring-grid-electric-blue/20 rounded-xl transition-all resize-none text-base leading-relaxed"
                          placeholder="Tell us about your project requirements, timeline, budget, and any specific challenges you're facing. The more details you provide, the better we can assist you."
                          required
                        />
                      </div>
                    </div>

                    {/* Security & Submit Section */}
                    <div className="space-y-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <Shield className="h-4 w-4" />
                        <span>Protected by reCAPTCHA v3</span>
                        {isRecaptchaReady && <span className="text-green-500 font-medium">✓ Ready</span>}
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-grid-deep-navy to-grid-electric-blue hover:from-grid-electric-blue hover:to-grid-deep-navy text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-lg transform hover:scale-[1.02]"
                        disabled={isSubmitting || !isRecaptchaReady}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Sending Message...
                          </>
                        ) : !isRecaptchaReady ? (
                          <>
                            <Shield className="mr-3 h-5 w-5" />
                            Loading Security...
                          </>
                        ) : (
                          <>
                            <Send className="mr-3 h-5 w-5" />
                            Send Message & Get Quote
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="xl:col-span-4">
              <div className="sticky top-8 space-y-6">
                <div className="text-center xl:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight">Get in Touch</h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-8">
                    Prefer to reach out directly? We're here to help with any questions about your power engineering needs.
                  </p>
                </div>

                {/* Email Card */}
                <Card className="bg-white/95 backdrop-blur-sm rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-grid-electric-blue to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <Mail className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-grid-deep-navy mb-2">Email Us</h4>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">Quick response guaranteed within 24 hours</p>
                        <div className="inline-flex items-center px-3 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors">
                          <Mail className="h-3 w-3 mr-2" />
                          <span className="break-all font-medium">admin@gridflow.com.au</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time Card */}
                <Card className="bg-white/95 backdrop-blur-sm rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-grid-deep-navy to-slate-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <Zap className="h-7 w-7 text-grid-vibrant-yellow" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-grid-deep-navy mb-2">Quick Response</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We typically respond within <span className="font-semibold text-grid-deep-navy">2-4 hours</span> during business hours with detailed information about your project.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Indicator */}
                <div className="bg-gradient-to-r from-grid-deep-navy/10 to-grid-electric-blue/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-grid-vibrant-yellow rounded-full mb-4">
                      <Users className="h-6 w-6 text-grid-deep-navy" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Trusted by Industry Leaders</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Join hundreds of satisfied clients across Australia who trust GridFlow for their power engineering solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;