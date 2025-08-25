import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, DollarSign, Zap, Users, ArrowRight, BookOpen, Bolt } from "lucide-react";

const CaseStudies = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const caseStudies = [
    {
      id: 1,
      title: "Renewable Energy Integration for Major Mining Operation",
      client: "Confidential Mining Corporation",
      industry: "Mining & Resources",
      location: "Pilbara, Western Australia",
      duration: "18 months",
      value: "$45M",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      challenge: "A major iron ore mining operation needed to reduce energy costs and carbon emissions while maintaining 24/7 reliable power supply for critical mining equipment and processing facilities.",
      solution: "GridFlow designed and delivered a hybrid renewable energy system combining 50MW solar PV, 20MW battery storage, and intelligent grid integration with existing diesel generation. The system includes advanced SCADA controls and predictive maintenance capabilities.",
      results: [
        "35% reduction in overall energy costs ($12M annual savings)",
        "60% reduction in carbon emissions (45,000 tonnes CO2/year)",
        "99.97% system availability maintained",
        "ROI achieved in 3.2 years",
        "Fully compliant with mining safety regulations"
      ],
      technologies: ["Solar PV", "Battery Storage", "SCADA", "Grid Integration", "Predictive Maintenance"],
      testimonial: {
        quote: "GridFlow delivered an exceptional solution that exceeded our expectations. The hybrid system has dramatically reduced our operating costs while improving our environmental footprint. Their technical expertise and project management was outstanding.",
        author: "Operations Director",
        company: "Major Mining Corporation"
      }
    },
    {
      id: 2,
      title: "Smart Manufacturing Automation Upgrade",
      client: "Advanced Manufacturing Solutions",
      industry: "Manufacturing",
      location: "Melbourne, Victoria",
      duration: "12 months",
      value: "$8.5M",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      challenge: "An automotive parts manufacturer required complete automation upgrade to improve production efficiency, reduce waste, and meet Industry 4.0 standards while maintaining production during the transition.",
      solution: "Implemented comprehensive automation solution including new PLC systems, advanced HMI interfaces, integrated MES connectivity, predictive maintenance systems, and energy management optimization across three production lines.",
      results: [
        "42% increase in production efficiency",
        "28% reduction in material waste",
        "15% reduction in energy consumption",
        "Zero unplanned downtime during transition",
        "Full compliance with safety standards"
      ],
      technologies: ["PLC Programming", "HMI Development", "MES Integration", "Energy Management", "Predictive Analytics"],
      testimonial: {
        quote: "The transformation of our manufacturing facility by GridFlow has been remarkable. We've seen significant improvements in efficiency and quality while reducing our environmental impact. The team's expertise in automation is world-class.",
        author: "Plant Manager",
        company: "Advanced Manufacturing Solutions"
      }
    },
    {
      id: 3,
      title: "Critical Infrastructure Power System Upgrade",
      client: "Metro Data Centers",
      industry: "Data Centers",
      location: "Sydney, New South Wales",
      duration: "8 months",
      value: "$15M",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      challenge: "A Tier III data center required complete electrical infrastructure upgrade to support 20MW of IT load with 99.982% uptime requirement and N+1 redundancy while maintaining operations during construction.",
      solution: "Designed and implemented dual-fed 11kV electrical system, UPS systems with battery backup, emergency generators, comprehensive monitoring systems, and advanced power quality management with seamless failover capabilities.",
      results: [
        "99.995% uptime achieved (exceeding requirement)",
        "20MW capacity delivered on schedule",
        "Zero service interruptions during upgrade",
        "30% improvement in power efficiency (PUE 1.25)",
        "Full Tier III certification maintained"
      ],
      technologies: ["High Voltage Systems", "UPS Design", "Power Quality", "Emergency Systems", "DCIM Integration"],
      testimonial: {
        quote: "GridFlow's expertise in critical power systems is unmatched. They delivered a complex upgrade without any service interruption, which was crucial for our business. The system performance has been exceptional.",
        author: "Chief Technology Officer",
        company: "Metro Data Centers"
      }
    },
    {
      id: 4,
      title: "Wind Farm Grid Connection Project",
      client: "GreenPower Energy",
      industry: "Renewable Energy",
      location: "Flinders Ranges, South Australia",
      duration: "24 months",
      value: "$32M",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      challenge: "Connect 150MW wind farm to the National Electricity Market with complex grid code compliance, voltage regulation, and power quality requirements in a remote location with challenging terrain.",
      solution: "Delivered complete electrical infrastructure including collector systems, 132kV substation, transmission line, STATCOM for voltage support, advanced protection systems, and comprehensive SCADA integration.",
      results: [
        "150MW renewable capacity connected to grid",
        "Full compliance with NEM grid codes",
        "Voltage regulation within ±2% specification",
        "Project delivered 2 months ahead of schedule",
        "Annual generation: 450GWh clean energy"
      ],
      technologies: ["Wind Turbine Integration", "HV Substation", "STATCOM", "Grid Codes", "SCADA Systems"],
      testimonial: {
        quote: "GridFlow's deep understanding of grid integration challenges was instrumental in our project success. They navigated complex regulatory requirements and delivered exceptional technical solutions that enable optimal wind farm performance.",
        author: "Project Director",
        company: "GreenPower Energy"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        id="case-studies-hero" 
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
              <BookOpen className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Proven Success Stories</span>
            </div>
          </div>
          
          {/* Main headline with premium typography and animations */}
          <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6 relative text-white">
              Real Results, Real Impact—
              <span className="text-yellow-400 relative inline-block"> Case Studies
                {/* Subtle glow effect */}
                <div className="absolute inset-0 blur-sm text-yellow-400 opacity-30 animate-pulse"></div>
              </span>
            </h1>
          </div>
          
          {/* Enhanced subheading */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="mt-6 text-xl max-w-3xl text-gray-200 mb-8 leading-relaxed font-medium">
              Explore how GridFlow delivers exceptional results for clients across diverse industries with innovative power engineering solutions and proven methodologies.
            </p>
          </div>
          
          {/* Enhanced CTAs with animations */}
          <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                onClick={() => scrollToSection('case-studies-list')}
                className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-yellow-400/50 group text-lg"
              >
                <Bolt className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                View Success Stories
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-blue-500/50 font-semibold text-lg border-2 border-blue-700 hover:border-blue-600"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 text-gray-300">Explore case studies</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section id="case-studies-list" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <Card key={study.id} className="shadow-lg rounded-xl overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative ${isEven ? '' : 'lg:col-start-2'}`}>
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-grid-blue text-white">{study.industry}</Badge>
                      </div>
                    </div>
                    
                    <CardContent className={`p-8 lg:p-12 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <h2 className="text-2xl md:text-3xl font-bold text-grid-dark-blue mb-4">
                        {study.title}
                      </h2>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          {study.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {study.value}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-1" />
                          {study.client}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-grid-dark-blue mb-3">Challenge</h3>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-grid-dark-blue mb-3">Solution</h3>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-grid-dark-blue mb-3">Key Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                              <Zap className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-grid-dark-blue mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-grid-blue border-grid-blue">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-grid-light-gray p-4 rounded-lg mb-6">
                        <p className="text-gray-700 italic mb-3">"{study.testimonial.quote}"</p>
                        <p className="text-sm font-semibold text-grid-dark-blue">
                          {study.testimonial.author}, {study.testimonial.company}
                        </p>
                      </div>

                      <Button className="bg-grid-blue hover:bg-grid-dark-blue text-white">
                        View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-grid-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">
              Our Track Record
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Proven results across diverse industries and project scales.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "5000+", label: "MW Installed" },
              { value: "99.8%", label: "Client Satisfaction" },
              { value: "$2B+", label: "Project Value" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-grid-blue mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Let's discuss how GridFlow can deliver exceptional results for your next power engineering project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-grid-blue hover:bg-grid-dark-blue text-white px-8 py-3 text-lg">
              Start Your Project
            </Button>
            <Button variant="outline" className="border-2 border-grid-blue text-grid-blue hover:bg-grid-blue hover:text-white px-8 py-3 text-lg">
              Download Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;