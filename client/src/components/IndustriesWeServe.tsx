import { Card, CardContent } from "@/components/ui/card";
import { Building2, Hammer, Zap, Database, Leaf, Truck } from "lucide-react";

const IndustriesWeServe = () => {
  const industries = [
    {
      icon: Building2,
      title: "Commercial",
      description: "Comprehensive electrical systems for office complexes, retail centers, and high-rise developments with focus on energy efficiency and smart building integration.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Hammer,
      title: "Mining",
      description: "Robust power infrastructure for remote mining operations, including high-voltage distribution, backup systems, and specialized equipment electrification.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Zap,
      title: "Oil & Gas",
      description: "Explosion-proof electrical systems and hazardous area installations meeting strict safety standards for refineries, offshore platforms, and processing plants.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Database,
      title: "Data Centres",
      description: "Critical power systems with 99.999% uptime, redundant UPS configurations, and sophisticated monitoring for mission-critical computing facilities.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Leaf,
      title: "Renewables",
      description: "Solar farms, wind turbines, and battery storage systems with smart grid integration, power conditioning, and renewable energy management solutions for sustainable power generation.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Building2,
      title: "Utilities",
      description: "Grid modernization, lines and substation design, and renewable energy integration for power generation, transmission and distribution utilities across Western Australia.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Truck,
      title: "Transport",
      description: "Electrification infrastructure for railways, ports, and logistics hubs, including EV charging networks and intelligent traffic management systems.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-grid-dark-blue mb-3 sm:mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Our expertise spans across multiple industries, delivering specialized power engineering solutions that meet unique sector requirements and regulatory standards.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* First row - 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {industries.slice(0, 4).map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group h-full">
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Second row - 3 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl">
              {industries.slice(4).map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <Card key={index + 4} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group h-full">
                    <CardContent className="p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                        {industry.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;