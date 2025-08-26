import Navigation from "@/components/Navigation";
import EngineeringConsulting from "@/components/EngineeringConsulting";
import Services from "@/components/Services";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import WhyChooseGridFlow from "@/components/WhyChooseGridFlow";
import VisionCapabilities from "@/components/VisionCapabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bolt } from "lucide-react";

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Hero Section */}
      <section
        id="home-hero"
        className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden"
      >
        {/* Background image - clean without filters */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/gridflow-hero-banner.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Simple dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/50 z-10"></div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 flex flex-col items-center md:items-start justify-center text-center md:text-left min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-100px)]">
          {/* Service badge */}
          <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-yellow-400/20 rounded-full border border-yellow-400/30 mb-6 sm:mb-8">
              <Bolt className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-yellow-400" />
              <span className="text-xs sm:text-sm font-medium text-yellow-400">Expert Power Engineering Solutions</span>
            </div>
          </div>

          {/* Main headline with premium typography and animations */}
          <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-4 sm:mb-6 relative text-white">
              Powering Western Australia&apos;s Future —
              <span className="text-yellow-400 relative inline-block"> With Expert Engineering
                {/* Subtle glow effect */}
                <div className="absolute inset-0 blur-sm text-yellow-400 opacity-30 animate-pulse"></div>
              </span>
            </h1>
          </div>

          {/* Enhanced subheading */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="mt-2 sm:mt-6 text-base sm:text-lg lg:text-xl max-w-3xl text-gray-200 mb-4 sm:mb-8 leading-relaxed font-medium">
              Expert engineering solutions for energy, industry, infrastructure, mining and renewables. We bring fresh innovation backed by deep technical knowledge to power Australia's future.
            </p>
          </div>

          {/* Enhanced CTAs with animations */}
          <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start mt-6 sm:mt-8 lg:mt-4 w-full sm:w-auto">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:shadow-xl focus:ring-4 focus:ring-yellow-400/50 group text-base sm:text-lg"
              >
                <Bolt className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
                <span className="hidden sm:inline">Get Your Custom Power Solution</span>
                <span className="sm:hidden">Get Power Solution</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 focus:ring-4 focus:ring-blue-500/50 font-semibold text-base sm:text-lg border-2 border-blue-700 hover:border-blue-600"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator - bottom center */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-2 inset-x-0 text-white animate-bounce z-30">
          <div className="flex flex-col items-center justify-center text-center w-full">
            <span className="text-sm sm:text-base mb-3 sm:mb-4 text-gray-200 font-medium drop-shadow-lg">Scroll to explore</span>
            <div className="w-7 h-12 sm:w-8 sm:h-14 border-2 border-gray-200 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
              <div className="w-1.5 h-4 sm:w-2 sm:h-5 bg-yellow-400 rounded-full mt-2 sm:mt-3 animate-pulse shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <EngineeringConsulting />
      <Services />
      <IndustriesWeServe />
      <WhyChooseGridFlow />
      <VisionCapabilities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
