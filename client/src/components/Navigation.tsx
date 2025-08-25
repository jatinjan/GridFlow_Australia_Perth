import { useState, useEffect } from "react";
import { Link, useLocation, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) =>
    location === path || location.startsWith(path + "/");

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/30 via-black/10 to-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between w-full px-6 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Grid Flow - Power Engineering Solutions"
              className="h-16 md:h-20 lg:h-22 w-auto brightness-110 drop-shadow-xl transition-all duration-300 hover:opacity-90 hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <ul className="flex items-center space-x-6 xl:space-x-8 list-none text-sm xl:text-base font-semibold">
            <li>
              <a
                href="#services-power-systems-design-analysis"
                className="relative px-3 py-2 cursor-pointer whitespace-nowrap no-underline transition-all duration-300 text-white/90 hover:text-yellow-300 hover:bg-white/5 rounded-lg backdrop-blur-sm border border-transparent hover:border-white/10"
                onClick={(e) => {
                  const event = new Event('forceHighlight');
                  (event as any).hash = 'services-power-systems-design-analysis';
                  window.dispatchEvent(event);
                }}
              >
                Power Systems Study
              </a>
            </li>
            <li>
              <a
                href="#services-lines-and-cables-design"
                className="relative px-3 py-2 cursor-pointer whitespace-nowrap no-underline transition-all duration-300 text-white/90 hover:text-yellow-300 hover:bg-white/5 rounded-lg backdrop-blur-sm border border-transparent hover:border-white/10"
                onClick={(e) => {
                  const event = new Event('forceHighlight');
                  (event as any).hash = 'services-lines-and-cables-design';
                  window.dispatchEvent(event);
                }}
              >
                Lines & Cables Design
              </a>
            </li>
            <li>
              <a
                href="#services-industrial-automation"
                className="relative px-3 py-2 cursor-pointer whitespace-nowrap no-underline transition-all duration-300 text-white/90 hover:text-yellow-300 hover:bg-white/5 rounded-lg backdrop-blur-sm border border-transparent hover:border-white/10"
                onClick={(e) => {
                  const event = new Event('forceHighlight');
                  (event as any).hash = 'services-industrial-automation';
                  window.dispatchEvent(event);
                }}
              >
                Industrial Automation
              </a>
            </li>
            <li>
              <a
                href="#services-construction-support"
                className="relative px-3 py-2 cursor-pointer whitespace-nowrap no-underline transition-all duration-300 text-white/90 hover:text-yellow-300 hover:bg-white/5 rounded-lg backdrop-blur-sm border border-transparent hover:border-white/10"
                onClick={(e) => {
                  const event = new Event('forceHighlight');
                  (event as any).hash = 'services-construction-support';
                  window.dispatchEvent(event);
                }}
              >
                Construction Support
              </a>
            </li>
            <li>
              <Link href="/services">
                <span
                  className={`relative px-3 py-2 cursor-pointer whitespace-nowrap no-underline transition-all duration-300 rounded-lg backdrop-blur-sm border border-transparent hover:border-white/10 ${
                    isActive("/services")
                      ? "text-yellow-300 bg-white/10 border-white/20"
                      : "text-white/90 hover:text-yellow-300 hover:bg-white/5"
                  }`}
                >
                  Services
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span
                  className="relative px-3 py-2 cursor-pointer whitespace-nowrap no-underline transition-all duration-300 text-white/90 hover:text-yellow-300 hover:bg-white/5 rounded-lg backdrop-blur-sm border border-transparent hover:border-white/10"
                  onClick={(e) => {
                    setTimeout(() => {
                      const element = document.getElementById('industries');
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth', 
                          block: 'start' 
                        });
                      }
                    }, 100);
                  }}
                >
                  Industries
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span
                  className={`relative px-3 py-2 cursor-pointer whitespace-nowrap no-underline transition-all duration-300 rounded-lg backdrop-blur-sm border border-transparent hover:border-white/10 ${
                    isActive("/about")
                      ? "text-yellow-300 bg-white/10 border-white/20"
                      : "text-white/90 hover:text-yellow-300 hover:bg-white/5"
                  }`}
                >
                  About
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="text-white hover:text-yellow-300 hover:bg-white/10 focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/20 bg-black/80 backdrop-blur-md">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#services-power-systems-design-analysis"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const event = new Event('forceHighlight');
                (event as any).hash = 'services-power-systems-design-analysis';
                window.dispatchEvent(event);
              }}
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-yellow-300 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              Power Systems Study
            </a>
            <a
              href="#services-lines-and-cables-design"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const event = new Event('forceHighlight');
                (event as any).hash = 'services-lines-and-cables-design';
                window.dispatchEvent(event);
              }}
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-yellow-300 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              Lines & Cables Design
            </a>
            <a
              href="#services-industrial-automation"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const event = new Event('forceHighlight');
                (event as any).hash = 'services-industrial-automation';
                window.dispatchEvent(event);
              }}
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-yellow-300 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              Industrial Automation
            </a>
            <a
              href="#services-construction-support"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const event = new Event('forceHighlight');
                (event as any).hash = 'services-construction-support';
                window.dispatchEvent(event);
              }}
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-yellow-300 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              Construction Support
            </a>
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="block px-4 py-3 text-base font-medium text-white/90 hover:text-yellow-300 hover:bg-white/10 rounded-lg transition-all duration-300">
                Services
              </span>
            </Link>
            <a
              href="#industries"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const element = document.getElementById('industries');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  });
                }
              }}
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-yellow-300 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              Industries
            </a>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="block px-4 py-3 text-base font-medium text-white/90 hover:text-yellow-300 hover:bg-white/10 rounded-lg transition-all duration-300">
                About
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
