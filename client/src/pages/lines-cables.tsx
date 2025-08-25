import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Cable, Zap, Shield, Wrench } from "lucide-react";

const LinesCables = () => {
  const capabilities = [
    {
      icon: Cable,
      title: "Transmission Line Design",
      description: "Complete design of overhead transmission lines from 11kV to 350kV including conductor selection, tower design, and clearance calculations"
    },
    {
      icon: Zap,
      title: "Underground Cable Systems",
      description: "High voltage underground cable design including XLPE, EPR cable selection, cable sizing, and installation methodology for mining applications"
    },
    {
      icon: Shield,
      title: "Cable Protection Systems",
      description: "Advanced cable protection including earth fault detection, differential protection, and thermal monitoring for critical mining infrastructure"
    },
    {
      icon: Wrench,
      title: "Installation & Testing",
      description: "Complete installation supervision, commissioning, and testing including cable fault location, insulation testing, and performance verification"
    }
  ];

  const benefits = [
    "50+ year design life with optimized cable selection",
    "99.9% availability through redundant cable routing",
    "30% reduction in installation costs with efficient design",
    "Complete compliance with AS/NZS 3007 and IEC standards"
  ];

  const applications = [
    {
      title: "Mining Operations",
      description: "High voltage feeders to processing plants, underground mine power distribution, and mobile equipment connections",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Oil & Gas Facilities", 
      description: "Hazardous area cable installations, offshore platform connections, and critical process power distribution",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Transmission Networks",
      description: "Grid connection infrastructure, substation interconnections, and renewable energy farm connections",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const specifications = [
    "Voltage levels: LV (415V) to EHV (350kV)",
    "Cable types: XLPE, EPR, PVC, and specialty mining cables",
    "Installation methods: Direct buried, ducted, cable tray, and overhead",
    "Protection systems: Differential, earth fault, and thermal protection",
    "Testing standards: AS/NZS 3007, IEC 60502, IEEE 400"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        id="lines-cables-hero" 
        className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden"
      >
        {/* Background image - clean without filters */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/attached_assets/generated_images/Oil_gas_transmission_infrastructure_280c91a9.png)`,
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
              <Cable className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Lines & Cables Engineering</span>
            </div>
          </div>
          
          {/* Main headline with premium typography and animations */}
          <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6 relative text-white">
              High Voltage Transmission—
              <span className="text-yellow-400 relative inline-block"> Mining to Grid Connection
                {/* Subtle glow effect */}
                <div className="absolute inset-0 blur-sm text-yellow-400 opacity-30 animate-pulse"></div>
              </span>
            </h1>
          </div>
          
          {/* Enhanced subheading */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="mt-6 text-xl max-w-3xl text-gray-200 mb-8 leading-relaxed font-medium">
              Complete transmission line and cable system design for mining, oil & gas, and industrial applications with 50+ year design life and proven reliability.
            </p>
          </div>
          
          {/* Enhanced CTAs with animations */}
          <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
              <Link href="/contact">
                <Button 
                  className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-yellow-400/50 group text-lg"
                >
                  <Cable className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Request Cable Design
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button 
                  className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-blue-500/50 font-semibold text-lg border-2 border-blue-700 hover:border-blue-600"
                >
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 text-gray-300">Explore solutions</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-6">Engineering Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive transmission line and cable system design for critical infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-grid-blue/10 to-grid-electric-blue/10 rounded-xl">
                    <capability.icon className="h-8 w-8 text-grid-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-grid-dark-blue mb-3">{capability.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-6">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized cable solutions for demanding industrial environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={application.image} 
                    alt={application.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-grid-dark-blue mb-3">{application.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{application.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-8">Technical Specifications</h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-grid-electric-blue flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{spec}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-grid-dark-blue mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-grid-electric-blue flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="High Voltage Transmission Lines"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grid-dark-blue/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-grid-deep-navy to-grid-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Reliable Cable Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get expert transmission line and cable system design for your critical infrastructure. 
            Our proven solutions ensure maximum reliability and performance.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-grid-electric-blue hover:bg-grid-electric-blue/90 text-white px-8 py-4 text-lg">
              Discuss Your Cable Requirements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LinesCables;