import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Zap, Shield, BarChart, Settings } from "lucide-react";

const PowerSystems = () => {
  const capabilities = [
    {
      icon: Zap,
      title: "Load Flow Analysis",
      description: "Advanced power system modeling using ETAP and PSS®E for load distribution analysis and voltage regulation studies"
    },
    {
      icon: Shield,
      title: "Protection Coordination",
      description: "Comprehensive protection schemes design including relay coordination, fault analysis, and arc flash studies per IEEE 1584"
    },
    {
      icon: BarChart,
      title: "System Studies",
      description: "Short circuit analysis, transient stability studies, and power quality assessments for utility and industrial applications"
    },
    {
      icon: Settings,
      title: "Grid Integration",
      description: "Renewable energy integration studies, grid code compliance, and interconnection studies for solar, wind, and BESS"
    }
  ];

  const benefits = [
    "99.95% system reliability with optimized protection schemes",
    "30% reduction in fault clearing times through advanced coordination",
    "Complete AS/NZS 3008 and IEEE standards compliance",
    "Real-time monitoring integration with SCADA systems"
  ];

  const methodology = [
    {
      step: "01",
      title: "System Analysis",
      description: "Comprehensive assessment of existing electrical infrastructure and load requirements"
    },
    {
      step: "02", 
      title: "Modeling & Simulation",
      description: "Detailed power system modeling using industry-standard software (ETAP, DIgSILENT)"
    },
    {
      step: "03",
      title: "Design Optimization",
      description: "Protection coordination and system optimization for maximum reliability and efficiency"
    },
    {
      step: "04",
      title: "Implementation Support",
      description: "Construction supervision, testing, and commissioning with performance verification"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        id="power-systems-hero" 
        className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden"
      >
        {/* Background image - clean without filters */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/attached_assets/generated_images/Mining_power_systems_infrastructure_27b8e8e8.png)`,
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
              <Zap className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Power Systems Engineering</span>
            </div>
          </div>
          
          {/* Main headline with premium typography and animations */}
          <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6 relative text-white">
              Complete Electrical Infrastructure—
              <span className="text-yellow-400 relative inline-block"> LV to 350kV Systems
                {/* Subtle glow effect */}
                <div className="absolute inset-0 blur-sm text-yellow-400 opacity-30 animate-pulse"></div>
              </span>
            </h1>
          </div>
          
          {/* Enhanced subheading */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="mt-6 text-xl max-w-3xl text-gray-200 mb-8 leading-relaxed font-medium">
              Advanced power engineering solutions backed by ETAP modeling, protection coordination, and deep understanding of Australian mining and industrial standards.
            </p>
          </div>
          
          {/* Enhanced CTAs with animations */}
          <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
              <Link href="/contact">
                <Button 
                  className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-yellow-400/50 group text-lg"
                >
                  <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Request Technical Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button 
                  className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-blue-500/50 font-semibold text-lg border-2 border-blue-700 hover:border-blue-600"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 text-gray-300">Explore capabilities</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-6">Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive power systems engineering services for mining, industrial, and utility applications
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

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-8">Quantifiable Results</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-grid-electric-blue flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-grid-blue hover:bg-grid-dark-blue text-white">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Power Grid Infrastructure"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grid-dark-blue/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-6">Our Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven 4-step process ensuring optimal power system design and implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-grid-blue to-grid-electric-blue text-white text-xl font-bold rounded-full mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-grid-dark-blue mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-grid-deep-navy to-grid-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Power Systems?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get expert power systems engineering consultation for your next project. 
            Our team is ready to deliver reliable, efficient electrical infrastructure solutions.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-grid-electric-blue hover:bg-grid-electric-blue/90 text-white px-8 py-4 text-lg">
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PowerSystems;