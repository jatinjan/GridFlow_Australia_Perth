import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const HorizontalMegaMenu = () => {
  const [location] = useLocation();
  
  const menuSections = [
    { name: "Power Systems", href: "/services/power-systems" },
    { name: "Lines & Cables", href: "/services/lines-cables" },
    { name: "Automation & Control", href: "/services/automation-control" },
    { name: "Construction Support", href: "/services/construction-support" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" }
  ];

  const isActive = (href: string) => location === href || location.startsWith(href + '/');

  return (
    <div className="hidden md:block bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Menu Sections */}
          <div className="flex items-center space-x-8 lg:space-x-10">
            {menuSections.map((section, index) => (
              <Link key={index} href={section.href}>
                <span 
                  className={`font-semibold text-base transition-all duration-200 cursor-pointer py-2 border-b-2 ${
                    isActive(section.href)
                      ? "text-blue-900 border-blue-900"
                      : "text-gray-700 hover:text-blue-900 border-transparent hover:border-blue-900"
                  }`}
                >
                  {section.name}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/contact">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md">
              Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HorizontalMegaMenu;