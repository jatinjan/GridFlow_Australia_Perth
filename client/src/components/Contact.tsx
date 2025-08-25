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
import { MapPin, Phone, Mail, Clock, AlertTriangle } from "lucide-react";

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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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
    
    contactMutation.mutate(formData);
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
                      className="w-full bg-grid-charcoal/60 border-grid-electric-blue/40 text-white placeholder:text-gray-400 focus:border-grid-electric-blue focus:bg-grid-charcoal/80 transition-all duration-300 rounded-lg"
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
                      className="w-full bg-grid-charcoal/60 border-grid-electric-blue/40 text-white placeholder:text-gray-400 focus:border-grid-electric-blue focus:bg-grid-charcoal/80 transition-all duration-300 rounded-lg"
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
                    className="w-full bg-grid-charcoal/60 border-grid-electric-blue/40 text-white placeholder:text-gray-400 focus:border-grid-electric-blue focus:bg-grid-charcoal/80 transition-all duration-300 rounded-lg"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">Project Type</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="w-full bg-grid-charcoal/60 border-grid-electric-blue/40 text-white focus:border-grid-electric-blue transition-all duration-300 rounded-lg">
                      <SelectValue placeholder="Select project type" className="text-blue-200" />
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
                    className="w-full bg-grid-charcoal/60 border-grid-electric-blue/40 text-white placeholder:text-gray-400 focus:border-grid-electric-blue focus:bg-grid-charcoal/80 transition-all duration-300 rounded-lg resize-none"
                    placeholder="Describe your project requirements, timeline, and any specific challenges you're facing..."
                    required
                    minLength={10}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-grid-vibrant-yellow to-yellow-400 hover:from-yellow-300 hover:to-yellow-500 text-grid-deep-navy py-4 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-yellow-300/50"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
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
