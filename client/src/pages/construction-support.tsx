import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, HardHat, ClipboardCheck, Wrench, Shield } from "lucide-react";

const ConstructionSupport = () => {
  const capabilities = [
    {
      icon: HardHat,
      title: "Project Management",
      description: "Complete EPC project delivery from feasibility studies through commissioning with proven methodologies and milestone tracking"
    },
    {
      icon: ClipboardCheck,
      title: "Construction Supervision",
      description: "On-site engineering support including installation oversight, quality control, and progress monitoring for electrical infrastructure"
    },
    {
      icon: Wrench,
      title: "Testing & Commissioning",
      description: "Comprehensive testing protocols including factory acceptance testing, site acceptance testing, and performance verification"
    },
    {
      icon: Shield,
      title: "Safety Management",
      description: "Complete safety management including risk assessments, method statements, and compliance with mining safety regulations"
    }
  ];

  const services = [
    "Feasibility studies and pre-construction planning",
    "Detailed engineering and construction documentation",
    "Construction supervision and site management",
    "Testing, commissioning, and performance verification",
    "Project handover and operations training",
    "Warranty support and maintenance planning"
  ];

  const projectPhases = [
    {
      phase: "Pre-Construction",
      title: "Planning & Design",
      description: "Feasibility studies, detailed design, procurement planning, and construction methodology development",
      deliverables: ["Feasibility reports", "Detailed drawings", "Material lists", "Construction schedule"]
    },
    {
      phase: "Construction",
      title: "Implementation & Supervision", 
      description: "On-site supervision, quality control, progress monitoring, and safety management throughout construction",
      deliverables: ["Weekly progress reports", "Quality inspections", "Safety audits", "Commissioning plans"]
    },
    {
      phase: "Commissioning",
      title: "Testing & Handover",
      description: "Comprehensive testing, performance verification, training, and project handover to operations team",
      deliverables: ["Test certificates", "O&M manuals", "Training records", "Performance reports"]
    }
  ];

  const projectTypes = [
    {
      title: "Mining Infrastructure",
      description: "Complete electrical infrastructure for new mines including substations, distribution networks, and mobile equipment power",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      scope: ["High voltage substations", "Underground distribution", "Surface infrastructure", "Mobile equipment power"]
    },
    {
      title: "Industrial Facilities",
      description: "Manufacturing and processing plant electrical systems including power distribution, control systems, and safety systems",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      scope: ["Process power systems", "Motor control centers", "Emergency power", "Instrumentation & control"]
    },
    {
      title: "Renewable Energy Projects",
      description: "Solar, wind, and battery storage installations with grid connection infrastructure and monitoring systems",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      scope: ["Solar farm construction", "Wind farm infrastructure", "Battery storage systems", "Grid connection works"]
    }
  ];

  const benefits = [
    "95% on-time project delivery with proven project management",
    "Zero safety incidents through comprehensive safety management",
    "20% reduction in construction costs through optimized design",
    "Complete documentation and training for seamless handover"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        id="construction-support-hero" 
        className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden"
      >
        {/* Background image - clean without filters */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/attached_assets/generated_images/Electrical_construction_site_f5d41eab.png)`,
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
              <HardHat className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Construction Support Services</span>
            </div>
          </div>
          
          {/* Main headline with premium typography and animations */}
          <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6 relative text-white">
              Complete EPC Project Delivery—
              <span className="text-yellow-400 relative inline-block"> Concept to Commissioning
                {/* Subtle glow effect */}
                <div className="absolute inset-0 blur-sm text-yellow-400 opacity-30 animate-pulse"></div>
              </span>
            </h1>
          </div>
          
          {/* Enhanced subheading */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="mt-6 text-xl max-w-3xl text-gray-200 mb-8 leading-relaxed font-medium">
              End-to-end project delivery from feasibility studies through commissioning with proven EPC methodologies, safety management, and successful project handover.
            </p>
          </div>
          
          {/* Enhanced CTAs with animations */}
          <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
              <Link href="/contact">
                <Button 
                  className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-yellow-400/50 group text-lg"
                >
                  <HardHat className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button 
                  className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-blue-500/50 font-semibold text-lg border-2 border-blue-700 hover:border-blue-600"
                >
                  View Completed Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 text-gray-300">Explore projects</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-6">Construction Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive project management and construction support for electrical infrastructure projects
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

      {/* Project Phases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-6">Project Delivery Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven 3-phase methodology ensuring successful project delivery from concept to completion
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectPhases.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-grid-blue to-grid-electric-blue text-white text-xl font-bold rounded-full mb-4">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-grid-electric-blue uppercase tracking-wider">{phase.phase}</span>
                  <h3 className="text-xl font-bold text-grid-dark-blue mt-2">{phase.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{phase.description}</p>
                <div>
                  <h4 className="font-semibold text-grid-dark-blue mb-3">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-grid-electric-blue mr-2 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-6">Project Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized construction support across diverse electrical infrastructure projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-grid-dark-blue mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  <div>
                    <h4 className="font-semibold text-grid-dark-blue mb-3">Project Scope:</h4>
                    <div className="space-y-2">
                      {project.scope.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-grid-electric-blue mr-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-grid-dark-blue mb-8">Complete Service Portfolio</h2>
              <div className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-grid-electric-blue flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{service}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-grid-dark-blue mb-4">Project Benefits</h3>
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
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction Site Management"
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get expert construction support and project management for your electrical infrastructure. 
            Our proven EPC methodology ensures successful project delivery on time and on budget.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-grid-electric-blue hover:bg-grid-electric-blue/90 text-white px-8 py-4 text-lg">
              Discuss Your Construction Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConstructionSupport;