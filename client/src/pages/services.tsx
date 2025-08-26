import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check, ArrowRight, Zap, Settings, Leaf, Shield, Wrench, Users, Bolt, Cable, MapPin, ShieldCheck, HardHat, Headphones, Star, Award, TrendingUp, X } from "lucide-react";
import { useState } from "react";
import linesCablesImage from "@assets/generated_images/transmission_lines_cable_infrastructure_702654b7.png";
import maintenanceSupportImage from "@assets/generated_images/electrical_maintenance_support_services_8b02cc3f.png";
import { Link } from "wouter";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const mainServices = [
    {
      icon: Zap,
      title: "Power Systems Engineering",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "End-to-end power system engineering from initial feasibility through detailed design and optimization. Specializing in transmission, distribution, and generation systems for utilities and industrial clients across Australia.",
      capabilities: [
        "Load flow & transient stability analysis using ETAP/PSS®E/DIgSILENT",
        "Short circuit studies per IEC 60909 & IEEE standards",
        "Protection coordination & relay settings (11kV to 350kV)",
        "Power quality assessment per IEEE 519 & AS/NZS 61000",
        "Grid connection & Generator Performance Standards (GPS)",
        "SCADA/EMS system design with DNP3/IEC 61850 protocols"
      ],
      benefits: [
        "99.95%+ system reliability through optimized design",
        "30-40% reduction in unplanned outages",
        "Full AEMO & network compliance guaranteed",
        "20% improvement in power quality metrics"
      ]
    },
    {
      icon: Leaf,
      title: "Renewable Energy & Storage Systems",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Large-scale renewable integration expertise from 1MW to 500MW+. Specializing in solar farms, wind projects, and battery storage with proven track record of successful grid connections across the NEM.",
      capabilities: [
        "Solar PV design & single-line diagrams (1MW to 500MW)",
        "Wind farm electrical balance of plant & collector systems",
        "Battery energy storage systems (1MWh to 200MWh+)",
        "Hybrid renewable plants with advanced control systems",
        "AEMO registration & connection agreement support",
        "Power Purchase Agreement (PPA) technical modeling"
      ],
      benefits: [
        "35-45% reduction in levelized cost of energy",
        "10,000+ tonnes CO2 reduction per year",
        "Grid stability through advanced inverter controls",
        "Typical ROI achieved within 4-7 years"
      ]
    },
    {
      icon: Settings,
      title: "Industrial Automation & Control",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Industry 4.0 automation for mining, manufacturing, and process industries. Delivering 24/7 operational reliability through advanced control systems, predictive maintenance, and remote monitoring capabilities.",
      capabilities: [
        "PLC/DCS programming (Allen-Bradley, Siemens, ABB, Schneider)",
        "Advanced HMI/SCADA with historian integration",
        "Motor control centers & VFD systems up to 11kV",
        "Process control optimization & loop tuning",
        "Functional safety systems (SIL rated per IEC 61508)",
        "IIoT implementation & predictive analytics"
      ],
      benefits: [
        "40% increase in overall equipment effectiveness",
        "50% reduction in unplanned downtime",
        "25% decrease in energy consumption",
        "ROI typically within 18-24 months"
      ]
    },
    /* {
      icon: Shield,
      title: "Substation Design & Engineering",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Complete substation engineering from 11kV to 350kV. Expertise in AIS, GIS, and hybrid switchgear with modern digital substation capabilities including IEC 61850 process bus implementation.",
      capabilities: [
        "HV/EHV substation design (AIS, GIS, hybrid technology)",
        "Primary plant specification & secondary systems",
        "Protection & control schemes (IEC 61850 compliant)",
        "Earthing design per IEEE 80 & AS 2067 standards",
        "Lightning protection & insulation coordination",
        "Digital substation & process bus architecture"
      ],
      benefits: [
        "50% footprint reduction with GIS technology",
        "30% faster fault clearing times",
        "25+ year design life with optimal maintenance",
        "Full utility compliance & type testing"
      ]
    }, */
    {
      icon: Wrench,
      title: "Mining & Resources Electrical",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Specialized electrical solutions for mining operations. From underground power distribution to mobile fleet electrification, we ensure 24/7 operational continuity in the harshest environments.",
      capabilities: [
        "Underground power reticulation (11kV/6.6kV/3.3kV)",
        "Dragline & shovel power systems up to 13.8kV",
        "Mine site hybrid power (diesel/solar/battery)",
        "Haul truck trolley assist & charging infrastructure",
        "Hazardous area electrical design (Ex rated)",
        "Remote monitoring with satellite communications"
      ],
      benefits: [
        "30% reduction in diesel consumption",
        "Zero harm safety record achievement",
        "24/7 remote monitoring capability",
        "20% reduction in operating costs"
      ]
    },
    /* {
      icon: Users,
      title: "Project Management & EPC",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Complete EPC project delivery from concept through commissioning. Managing complex electrical infrastructure projects with proven methodologies ensuring on-time, on-budget delivery.",
      capabilities: [
        "Feasibility studies & FEED engineering",
        "Detailed design & construction documentation",
        "Procurement & vendor management",
        "Construction supervision & quality control",
        "Testing, commissioning & energization",
        "Training & operations handover"
      ],
      benefits: [
        "Single point of project accountability",
        "15% typical cost savings vs traditional",
        "Reduced project risk & contingency",
        "Performance guarantees & warranties"
      ]
    }, */
    // {
    //   icon: Bolt,
    //   title: "Power Systems Study & Feasibility Analysis",
    //   image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    //   description: "Comprehensive power system design and analysis services from feasibility studies to detailed engineering. Our certified engineers deliver optimized solutions using advanced modeling software and deep understanding of Australian grid codes.",
    //   capabilities: [
    //     "Load flow studies using ETAP, PSS®E, and PowerFactory",
    //     "Short circuit & arc flash analysis per IEEE/IEC standards",
    //     "Transient stability and harmonic analysis",
    //     "Protection coordination studies (11kV to 350kV)",
    //     "Power quality assessment and mitigation design",
    //     "Grid code compliance verification and modeling"
    //   ],
    //   benefits: [
    //     "99.9%+ system reliability through optimized design",
    //     "30% reduction in protection coordination time",
    //     "Full AEMO and utility compliance guaranteed",
    //     "15% improvement in power factor and efficiency"
    //   ]
    // },
    {
      icon: Cable,
      title: "Lines and Cables Design",
      image: linesCablesImage,
      description: "Specialized transmission and distribution line design including overhead lines, underground cables, and hybrid solutions. Expert route selection, thermal analysis, and compliance with Australian standards for all voltage levels.",
      capabilities: [
        "Overhead line design (11kV to 350kV) per AS/NZS standards",
        "Underground cable sizing and thermal analysis",
        "Route optimization and environmental impact assessment",
        "Tower foundation design and clearance calculations",
        "Cable fault location and diagnostic services",
        "Ampacity calculations with real-time thermal rating"
      ],
      benefits: [
        "25% reduction in line losses through optimal design",
        "40% faster route approval with environmental compliance",
        "20+ year design life with minimal maintenance",
        "Full weather loading and corrosion resistance"
      ]
    },
    {
      icon: MapPin,
      title: "Surveying",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Professional surveying services supporting electrical infrastructure development. From initial site assessment to as-built documentation, we provide precise measurements and mapping for optimal project delivery.",
      capabilities: [
        "Topographical surveys with RTK GPS accuracy",
        "Electrical infrastructure mapping and asset location",
        "Easement and boundary surveys for transmission corridors",
        "3D modeling and digital terrain mapping",
        "Underground utility detection and marking",
        "Drone surveying for remote and hazardous areas"
      ],
      benefits: [
        "±10mm survey accuracy with advanced GPS technology",
        "50% faster data collection using drone technology",
        "Comprehensive GIS integration and mapping",
        "Reduced design risks through accurate site data"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Power Safety & Compliance",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Comprehensive electrical safety and compliance services ensuring zero harm workplaces and full regulatory compliance. Expert arc flash studies, safety audits, and risk assessments for all electrical installations.",
      capabilities: [
        "Arc flash analysis and PPE selection per IEEE 1584",
        "Electrical safety audits and risk assessments",
        "AS/NZS 3000 and AS/NZS 3008 compliance verification",
        "Earthing system design per AS 2067 standards",
        "Lightning protection system design (AS 1768)",
        "Functional safety systems (SIL rated per IEC 61508)"
      ],
      benefits: [
        "Zero electrical incidents through comprehensive safety design",
        "100% regulatory compliance and audit readiness",
        "60% reduction in arc flash energy through design optimization",
        "Insurance premium reductions through demonstrated safety"
      ]
    },
    {
      icon: HardHat,
      title: "Construction Support",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "End-to-end construction support services from site supervision to commissioning. Our experienced engineers ensure quality delivery, safety compliance, and successful project handover within schedule and budget.",
      capabilities: [
        "Site supervision and construction management",
        "Quality assurance and testing protocols",
        "Commissioning and energization support",
        "Factory acceptance testing (FAT) and witness testing",
        "Construction documentation and as-built drawings",
        "Safety oversight and permit-to-work systems"
      ],
      benefits: [
        "95% first-time-right installation success rate",
        "25% reduction in construction defects",
        "On-time project delivery with zero safety incidents",
        "Comprehensive handover documentation and training"
      ]
    },
    {
      icon: Headphones,
      title: "Maintenance & Support",
      image: maintenanceSupportImage,
      description: "Comprehensive maintenance and support services ensuring maximum asset life and reliability. From preventive maintenance programs to 24/7 emergency response, we keep your electrical systems running optimally.",
      capabilities: [
        "Preventive maintenance programs and scheduling",
        "Predictive maintenance using thermal imaging and vibration analysis",
        "24/7 emergency response and breakdown support",
        "Asset condition monitoring and life assessment",
        "Switchgear testing and protection relay calibration",
        "Remote monitoring and SCADA system support"
      ],
      benefits: [
        "40% reduction in unplanned downtime",
        "25% extension in asset life through optimal maintenance",
        "2-hour emergency response time guarantee",
        "Comprehensive maintenance documentation and trending"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section - Enhanced with modern design */}
      <section
        id="services-hero"
        className="relative min-h-[100vh] w-full flex items-center justify-center text-white overflow-hidden"
      >
        {/* Background with enhanced overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/gridflow-hero-banner.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-navy-800/70 to-black/60 z-10"></div>

        {/* Animated elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-400 animate-pulse z-20" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Service badge */}
            <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-200">
              <Badge variant="outline" className="mb-6 px-4 py-2 bg-yellow-400/20 border-yellow-400/40 text-yellow-400 text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                Complete Engineering Services
              </Badge>
            </div>

            {/* Main headline */}
            <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Comprehensive Power Engineering
                <span className="text-yellow-400 block mt-2">All Services Under One Roof</span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                From power systems study to renewable integration, automation control, and construction support—discover our complete range of electrical engineering services.
              </p>
            </div>

            {/* CTAs */}
            <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => scrollToSection('comprehensive-services')}
                  size="lg"
                  className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 group"
                >
                  <Bolt className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Explore All Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link href="/contact#contact-form">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 border-2 border-white bg-transparent !text-white hover:!bg-white hover:!text-blue-900 transition-all duration-300 font-semibold"
                  >
                    Get Technical Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 sm:bottom-8 lg:bottom-0 inset-x-0 text-white animate-bounce z-30">
          <div className="flex flex-col items-center justify-center text-center w-full">
            <span className="text-sm sm:text-base mb-3 sm:mb-4 text-gray-200 font-medium drop-shadow-lg">Scroll to explore</span>
            <div className="w-7 h-12 sm:w-8 sm:h-14 border-2 border-gray-200 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
              <div className="w-1.5 h-4 sm:w-2 sm:h-5 bg-yellow-400 rounded-full mt-2 sm:mt-3 animate-pulse shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section - Completely redesigned */}
      <section id="comprehensive-services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 bg-blue-50 border-blue-200 text-blue-700">
              <Award className="h-4 w-4 mr-2" />
              Technical Excellence
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Engineering Solutions Across All Voltage Levels
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              With expertise spanning LV to 330kV systems, we deliver integrated engineering solutions backed by proven industry experience,
              advanced simulation tools, and deep understanding of Australian standards and grid requirements.
            </p>
          </div>

          {/* Services Grid - Modern card layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;

              // Generate ID for anchor links
              const serviceId = service.title.toLowerCase()
                .replace(/&/g, '')
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');

              return (
                <Card key={index} id={serviceId} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="h-6 w-6 text-black" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key capabilities - showing first 3 */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                        Key Capabilities
                      </h4>
                      <div className="space-y-2">
                        {service.capabilities.slice(0, 3).map((capability, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 leading-tight">{capability}</span>
                          </div>
                        ))}
                        {service.capabilities.length > 3 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{service.capabilities.length - 3} more capabilities
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Key benefits - showing first 2 */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <Star className="h-4 w-4 mr-2 text-yellow-500" />
                        Key Benefits
                      </h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 leading-tight">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => openServiceModal(service)}
                      className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 group-hover:border-blue-300 transition-all"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve - Enhanced design */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 bg-green-50 border-green-200 text-green-700">
              <Users className="h-4 w-4 mr-2" />
              Industry Expertise
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Founded by industry veterans with deep expertise across critical industries.
              We understand the unique challenges and compliance requirements of each sector.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: "Mining & Resources", icon: "⛏️", desc: "Underground & Surface" },
              { name: "Manufacturing", icon: "🏭", desc: "Industrial Automation" },
              { name: "Oil & Gas", icon: "⛽", desc: "Hazardous Areas" },
              { name: "Data Centers", icon: "🏢", desc: "Critical Power" },
              { name: "Utilities", icon: "⚡", desc: "Grid Infrastructure" },
              { name: "Renewable Energy", icon: "🌱", desc: "Clean Technology" }
            ].map((industry, index) => (
              <Card key={index} className="group bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 leading-tight">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-tight">
                    {industry.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - New section */}
      {/* <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 bg-yellow-50 border-yellow-200 text-yellow-700">
              <Shield className="h-4 w-4 mr-2" />
              Why Choose GridFlow
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Engineering Excellence That Delivers Results
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Our proven track record speaks for itself. Here's why leading organizations trust GridFlow for their critical electrical engineering needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Award,
                title: "15+ Years Experience",
                description: "Proven founder expertise across mining, utilities, and renewable sectors",
                stat: "150+",
                statLabel: "Projects Delivered"
              },
              {
                icon: Shield,
                title: "100% Compliance",
                description: "Full compliance with Australian standards and AEMO requirements guaranteed",
                stat: "Zero",
                statLabel: "Safety Incidents"
              },
              {
                icon: TrendingUp,
                title: "Measurable Results",
                description: "Quantifiable improvements in reliability, efficiency, and cost optimization",
                stat: "30%",
                statLabel: "Average Cost Savings"
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Emergency response within 2 hours with comprehensive maintenance programs",
                stat: "2hr",
                statLabel: "Response Time"
              }
            ].map((feature, index) => (
              <Card key={index} className="group text-center bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">
                      {feature.statLabel}
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action - Enhanced design */}
      {/* <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-white/20 border-white/30 text-white">
              <Bolt className="h-4 w-4 mr-2" />
              Ready to Get Started?
            </Badge>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Partner with Australia's Most Innovative Power Engineers
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
              Founded by industry veterans with 15+ years of proven expertise across mining, utilities, and renewable sectors. Our CPEng qualified engineers deliver 
              innovative solutions that optimize costs, enhance reliability, and ensure 100% compliance with Australian standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                onClick={() => window.location.href = '/contact'}
                size="lg"
                className="px-8 py-4 bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Zap className="mr-2 h-5 w-5" />
                Schedule Technical Discussion
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-blue-200">
              <div className="flex items-center">
                <Headphones className="h-4 w-4 mr-2" />
                24/7 Emergency Support Available
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Response Within 2 Hours
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Service Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl max-h-[95vh] w-[95vw] overflow-y-auto mx-2 sm:mx-4">
          {selectedService && (
            <>
              <DialogHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <selectedService.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                      {selectedService.title}
                    </DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Left Column - Image and Description */}
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-56 sm:h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Service Overview</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>
                </div>

                {/* Right Column - Capabilities and Benefits */}
                <div className="space-y-6">
                  {/* Core Capabilities */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                      Core Capabilities
                    </h3>
                    <div className="space-y-3">
                      {selectedService.capabilities.map((capability: string, idx: number) => (
                        <div key={idx} className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 leading-relaxed">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Star className="h-5 w-5 mr-2 text-yellow-500" />
                      Key Benefits
                    </h3>
                    <div className="space-y-3">
                      {selectedService.benefits.map((benefit: string, idx: number) => (
                        <div key={idx} className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-6 border-t border-gray-200">
                    <Button
                      onClick={() => {
                        setIsModalOpen(false);
                        window.location.href = '/contact#contact-form';
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base py-4 font-semibold"
                    >
                      <Zap className="mr-2 h-5 w-5" />
                      Get Quote & Expert Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Services;