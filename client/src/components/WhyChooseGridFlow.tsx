import { Button } from "@/components/ui/button";
import { Award, Shield, Clock, Play } from "lucide-react";

const WhyChooseGridFlow = () => {
  const highlights = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "15+ years of proven founder expertise delivering complex power engineering projects across industries."
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
    <section className="py-20 bg-grid-deep-navy" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative fade-in-up">
            <div className="relative overflow-hidden rounded-2xl">
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
          <div className="fade-in-up delay-100">
            <div className="heading-sm text-grid-vibrant-yellow mb-4">WHY CHOOSE US</div>

            <div className="space-y-8">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex items-start group card-lift p-6 rounded-xl bg-gradient-to-r from-grid-charcoal to-grid-deep-navy border border-grid-electric-blue/20">
                    <div className="flex-shrink-0 w-16 h-16 bg-grid-electric-blue rounded-xl flex items-center justify-center mr-6 group-hover:bg-grid-vibrant-yellow transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-white group-hover:text-grid-deep-navy icon-bounce" />
                    </div>
                    <div>
                      <h3 className="heading-md text-white mb-3 group-hover:text-grid-vibrant-yellow transition-colors">{highlight.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
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