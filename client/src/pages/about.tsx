import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, Clock, Zap, Shield, ArrowRight, Building } from "lucide-react";
import { Link} from "wouter";

const About = () => {
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { value: "15+", label: "Years Founder Experience", icon: Clock },
    { value: "Founded", label: "New Company", icon: Award },
    { value: "Innovative", label: "Solutions Focus", icon: Users },
    { value: "Australia", label: "Wide Coverage", icon: Zap }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize safety in every project, ensuring all work meets the highest industry standards and regulatory requirements."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to excellence drives us to deliver innovative solutions that exceed client expectations and industry benchmarks."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build lasting partnerships with our clients, working collaboratively to understand their unique needs and deliver tailored solutions."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We champion sustainable engineering practices, helping clients transition to renewable energy and reduce their environmental impact."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="about-hero"
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
              <Building className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-yellow-400" />
              <span className="text-xs sm:text-sm font-medium text-yellow-400">Founded by Industry Specialists</span>
            </div>
          </div>

          {/* Main headline with premium typography and animations */}
          <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-4 sm:mb-6 relative text-white">
              Powering Australia's Future —
              <span className="text-yellow-400 relative inline-block"> With Fresh Innovation
                {/* Subtle glow effect */}
                <div className="absolute inset-0 blur-sm text-yellow-400 opacity-30 animate-pulse"></div>
              </span>
            </h1>
          </div>

          {/* Enhanced subheading */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="mt-3 sm:mt-6 text-base sm:text-lg lg:text-xl max-w-3xl text-gray-200 mb-6 sm:mb-8 leading-relaxed font-medium">
              Founded by electrical engineering specialists with extensive industry expertise. We bring fresh innovation backed by deep technical knowledge to transform Australia's power infrastructure.
            </p>
          </div>

          {/* Enhanced CTAs with animations */}
          <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start mt-6 sm:mt-8 lg:mt-10 w-full sm:w-auto">
              <Button
                onClick={() => scrollToSection('company-story')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:shadow-xl focus:ring-4 focus:ring-yellow-400/50 group text-base sm:text-lg"
              >
                <Building className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
                <span className="hidden sm:inline">Learn Our Story</span>
                <span className="sm:hidden">Our Story</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/contact">
                <Button
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 focus:ring-4 focus:ring-blue-500/50 font-semibold text-base sm:text-lg border-2 border-blue-700 hover:border-blue-600"
                >
                  <span className="hidden sm:inline">Meet the Team</span>
                  <span className="sm:hidden">Our Team</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator - bottom center */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 inset-x-0 text-white animate-bounce z-30">
          <div className="flex flex-col items-center justify-center text-center w-full">
            <span className="text-sm sm:text-base mb-3 sm:mb-4 text-gray-200 font-medium drop-shadow-lg">Scroll to explore</span>
            <div className="w-7 h-12 sm:w-8 sm:h-14 border-2 border-gray-200 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
              <div className="w-1.5 h-4 sm:w-2 sm:h-5 bg-yellow-400 rounded-full mt-2 sm:mt-3 animate-pulse shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section id="company-story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                GridFlow Engineering Solutions emerged from a vision to transform Australia's
                power infrastructure landscape. Founded by industry veterans with 14+ years of combined experience,
                we bring fresh innovation backed by proven expertise to serve utilities, industrial clients, and government agencies.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our journey began with a simple mission: to deliver reliable, innovative, and sustainable power
                engineering solutions that drive Australia's economic growth while protecting our environment.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Engineering team reviewing electrical system blueprints"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do, from project planning to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-grid-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-grid-dark-blue mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-grid-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-grid-dark-blue mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver innovative, reliable, and sustainable power engineering solutions that drive
                  Australia's transition to a clean energy future while ensuring grid stability and industrial
                  productivity. We are committed to excellence, safety, and environmental stewardship in
                  everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-grid-dark-blue mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be Australia's most trusted power engineering consultancy, recognized for our technical
                  expertise, innovative solutions, and commitment to building a sustainable energy infrastructure
                  that powers economic growth and improves quality of life for all Australians.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;