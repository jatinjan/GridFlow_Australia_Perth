import { Facebook, Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation } from "wouter";

const Footer = () => {
  const [location, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigateToService = (serviceId: string) => {
    if (location === '/services') {
      // If already on services page, just scroll
      scrollToSection(serviceId);
    } else {
      // Navigate to services page first, then scroll
      setLocation('/services');
      setTimeout(() => scrollToSection(serviceId), 200);
    }
  };

  // GridFlow logo SVG component
  const GridFlowLogo = () => (
    <div className="flex items-center">
      <div className="relative">
        {/* Main logo circle with dots pattern */}
        <div className="w-16 h-16 relative">
          {/* Outer circle with dots */}
          <div className="absolute inset-0 rounded-full border-2 border-white">
            {/* Dots around the circle */}
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 15}deg) translateY(-28px)`
                }}
              />
            ))}
          </div>
          {/* Inner content */}
          <div className="absolute inset-2 flex items-center justify-center">
            <div className="text-white font-bold text-lg">GF</div>
          </div>
        </div>
      </div>
      <div className="ml-3">
        <div className="text-white font-bold text-lg tracking-wider">GRIDFLOW</div>
        <div className="text-gray-300 text-xs tracking-wider">ENGINEERING SOLUTIONS</div>
      </div>
    </div>
  );

  // Aboriginal flag SVG
  const AboriginalFlag = () => (
    <div className="w-12 h-8 relative overflow-hidden rounded">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-600"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full"></div>
    </div>
  );

  return (
    <footer className="bg-[#595d62] text-white relative overflow-hidden">
      {/* Power pulse animation */}
      <div className="absolute top-0 left-0 w-full h-1 power-pulse" />
      
      {/* Main footer content */}
      <div className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Company Info */}
            <div className="lg:col-span-1 fade-in-up text-center lg:text-left">
              <div className="mb-6 mx-auto lg:mx-0 w-fit">
                <div className="bg-white backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white">
                  <img 
                    src="/logo-white-bg.png" 
                    alt="GridFlow - Power Engineering Solutions" 
                    className="h-16 sm:h-20 w-auto transition-all duration-300 hover:scale-[1.02]"
                    onError={(e) => {
                      // Fallback to original logo if the new one fails to load
                      (e.target as HTMLImageElement).src = "/logo.png";
                    }}
                  />
                </div>
              </div>
              <p className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
                Your partner in power engineering — delivering safe, scalable, and mission-critical infrastructure across Australia.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-5 mt-6 sm:mt-8">
                <a 
                  href="https://www.linkedin.com/company/gridflowau/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-grid-electric-blue/20 rounded-full flex items-center justify-center hover:bg-grid-electric-blue hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61579916007200#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-600/20 rounded-full flex items-center justify-center hover:bg-gray-500 hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>

            {/* Center Column - Services */}
            <div className="text-center lg:text-left">
              <h4 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <button 
                    onClick={() => navigateToService('power-systems-engineering')}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 text-center lg:text-left bg-transparent border-none cursor-pointer w-full"
                  >
                    Power Systems
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToService('renewable-energy-storage-systems')}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 text-center lg:text-left bg-transparent border-none cursor-pointer w-full"
                  >
                    Renewable Energy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToService('industrial-automation-control')}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 text-center lg:text-left bg-transparent border-none cursor-pointer w-full"
                  >
                    Industrial Automation
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToService('power-safety-compliance')}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 text-center lg:text-left bg-transparent border-none cursor-pointer w-full"
                  >
                    Electrical Safety
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToService('maintenance-support')}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 text-center lg:text-left bg-transparent border-none cursor-pointer w-full"
                  >
                    Maintenance
                  </button>
                </li>
                <li><a href="/services" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 text-center lg:text-left">Consulting and Design</a></li>
              </ul>
            </div>

            {/* Right Column - Company */}
            <div className="text-center lg:text-left">
              <h4 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">About Us</a>                
                </li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">Our Team</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">Careers</a></li>  
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar - HIDDEN */}
      {/* <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 GridFlow Engineering Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Policy & privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & conditions</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Acknowledgement bar */}
      <div className="bg-slate-900 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="text-center md:text-left flex-1 md:mx-6">
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                GridFlow acknowledges the Whadjuk people of the Noongar Nation, the Traditional Owners of the land on which we stand, 
                and we pay our respect to the Elders past, present and emerging. We acknowledge the Noongar peoples continuing 
                cultural connection to the land, waters, and community.
              </p>
            </div>
            
            <div className="mt-2 md:mt-0 flex-shrink-0">
              <AboriginalFlag />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
