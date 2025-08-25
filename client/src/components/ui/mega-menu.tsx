import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Building2, 
  Wrench, 
  Shield, 
  Factory, 
  Home, 
  Cpu, 
  Lightbulb,
  ChevronDown,
  ArrowRight,
  Phone,
  Cable,
  Settings,
  HardHat
} from "lucide-react";

interface MegaMenuCard {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

interface MegaMenuSection {
  title: string;
  cards: MegaMenuCard[];
  featuredImage?: string;
  featuredTagline?: string;
}

const megaMenuData: Record<string, MegaMenuSection> = {
  services: {
    title: "Our Services",
    cards: [
      {
        title: "Power Systems",
        description: "Complete electrical infrastructure design from LV to 350kV including load flow analysis, protection coordination, and grid integration",
        icon: Zap,
        href: "/services/power-systems"
      },
      {
        title: "Lines & Cables",
        description: "High voltage transmission lines, underground cable systems, and overhead line design for mining and industrial applications",
        icon: Cable,
        href: "/services/lines-cables"
      },
      {
        title: "Automation & Control",
        description: "Advanced PLC/SCADA systems, motor control centers, and Industry 4.0 solutions for mining and manufacturing facilities",
        icon: Settings,
        href: "/services/automation-control"
      },
      {
        title: "Construction Support",
        description: "End-to-end project delivery from feasibility studies through commissioning with proven EPC methodologies and site supervision",
        icon: HardHat,
        href: "/services/construction-support"
      }
    ],
    featuredImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    featuredTagline: "15+ Years of Founder Expertise"
  },
  industries: {
    title: "Industries We Serve",
    cards: [
      {
        title: "Manufacturing",
        description: "Power solutions for industrial facilities and production lines",
        icon: Factory,
        href: "/industries#manufacturing"
      },
      {
        title: "Commercial Buildings",
        description: "Electrical systems for offices, retail, and commercial spaces",
        icon: Building2,
        href: "/industries#commercial"
      },
      {
        title: "Residential",
        description: "Home electrical systems and smart home integration",
        icon: Home,
        href: "/industries#residential"
      },
      {
        title: "Healthcare",
        description: "Critical power systems for hospitals and medical facilities",
        icon: Shield,
        href: "/industries#healthcare"
      },
      {
        title: "Data Centers",
        description: "High-reliability power infrastructure for mission-critical operations",
        icon: Cpu,
        href: "/industries#data-centers"
      },
      {
        title: "Renewable Energy",
        description: "Solar, wind, and other sustainable energy solutions",
        icon: Lightbulb,
        href: "/industries#renewable"
      }
    ],
    featuredImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    featuredTagline: "Trusted Across All Industries"
  }
};

interface MegaMenuProps {
  trigger: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const MegaMenu = ({ trigger, children, isActive }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const menuData = megaMenuData[trigger.toLowerCase()];

  if (!menuData) {
    return (
      <div className="relative">
        {children}
      </div>
    );
  }

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex items-center space-x-1 px-4 py-3 text-lg font-medium transition-colors cursor-pointer ${
        isActive ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
      }`}>
        <span>{trigger}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* Mega Menu Dropdown */}
      {isOpen && (
        <div 
          ref={menuRef}
          className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 w-screen max-w-6xl bg-white shadow-2xl rounded-2xl border border-gray-100 z-50 overflow-hidden animate-in slide-in-from-top-2 duration-300"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 102, 179, 0.05)'
          }}
        >
          <div className="p-10">
            <div className="grid grid-cols-12 gap-10">
              {/* Menu Cards Section */}
              <div className="col-span-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-grid-blue to-grid-electric-blue rounded-full"></div>
                  <h3 className="text-sm font-semibold text-grid-blue uppercase tracking-wider">{menuData.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {menuData.cards.map((card, index) => (
                    <Link key={index} href={card.href}>
                      <div className="group p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-xl hover:scale-[1.03] hover:border-grid-blue/30 transition-all duration-300 cursor-pointer card-lift relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-grid-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-grid-blue/10 to-grid-electric-blue/10 group-hover:from-grid-blue/20 group-hover:to-grid-electric-blue/20 transition-all duration-300 group-hover:shadow-lg">
                              <card.icon className="h-6 w-6 text-grid-blue group-hover:scale-110 group-hover:text-grid-electric-blue transition-all duration-300" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-grid-dark-blue group-hover:text-grid-blue transition-colors text-base">
                                {card.title}
                              </h4>
                              <p className="text-sm text-grid-gray mt-2 leading-relaxed">
                                {card.description}
                              </p>
                              <div className="flex items-center mt-4 text-grid-blue opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                                <span className="text-sm font-medium">Learn more</span>
                                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured Section */}
              <div className="col-span-4">
                <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden bg-gradient-to-br from-grid-blue via-grid-electric-blue to-grid-dark-blue shadow-xl border border-grid-blue/20">
                  {menuData.featuredImage && (
                    <img 
                      src={menuData.featuredImage} 
                      alt="Featured"
                      className="absolute inset-0 w-full h-full object-cover opacity-20"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="relative h-full p-8 flex flex-col justify-end text-white">
                    <h4 className="text-xl font-bold mb-3">{menuData.featuredTagline}</h4>
                    <p className="text-base opacity-90 mb-6">
                      Ready to discuss your project? Our expert team is here to help.
                    </p>
                    <Link href="/contact">
                      <Button className="bg-white text-grid-blue hover:bg-gray-100 hover:scale-105 w-full btn-glow shadow-lg transition-all duration-300 group">
                        <Phone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Request Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Mobile Mega Menu Component
interface MobileMegaMenuProps {
  trigger: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMegaMenu = ({ trigger, isOpen, onToggle }: MobileMegaMenuProps) => {
  const menuData = megaMenuData[trigger.toLowerCase()];

  if (!menuData) {
    return null;
  }

  return (
    <div className="border-t border-gray-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-4 text-lg font-medium text-grid-gray hover:text-grid-blue transition-colors"
      >
        <span>{trigger}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="pb-4 px-3">
          <div className="space-y-3">
            {menuData.cards.map((card, index) => (
              <Link key={index} href={card.href}>
                <div onClick={onToggle} className="flex items-center space-x-3 p-3 rounded-lg bg-grid-light-gray hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-grid-blue/10">
                    <card.icon className="h-4 w-4 text-grid-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-grid-dark-blue text-sm">{card.title}</h4>
                    <p className="text-xs text-grid-gray mt-1">{card.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link href="/contact">
              <Button onClick={onToggle} className="w-full bg-grid-blue text-white hover:bg-grid-dark-blue">
                <Phone className="h-4 w-4 mr-2" />
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};