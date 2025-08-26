import { Button } from "@/components/ui/button";
import { Award, Shield, Clock, Play } from "lucide-react";

const WhyChooseGridFlow = () => {
  const highlights = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Proven expertise delivering complex power engineering projects across mining, oil & gas, and industrial sectors throughout Western Australia."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising commitment to safety standards and regulatory compliance in every project."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Consistent track record of delivering projects on schedule and within budget constraints."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-grid-deep-navy" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative fade-in-up order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Mining electrical infrastructure with power systems" 
                className="w-full h-auto object-cover"
              />
              
              {/* Brand gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-grid-electric-blue/20 to-transparent" />
            </div>
          </div>

          {/* Content Side */}
          <div className="fade-in-up delay-100 order-1 lg:order-2">
            <div className="text-sm sm:text-base lg:text-xl font-semibold text-grid-vibrant-yellow mb-4 sm:mb-6 uppercase tracking-wider text-center lg:text-left">WHY CHOOSE US</div>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex items-start group card-lift p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl bg-gradient-to-r from-grid-charcoal to-grid-deep-navy border border-grid-electric-blue/20">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-grid-electric-blue rounded-lg sm:rounded-xl flex items-center justify-center mr-4 sm:mr-5 lg:mr-6 group-hover:bg-grid-vibrant-yellow transition-colors duration-300">
                      <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white group-hover:text-grid-deep-navy icon-bounce" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-grid-vibrant-yellow transition-colors leading-tight">{highlight.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGridFlow;