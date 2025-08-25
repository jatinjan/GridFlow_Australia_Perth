import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import powerSystemsImage from "@assets/generated_images/Power_systems_design_analysis_92130843.png";
import linesCablesImage from "@assets/generated_images/Lines_cables_design_engineering_f728920c.png";
import surveyingImage from "@assets/generated_images/Professional_surveying_services_7f582449.png";

const Services = () => {
  const [highlightedCard, setHighlightedCard] = useState<string | null>(null);

  useEffect(() => {
    const triggerHighlight = (hash: string) => {
      if (hash.startsWith('services-')) {
        // Clear any existing highlight first
        setHighlightedCard(null);
        
        // Use a small delay to ensure the animation can restart
        setTimeout(() => {
          setHighlightedCard(hash);
          
          // Smooth scroll to the card
          const element = document.getElementById(hash);
          
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          }
          
          // Reset highlight after animation
          setTimeout(() => {
            setHighlightedCard(null);
          }, 3000);
        }, 50);
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      triggerHighlight(hash);
    };

    const handleForceHighlight = (event: any) => {
      triggerHighlight(event.hash);
    };

    // Handle initial load with hash
    handleHashChange();
    
    // Listen for hash changes and force highlight events
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('forceHighlight', handleForceHighlight);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('forceHighlight', handleForceHighlight);
    };
  }, []);

  const services = [
    {
      id: "services-power-systems-design-analysis",
      title: "Power Systems Study & Feasibility Analysis",
      description:
        "Comprehensive electrical power system design including load flow analysis, short circuit studies, and protection coordination for optimal grid performance and reliability.",
      image: powerSystemsImage,
      features: [
        "Load Flow Analysis",
        "Short Circuit Studies",
        "Protection Coordination",
      ],
    },
    {
      id: "services-lines-and-cables-design",
      title: "Lines and Cables Design",
      description:
        "Expert design of overhead transmission lines and underground cable systems, including route optimization, conductor selection, and installation specifications.",
      image: linesCablesImage,
      features: [
        "Transmission Line Design",
        "Underground Cable Systems",
        "Route Optimization",
      ],
    },
    {
      title: "Earthing & Lightning Protection",
      description:
        "Comprehensive electrical infrastructure design including power distribution, load analysis, and grid integration solutions for commercial and industrial applications.",
      image: "/Earthing_lightning_protection_39a2d241.png",
      features: [
        "Earthing System Design",
        "Lightning Protection",
        "Grid Integration",
      ],
    },
    {
      id: "services-industrial-automation",
      title: "Industrial Automation",
      description:
        "Advanced control systems and automation solutions to optimize industrial processes, improve efficiency, and reduce operational costs.",
      image: "/Industrial_automation_control_e4db7dda.png",
      features: ["PLC Programming", "SCADA Systems", "Process Control"],
    },
    {
      title: "Renewable Energy Solutions",
      description:
        "Sustainable energy system design and implementation including solar, wind, and battery storage solutions for reduced environmental impact.",
      image: "/Renewable_energy_systems_58f5c24a.png",
      features: [
        "Solar PV Systems",
        "Wind Power Integration",
        "Energy Storage",
      ],
    },
    {
      title: "Surveying",
      description:
        "Professional land surveying and site assessment services for electrical infrastructure projects, including topographical mapping and route planning.",
      image: surveyingImage,
      features: [
        "Topographical Surveys",
        "Site Assessment",
        "Route Planning",
      ],
    },
    {
      title: "Power Safety & Compliance",
      description:
        "Comprehensive safety assessments, compliance audits, and risk management solutions to ensure all power infrastructure meet all regulatory requirements.",
      image: "/Power_safety_compliance_850dcf81.png",
      features: [
        "Design Audits & Verification",
        "Compliance Testing",
        "Risk Assessment",
      ],
    },
    {
      id: "services-construction-support",
      title: "Construction Support",
      description:
        "Complete construction support services from project planning through commissioning, ensuring safe and efficient delivery of electrical infrastructure projects.",
      image: "/Construction_support_services_07a90d6c.png",
      features: [
        "Project Coordination",
        "Site Supervision",
        "Quality Assurance",
      ],
    },
    {
      title: "Maintenance & Support",
      description:
        "Proactive maintenance programs and 24/7 support services to ensure optimal performance and minimize downtime of your power systems.",
      image: "/Maintenance_support_services_d05da68e.png",
      features: [
        "Preventive Maintenance",
        "Emergency Support",
        "System Upgrades",
      ],
    },
  ];

  return (
    <section className="py-20 bg-grid-light-gray" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-up">
          <div className="heading-sm text-grid-electric-blue mb-4">
            OUR SERVICES
          </div>
          <h2 className="heading-lg text-grid-deep-navy mb-6">
            Comprehensive Power Engineering Solutions
          </h2>
          <p className="text-grid-medium-gray text-xl max-w-4xl mx-auto leading-relaxed">
            Delivering critical electrical infrastructure solutions across
            Australia. From feasibility studies to commissioning, we provide
            technical excellence backed by proven expertise and innovative
            project delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              id={service.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 border border-gray-100 ${
                highlightedCard === service.id 
                  ? 'ring-4 ring-grid-electric-blue ring-opacity-75 shadow-2xl scale-105 animate-pulse' 
                  : ''
              }`}
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              style={{ 
                background: highlightedCard === service.id ? '#f0f8ff' : '' 
              }}
            >
              <CardContent className="p-8">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                    loading="lazy"
                    data-testid={`service-image-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                )}
                <h3 className="text-xl font-bold text-grid-dark-blue mb-4" data-testid={`service-title-${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="text-gray-600 space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => (window.location.href = "/services")}
                  variant="link"
                  className="text-grid-blue hover:text-grid-dark-blue font-semibold p-0 group"
                  data-testid={`service-learn-more-${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                >
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
