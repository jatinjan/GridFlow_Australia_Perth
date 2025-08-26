import { Button } from "@/components/ui/button";
import { ArrowRight, Bolt } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(/gridflow-hero-banner.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Mobile-specific background positioning */}
      <div
        className="absolute inset-0 w-full h-full sm:hidden"
        style={{
          backgroundImage: `url(/gridflow-hero-banner.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Cool blue tint to balance warm banner */}
      <div className="absolute inset-0 bg-[#0b1f3a]/40 mix-blend-multiply z-10" />

      {/* Global dark scrim - stronger on mobile */}
      <div className="absolute inset-0 bg-black/55 sm:bg-black/45 mix-blend-multiply z-10" />

      {/* Top band for nav readability */}
      <div className="absolute inset-x-0 top-0 h-20 sm:h-24 lg:h-28 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />

      {/* Bottom gradient for scroll indicator visibility */}
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-20 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />

      {/* Top-left vignette for logo contrast */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 300px at 60px 60px, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 38%, rgba(0,0,0,0) 62%)",
        }}
      />
      
      {/* Mobile top-left vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none sm:hidden"
        style={{
          background:
            "radial-gradient(400px 200px at 40px 40px, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 38%, rgba(0,0,0,0) 62%)",
        }}
      />

      {/* NOTE: animation line removed per request */}

      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-20 lg:pb-24 flex flex-col items-start justify-center text-left min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-100px)]">
        {/* Headline */}
        <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-snug max-w-4xl mb-6 text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
            Powering Western Australia&apos;s Future
          </h1>
        </div>

        {/* Subheading */}
        <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
          <p className="mt-0 text-base md:text-lg xl:text-xl max-w-2xl text-gray-100 leading-relaxed font-normal">
            Expert engineering solutions for energy, industry,
            infrastructure mining and renewables.
          </p>
        </div>

        {/* CTAs */}
        <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
          <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch sm:items-start w-full sm:w-auto">
            {/* Primary CTA - Yellow */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-yellow-400 text-black font-bold rounded-xl shadow-2xl hover:bg-yellow-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl focus:ring-4 focus:ring-yellow-400/50 text-lg sm:text-xl border-2 border-yellow-300"
              aria-label="Get your custom power engineering solution"
            >
              <Bolt className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline">Get Your Custom Power Solution</span>
              <span className="sm:hidden font-extrabold">Get Power Solution</span>
              <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>

            {/* Secondary CTA - Electric Blue (matches logo) */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-blue-600 text-white font-bold rounded-xl shadow-2xl hover:bg-blue-500 hover:scale-[1.02] transition-all duration-300 focus:ring-4 focus:ring-blue-500/50 text-lg sm:text-xl border-2 border-blue-500"
              aria-label="Contact GridFlow"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator (improved for mobile) */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-2 inset-x-0 text-white animate-bounce z-30">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <span className="text-sm sm:text-base mb-3 sm:mb-4 text-gray-200 font-medium drop-shadow-lg">Scroll to explore</span>
          <div className="w-7 h-12 sm:w-8 sm:h-14 border-2 border-gray-200 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
            <div className="w-1.5 h-4 sm:w-2 sm:h-5 bg-yellow-400 rounded-full mt-2 sm:mt-3 animate-pulse shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
