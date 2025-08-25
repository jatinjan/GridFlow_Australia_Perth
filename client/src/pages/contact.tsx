import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Globe, ArrowRight, Bolt, Headphones } from "lucide-react";

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
      action: "Send Email"
    },
    {
      icon: Users,
      title: "New Projects",
      description: "Discuss your upcoming power engineering needs",
      contact: "admin@gridflow.com.au",
      action: "Start Discussion"
    },
    {
      icon: Globe,
      title: "Partnerships",
      description: "Explore collaboration opportunities",
      contact: "admin@gridflow.com.au",
      action: "Partner With Us"
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
        {/* Background image - clean without filters */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/gridflow-hero-banner.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Simple dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/50 z-10"></div>
        
        {/* Power pulse animation line */}
        <div className="absolute top-0 left-0 w-full h-1 power-pulse z-20" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-start justify-center text-left">
          {/* Service badge */}
          <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full border border-yellow-400/30 mb-8">
              <Headphones className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Let's Start Your Project</span>
            </div>
          </div>
          
          {/* Main headline with premium typography and animations */}
          <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6 relative text-white">
              Ready to Power Up—
              <span className="text-yellow-400 relative inline-block"> Contact Us
                {/* Subtle glow effect */}
                <div className="absolute inset-0 blur-sm text-yellow-400 opacity-30 animate-pulse"></div>
              </span>
            </h1>
          </div>
          
          {/* Enhanced subheading */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="mt-6 text-xl max-w-3xl text-gray-200 mb-8 leading-relaxed font-medium">
              Ready to start your power engineering project? Our team of experts is here to help bring your vision to life with innovative solutions and proven expertise.
            </p>
          </div>
          
          {/* Enhanced CTAs with animations */}
          <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                onClick={() => scrollToSection('contact-form')}
                className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-yellow-400/50 group text-lg"
              >
                <Bolt className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact-options')}
                className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-blue-500/50 font-semibold text-lg border-2 border-blue-700 hover:border-blue-600"
              >
                Explore Contact Options
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 text-gray-300">Get in touch</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section id="contact-options" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grid-deep-navy mb-4">How Can We Help?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose the best way to connect with our team based on your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center border border-grid-electric-blue/10">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-grid-deep-navy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-grid-electric-blue transition-colors">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-grid-deep-navy mb-3">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <p className="text-grid-electric-blue font-semibold mb-4">admin@gridflow.com.au</p>
                    <Button className="bg-grid-deep-navy hover:bg-grid-electric-blue text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section id="contact-form" className="py-20 bg-grid-deep-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white rounded-xl shadow-2xl border border-grid-electric-blue/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-grid-deep-navy mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full"
                      placeholder="john.doe@company.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full"
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">Project Type</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Project Type" />
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
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      className="w-full"
                      placeholder="Please describe your project requirements, timeline, and any specific challenges you're facing..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-grid-deep-navy hover:bg-grid-electric-blue text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-grid-charcoal to-grid-deep-navy rounded-xl shadow-lg border border-grid-electric-blue/30">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-grid-electric-blue rounded-lg flex items-center justify-center mr-4">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-grid-vibrant-yellow mb-2">Email</h4>
                          {/* <p className="text-gray-400 text-sm mb-3 whitespace-pre-line">{office.address}</p> */}
                          <div className="space-y-1">
                            {/* <div className="flex items-center text-sm text-gray-400">
                              <Phone className="h-4 w-4 mr-2" />
                              {office.phone}
                            </div> */}
                            <div className="flex items-center text-sm text-gray-300">
                              <Mail className="h-4 w-4 mr-2" />
                              admin@gridflow.com.au
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Business Hours */}
              <Card className="bg-gradient-to-r from-grid-charcoal to-grid-deep-navy rounded-xl shadow-lg border border-grid-electric-blue/30">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-grid-electric-blue rounded-lg flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-grid-vibrant-yellow mb-2">Business Hours</h4>
                      <div className="text-gray-300 text-sm space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM AWST</p>
                        {/* <p>Saturday: 9:00 AM - 2:00 PM AWST</p>
                        <p>Sunday: Closed</p>
                        <p className="mt-3 font-semibold text-grid-vibrant-yellow">
                          24/7 Emergency Support Available
                        </p> */}
                        {/* <p>Emergency Hotline: 1800 GRIDFLOW</p> */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-grid-deep-navy to-grid-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Power Your Vision?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Get in touch with Australia's innovative power engineers and let's bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-grid-vibrant-yellow text-grid-deep-navy hover:bg-yellow-300 font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105">
              Start Your Project
            </Button>
            {/* <Button className="border-2 border-grid-electric-blue text-grid-electric-blue hover:bg-grid-electric-blue hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300">
              Download Capability Statement
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;