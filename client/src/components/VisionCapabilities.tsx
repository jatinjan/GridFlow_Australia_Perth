import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Award,
  Users,
  Zap,
  CheckCircle,
  Target,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const VisionCapabilities = () => {
  const capabilities = [
    {
      icon: Shield,
      title: "Industry Certified",
      description:
        "Licensed electrical engineers with Australian Standards compliance and safety certifications",
    },
    {
      icon: Award,
      title: "15+ Years Founder Expertise",
      description:
        "Proven founder experience in power systems study and electrical infrastructure",
    },
    {
      icon: Users,
      title: "Client-First Approach",
      description:
        "Dedicated project management ensuring clear communication and on-time delivery",
    },
    {
      icon: Zap,
      title: "Modern Solutions",
      description:
        "Latest technologies in renewable energy integration and smart grid systems",
    },
  ];

  const serviceAreas = [
    "Power Systems Study & Feasibility Analysis",
    "Grid Integration & Renewable Energy",
    "Electrical Infrastructure Planning",
    "Safety Compliance & Standards",
    "Project Management & Consulting",
    "System Maintenance & Support",
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-grid-light-gray to-white"
      id="vision"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-grid-blue/10 rounded-full text-grid-blue font-medium text-sm mb-6">
              <Target className="h-4 w-4 mr-2" />
              Our Vision & Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-6">
              Ready to Power Your Vision
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At Grid Flow, we bring together over 14 years of proven expertise
              with the latest SOTA software to deliver innovative,
              reliable electrical engineering solutions across Western
              Australia. Whether it’s a large-scale infrastructure project or a
              specialised system design, our team is equipped to deliver safe,
              efficient, and future-ready outcomes that power your success.
            </p>

            {/* Service Areas Checklist */}
            <div className="space-y-3 mb-8">
              {serviceAreas.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-grid-blue flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>

            <Button className="bg-grid-electric-blue hover:bg-grid-deep-navy text-white btn-glow group">
              Start Your Project
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            {/* Power engineering equipment and infrastructure */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Control_room_systems_090209bf.png"
                alt="Modern electrical control room with advanced monitoring and power grid management systems"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grid-blue/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="bg-white rounded-xl shadow-lg border-0 hover:shadow-xl transition-all duration-300 group card-lift"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-grid-blue to-grid-electric-blue rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-grid-dark-blue mb-3 group-hover:text-grid-blue transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionCapabilities;
