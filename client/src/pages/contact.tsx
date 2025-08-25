import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Globe, ArrowRight, Bolt, Headphones, Send, Zap, Target } from "lucide-react";

const ContactPage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        projectType: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
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
        
        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
          {/* Service badge */}
          <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="inline-flex items-center px-6 py-3 bg-grid-vibrant-yellow/90 rounded-full border border-grid-vibrant-yellow mb-8 backdrop-blur-sm shadow-lg">
              <Zap className="h-5 w-5 mr-2 text-grid-deep-navy" />
              <span className="text-sm text-white font-semibold text-grid-deep-navy tracking-wide">Ready to Connect</span>
            </div>
          </div>
          
          {/* Main headline with better contrast */}
          <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 relative">
              <span className="text-white drop-shadow-2xl">Let's Build the</span>
              <span className="block text-grid-vibrant-yellow mt-2 relative drop-shadow-2xl">
                Future Together
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-grid-vibrant-yellow to-transparent rounded-full shadow-lg"></div>
              </span>
            </h1>
          </div>
          
          {/* Enhanced subheading with better visibility */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="mt-8 text-xl max-w-4xl mx-auto text-white mb-12 leading-relaxed drop-shadow-lg font-medium">
              Your power engineering project starts with a conversation. Connect with Australia's leading electrical engineers and let's turn your vision into reality.
            </p>
          </div>
          
          {/* Enhanced CTAs */}
          <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('contact-form')}
                className="px-10 py-4 bg-grid-vibrant-yellow text-grid-deep-navy font-bold rounded-xl shadow-2xl hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/25 focus:ring-4 focus:ring-yellow-400/50 group text-lg border-2 border-grid-vibrant-yellow"
              >
                <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact-options')}
                className="px-10 py-4 bg-transparent hover:bg-white/10 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-white/20 font-semibold text-lg border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
              >
                <Target className="mr-3 h-5 w-5" />
                Explore Options
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-30">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-3 text-white font-medium drop-shadow-lg">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center shadow-lg">
              <div className="w-1 h-3 bg-grid-vibrant-yellow rounded-full mt-2 animate-pulse shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section id="contact-options" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-grid-electric-blue/10 text-grid-electric-blue rounded-full text-sm font-semibold mb-4">
              <MessageSquare className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-grid-deep-navy mb-6 tracking-tight">
              How Can We <span className="text-grid-electric-blue">Help You?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Choose the best way to connect with our expert team based on your specific needs and project requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden relative">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 text-center relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-grid-deep-navy mb-3 group-hover:text-grid-electric-blue transition-colors">{option.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{option.description}</p>
                    <div className="mb-6">
                      <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                        <Mail className="h-3 w-3 mr-1" />
                        admin@gridflow.com.au
                      </div>
                    </div>
                    <Button className={`bg-gradient-to-r ${option.color} hover:shadow-lg text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 group-hover:scale-105 border-0`}>
                      {option.action}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section id="contact-form" className="py-24 bg-gradient-to-br from-slate-900 via-grid-deep-navy to-slate-900 relative overflow-hidden">
        {/* Background elements with reduced opacity */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-grid-electric-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-grid-vibrant-yellow rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-grid-vibrant-yellow text-grid-deep-navy rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Send className="h-4 w-4 mr-2" />
              Ready to Connect
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Let's Start the <span className="text-grid-vibrant-yellow">Conversation</span>
            </h2>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed">
              Fill out the form below or reach out directly. Our team of experts will get back to you within 24 hours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="bg-white rounded-3xl shadow-2xl border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-grid-deep-navy via-grid-charcoal to-grid-deep-navy text-white p-8">
                  <CardTitle className="text-2xl font-bold flex items-center text-white">
                    <MessageSquare className="h-6 w-6 mr-3 text-white" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-200 mt-2 font-medium">We'll respond within 24 hours</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-semibold text-grid-deep-navy">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="w-full h-12 border-2 border-gray-200 focus:border-grid-electric-blue focus:ring-2 focus:ring-grid-electric-blue/20 rounded-xl transition-all"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-semibold text-grid-deep-navy">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="w-full h-12 border-2 border-gray-200 focus:border-grid-electric-blue focus:ring-2 focus:ring-grid-electric-blue/20 rounded-xl transition-all"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-grid-deep-navy">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full h-12 border-2 border-gray-200 focus:border-grid-electric-blue focus:ring-2 focus:ring-grid-electric-blue/20 rounded-xl transition-all"
                        placeholder="john.doe@company.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-semibold text-grid-deep-navy">Company</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="w-full h-12 border-2 border-gray-200 focus:border-grid-electric-blue focus:ring-2 focus:ring-grid-electric-blue/20 rounded-xl transition-all"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-sm font-semibold text-grid-deep-navy">Project Type</Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger className="w-full h-12 border-2 border-gray-200 focus:border-grid-electric-blue focus:ring-2 focus:ring-grid-electric-blue/20 rounded-xl transition-all">
                          <SelectValue placeholder="Select your project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="power-systems">Power Systems Engineering</SelectItem>
                          <SelectItem value="renewable-energy">Renewable Energy Integration</SelectItem>
                          <SelectItem value="industrial-automation">Industrial Automation</SelectItem>
                          <SelectItem value="electrical-safety">Electrical Safety & Compliance</SelectItem>
                          <SelectItem value="maintenance">Maintenance & Asset Management</SelectItem>
                          <SelectItem value="consulting">Engineering Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold text-grid-deep-navy">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={5}
                        className="w-full border-2 border-gray-200 focus:border-grid-electric-blue focus:ring-2 focus:ring-grid-electric-blue/20 rounded-xl transition-all resize-none"
                        placeholder="Tell us about your project requirements, timeline, budget, and any specific challenges you're facing..."
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-grid-deep-navy to-grid-electric-blue hover:from-grid-electric-blue hover:to-grid-deep-navy text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Get in Touch</h3>
                
                {/* Email Card */}
                <Card className="bg-white/95 backdrop-blur-sm rounded-2xl border-0 mb-6 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-grid-electric-blue to-blue-600 rounded-xl flex items-center justify-center mr-4">
                        <Mail className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-grid-deep-navy mb-2">Email Us</h4>
                        <p className="text-gray-600 text-sm mb-3">Quick response guaranteed</p>
                        <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                          <Mail className="h-3 w-3 mr-2" />
                          admin@gridflow.com.au
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone Card */}
                <Card className="bg-white/95 backdrop-blur-sm rounded-2xl border-0 mb-6 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                        <Phone className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-grid-deep-navy mb-2">Call Us</h4>
                        <p className="text-gray-600 text-sm mb-3">Speak directly with our team</p>
                        <div className="space-y-2">
                          <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                            <Phone className="h-3 w-3 mr-2" />
                            +61 8 6365 9012
                          </div>
                          <p className="text-xs text-gray-500">Perth Office</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours Card */}
                <Card className="bg-white/95 backdrop-blur-sm rounded-2xl border-0 shadow-xl mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mr-4">
                        <Clock className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-grid-deep-navy mb-2">Business Hours</h4>
                        <div className="text-gray-600 text-sm space-y-1">
                          <p className="font-medium">Monday - Friday</p>
                          <p>8:00 AM - 6:00 PM AWST</p>
                          <div className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium mt-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                            Available Now
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Location */}
                <Card className="bg-white/95 backdrop-blur-sm rounded-2xl border-0 shadow-xl mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                        <MapPin className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-grid-deep-navy mb-2">Perth Office</h4>
                        <div className="text-gray-600 text-sm space-y-1">
                          <p>Central Park</p>
                          <p>152-158 St Georges Terrace</p>
                          <p>Perth WA 6000</p>
                          <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mt-2">
                            <MapPin className="w-2 h-2 mr-2" />
                            Headquarters
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-grid-deep-navy rounded-xl flex items-center justify-center mr-4">
                      <Zap className="h-6 w-6 text-grid-vibrant-yellow" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-grid-deep-navy mb-1">Quick Response</h4>
                      <p className="text-grid-deep-navy text-sm font-medium">We typically respond within 2-4 hours during business hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-grid-electric-blue/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-grid-vibrant-yellow/10 rounded-full blur-xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-grid-electric-blue/10 text-grid-electric-blue rounded-full text-sm font-semibold mb-6 border border-grid-electric-blue/20">
              <Bolt className="h-4 w-4 mr-2" />
              Ready to Get Started?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-grid-deep-navy mb-6 tracking-tight">
              Power Your Vision with <span className="text-grid-electric-blue">GridFlow</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-12">
              Join hundreds of satisfied clients who trust GridFlow for their power engineering needs. Let's build something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                onClick={() => scrollToSection('contact-form')}
                className="bg-gradient-to-r from-grid-deep-navy to-grid-electric-blue hover:from-grid-electric-blue hover:to-grid-deep-navy font-bold px-12 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-grid-electric-blue/25 group border-0"              
              >
                <Zap className="mr-3 h-5 w-5 group-hover:animate-pulse" style={{ color: 'white' }} />
                <span>Start Your Project Today</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" style={{ color: 'white' }} />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact-options')}
                className="border-2 border-grid-electric-blue bg-white text-grid-electric-blue hover:bg-grid-electric-blue hover:text-white px-12 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 font-semibold shadow-lg"
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                <span>Explore Contact Options</span>
              </Button>
            </div>
          </div>
          
          {/* Enhanced Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <Card className="text-center p-6 bg-white shadow-lg rounded-2xl border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-grid-electric-blue to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-grid-deep-navy font-bold text-lg mb-2">Quick Response</h4>
              <p className="text-gray-600 text-sm font-medium">24-hour response guarantee</p>
            </Card>
            
            <Card className="text-center p-6 bg-white shadow-lg rounded-2xl border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-grid-deep-navy font-bold text-lg mb-2">Expert Team</h4>
              <p className="text-gray-600 text-sm font-medium">Qualified power engineers</p>
            </Card>
            
            <Card className="text-center p-6 bg-white shadow-lg rounded-2xl border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-grid-vibrant-yellow to-yellow-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-grid-deep-navy" />
              </div>
              <h4 className="text-grid-deep-navy font-bold text-lg mb-2">Proven Results</h4>
              <p className="text-gray-600 text-sm font-medium">200+ successful projects</p>
            </Card>
            
            <Card className="text-center p-6 bg-white shadow-lg rounded-2xl border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-grid-deep-navy font-bold text-lg mb-2">Australia Wide</h4>
              <p className="text-gray-600 text-sm font-medium">Serving all major cities</p>
            </Card>
          </div>
          
          {/* Stats Section */}
          <div className="bg-gradient-to-r from-grid-deep-navy via-grid-charcoal to-grid-deep-navy rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-grid-vibrant-yellow mb-2 drop-shadow-lg">200+</div>
                <p className="text-white font-semibold text-lg drop-shadow-md">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-grid-vibrant-yellow mb-2 drop-shadow-lg">15+</div>
                <p className="text-white font-semibold text-lg drop-shadow-md">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-grid-vibrant-yellow mb-2 drop-shadow-lg">24hr</div>
                <p className="text-white font-semibold text-lg drop-shadow-md">Response Time</p>
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