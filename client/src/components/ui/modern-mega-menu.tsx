import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { 
  ChevronDown, 
  Zap, 
  Building, 
  Factory, 
  Wrench, 
  Shield, 
  BarChart3, 
  Lightbulb,
  Construction,
  Cpu,
  Hospital,
  ShoppingCart,
  Truck,
  Home,
  Settings,
  FileText,
  Users
} from "lucide-react";

interface MegaMenuProps {
  trigger: string;
  children: React.ReactNode;
  isActive?: boolean;
}

interface MenuSection {
  title: string;
  items: Array<{
    name: string;
    href: string;
    icon: React.ReactNode;
    description?: string;
  }>;
}

const servicesData: MenuSection[] = [
  {
    title: "Design & Engineering",
    items: [
      {
        name: "Power System Study",
        href: "/services/power-system-design",
        icon: <Zap className="w-5 h-5" />,
        description: "Complete electrical power system design and planning"
      },
      {
        name: "Load Flow Analysis",
        href: "/services/load-flow-analysis", 
        icon: <BarChart3 className="w-5 h-5" />,
        description: "Advanced power system analysis and optimization"
      },
      {
        name: "Protection Studies",
        href: "/services/protection-studies",
        icon: <Shield className="w-5 h-5" />,
        description: "Comprehensive electrical protection coordination"
      },
      {
        name: "Arc Flash Studies",
        href: "/services/arc-flash-studies",
        icon: <Lightbulb className="w-5 h-5" />,
        description: "Safety analysis and arc flash hazard assessment"
      }
    ]
  },
  {
    title: "Construction & Installation",
    items: [
      {
        name: "Project Management",
        href: "/services/project-management",
        icon: <Settings className="w-5 h-5" />,
        description: "End-to-end electrical project delivery"
      },
      {
        name: "Installation Services",
        href: "/services/installation",
        icon: <Construction className="w-5 h-5" />,
        description: "Professional electrical installation and commissioning"
      },
      {
        name: "Testing & Commissioning",
        href: "/services/testing-commissioning",
        icon: <Wrench className="w-5 h-5" />,
        description: "Comprehensive testing and system validation"
      },
      {
        name: "Maintenance Programs",
        href: "/services/maintenance",
        icon: <FileText className="w-5 h-5" />,
        description: "Preventive maintenance and support services"
      }
    ]
  }
];

const industriesData: MenuSection[] = [
  {
    title: "Heavy Industries",
    items: [
      {
        name: "Mining & Resources",
        href: "/industries/mining",
        icon: <Factory className="w-5 h-5" />,
        description: "Power solutions for mining operations"
      },
      {
        name: "Manufacturing",
        href: "/industries/manufacturing",
        icon: <Building className="w-5 h-5" />,
        description: "Industrial manufacturing power systems"
      },
      {
        name: "Oil & Gas",
        href: "/industries/oil-gas",
        icon: <Truck className="w-5 h-5" />,
        description: "Energy sector electrical infrastructure"
      },
      {
        name: "Infrastructure",
        href: "/industries/infrastructure",
        icon: <Construction className="w-5 h-5" />,
        description: "Critical infrastructure power solutions"
      }
    ]
  },
  {
    title: "Commercial Sectors",
    items: [
      {
        name: "Healthcare",
        href: "/industries/healthcare",
        icon: <Hospital className="w-5 h-5" />,
        description: "Hospital and medical facility power systems"
      },
      {
        name: "Retail & Commercial",
        href: "/industries/retail",
        icon: <ShoppingCart className="w-5 h-5" />,
        description: "Commercial building electrical solutions"
      },
      {
        name: "Data Centers",
        href: "/industries/data-centers",
        icon: <Cpu className="w-5 h-5" />,
        description: "Mission-critical power infrastructure"
      },
      {
        name: "Residential",
        href: "/industries/residential",
        icon: <Home className="w-5 h-5" />,
        description: "Residential electrical design and installation"
      }
    ]
  }
];

export const ModernMegaMenu: React.FC<MegaMenuProps> = ({ 
  trigger, 
  isActive = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 150);
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const menuData = trigger.toLowerCase() === 'services' ? servicesData : industriesData;

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      {/* Trigger Button */}
      <button
        className={`flex items-center px-4 py-3 text-lg font-medium transition-all duration-200 cursor-pointer group ${
          isActive || isOpen
            ? "text-blue-900"
            : "text-gray-600 hover:text-blue-900"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        <ChevronDown 
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 ease-out ${
          isOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible translate-y-2'
        }`}
        style={{ 
          width: '600px',
          zIndex: 50
        }}
      >
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header with brand accent */}
          <div className="bg-gradient-to-r from-yellow-400 to-blue-900 h-1"></div>
          
          <div className="p-8">
            <div className="grid grid-cols-2 gap-8">
              {menuData.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  {/* Section Header */}
                  <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider border-b border-gray-200 pb-2">
                    {section.title}
                  </h3>
                  
                  {/* Menu Items */}
                  <div className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <Link key={itemIndex} href={item.href}>
                        <div className="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                          <div className="flex-shrink-0 text-blue-900 group-hover:text-yellow-600 transition-colors duration-200 mt-0.5">
                            {item.icon}
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-900">
                              {item.name}
                            </div>
                            {item.description && (
                              <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call-to-Action Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Need a custom solution?
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Get expert advice from our engineering team
                  </p>
                </div>
                <Link href="/contact">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-sm hover:shadow-md">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile Mega Menu Component
interface MobileMegaMenuProps {
  trigger: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMegaMenu: React.FC<MobileMegaMenuProps> = ({
  trigger,
  isOpen,
  onToggle
}) => {
  const menuData = trigger.toLowerCase() === 'services' ? servicesData : industriesData;

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-900 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        {trigger}
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="pl-4 pb-3 space-y-1">
          {menuData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-2">
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider px-3 py-1">
                {section.title}
              </h4>
              {section.items.map((item, itemIndex) => (
                <Link key={itemIndex} href={item.href}>
                  <div className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
                    <div className="flex-shrink-0 text-blue-900 mr-3">
                      {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModernMegaMenu;