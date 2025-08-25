import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Settings, Monitor, Cpu, Gauge } from "lucide-react";

const AutomationControl = () => {
  const capabilities = [
    {
      icon: Settings,
      title: "PLC Programming & Design",
      description: "Advanced PLC systems design and programming using Allen-Bradley, Siemens, and Schneider platforms for mining and industrial automation"
    },
    {
      icon: Monitor,
      title: "SCADA Systems",
      description: "Complete SCADA development with real-time monitoring, data historian, alarm management, and remote control capabilities"
    },
    {
      icon: Cpu,
      title: "Industrial IoT Integration",
      description: "Industry 4.0 solutions including edge computing, wireless networks, and data analytics for predictive maintenance and optimization"
    },
    {
      icon: Gauge,
      title: "Process Control Systems",
      description: "Advanced process control including cascade control, feedforward systems, and model predictive control for critical processes"
    }
  ];

  const benefits = [
    "40% improvement in operational efficiency through automation",
    "90% reduction in unplanned downtime with predictive maintenance",
    "Real-time visibility across all plant operations",
    "Full integration with existing enterprise systems (SAP, PI, etc.)"
  ];

  const technologies = [
    {
      category: "PLC Platforms",
      items: ["Allen-Bradley ControlLogix", "Siemens S7-1500", "Schneider Modicon M580", "GE RX3i"]
    },
    {
      category: "SCADA Software",
      items: ["Wonderware System Platform", "Ignition SCADA", "iFIX", "WinCC"]
    },
    {
      category: "Communication Protocols", 
      items: ["Ethernet/IP", "Profinet", "Modbus TCP", "OPC UA", "DNP3"]
    },
    {
      category: "Safety Systems",
      items: ["Safety PLCs", "SIS Design", "Functional Safety", "SIL Assessment"]
    }
  ];

  const applications = [
    {
      title: "Mining Process Control",
      description: "Complete automation of crushing, grinding, flotation, and concentrator operations with advanced process optimization",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Real-time ore tracking", "Equipment performance monitoring", "Predictive maintenance", "Safety system integration"]
    },
    {
      title: "Oil & Gas Automation",
      description: "Wellhead control, pipeline monitoring, tank farm management, and emergency shutdown systems for upstream operations",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Leak detection systems", "Flow measurement", "Pressure monitoring", "Emergency response"]
    },
    {
      title: "Manufacturing Automation",
      description: "End-to-end production line automation with quality control, material handling, and production tracking systems",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Production scheduling", "Quality assurance", "Inventory management", "Performance analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        id="automation-control-hero" 
        className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden"
      >
        {/* Background image - clean without filters */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/attached_assets/generated_images/Industrial_automation_control_room_fdf8e36a.png)`,
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
              <Settings className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Automation & Control Systems</span>
            </div>
          </div>
          
          {/* Main headline with premium typography and animations */}
          <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6 relative text-white">
              Advanced Industrial Automation—
              <span className="text-yellow-400 relative inline-block"> PLC to Industry 4.0
                {/* Subtle glow effect */}
                <div className="absolute inset-0 blur-sm text-yellow-400 opacity-30 animate-pulse"></div>
              </span>
            </h1>
          </div>
          
          {/* Enhanced subheading */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="mt-6 text-xl max-w-3xl text-gray-200 mb-8 leading-relaxed font-medium">
              Complete PLC/SCADA systems, motor control centers, and Industry 4.0 solutions for mining, manufacturing, and critical infrastructure operations.
            </p>
          </div>
          
          {/* Enhanced CTAs with animations */}
          <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
              <Link href="/contact">
                <Button 
                  className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-yellow-400/50 group text-lg"
                >
                  <Settings className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Request Automation Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button 
                  className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-blue-500/50 font-semibold text-lg border-2 border-blue-700 hover:border-blue-600"
                >
                  View Automation Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 text-gray-300">Discover automation</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-6">Automation Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive industrial automation and control system design for mission-critical operations
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

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading platforms and protocols for robust automation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-grid-dark-blue mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm flex items-center">
                      <CheckCircle className="h-4 w-4 text-grid-electric-blue mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-6">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized automation solutions for demanding industrial environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                  <p className="text-gray-600 leading-relaxed mb-4">{application.description}</p>
                  <div className="space-y-2">
                    {application.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-grid-electric-blue mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
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
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Industrial Control Room"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grid-dark-blue/20 to-transparent rounded-2xl"></div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-8">Proven Results</h2>
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
                    Discuss Your Automation Needs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-grid-deep-navy to-grid-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Transform your industrial processes with advanced automation and control systems. 
            Our proven solutions deliver measurable improvements in efficiency and reliability.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-grid-electric-blue hover:bg-grid-electric-blue/90 text-white px-8 py-4 text-lg">
              Start Your Automation Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomationControl;