import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Users2, ArrowRight, Bolt } from "lucide-react";

const Team = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const leadership = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Managing Director & Principal Engineer",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      bio: "With over 25 years in power systems engineering, Sarah leads Grid Flow's strategic vision. She holds a PhD in Electrical Engineering from UNSW and has been instrumental in developing Australia's renewable energy infrastructure. Sarah has led major grid integration projects worth over $2 billion.",
      credentials: "PhD Electrical Engineering, CPEng, MIEAust",
      specialties: ["Power Systems", "Grid Integration", "Renewable Energy"]
    },
    {
      name: "Mark Thompson",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      bio: "Mark brings 22 years of industrial automation expertise to Grid Flow. He's responsible for our technical delivery and quality assurance. Previously with Schneider Electric, Mark has overseen the automation of major mining and manufacturing facilities across Australia.",
      credentials: "MEng Industrial Automation, CPEng, RPEQ",
      specialties: ["Industrial Automation", "SCADA Systems", "Process Control"]
    }
  ];

  const engineers = [
    {
      name: "Emma Chen",
      role: "Senior Power Systems Engineer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      bio: "Emma specializes in protection systems and power quality analysis. With 12 years of experience, she's led protection coordination studies for major substations and industrial facilities.",
      credentials: "BEng Electrical, CPEng, MIEAust",
      specialties: ["Protection Systems", "Power Quality", "Arc Flash Studies"]
    },
    {
      name: "James Rodriguez",
      role: "Renewable Energy Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      bio: "James leads our renewable energy integration projects, focusing on solar and wind farm connections. He's been instrumental in connecting over 500MW of renewable capacity to the grid.",
      credentials: "MEng Renewable Energy, CPEng",
      specialties: ["Solar PV", "Wind Energy", "Energy Storage", "Grid Codes"]
    },
    {
      name: "Lisa Wang",
      role: "Project Manager & Electrical Engineer",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      bio: "Lisa combines technical expertise with exceptional project management skills. She's delivered complex electrical infrastructure projects on time and under budget for major industrial clients.",
      credentials: "BEng Electrical, PMP, MIEAust",
      specialties: ["Project Management", "Electrical Design", "Client Relations"]
    },
    {
      name: "David Kumar",
      role: "Control Systems Engineer",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      bio: "David specializes in advanced control systems and automation solutions. His expertise in PLC programming and HMI development has optimized operations at numerous industrial facilities.",
      credentials: "BEng Control Systems, CPEng",
      specialties: ["PLC Programming", "HMI Development", "Process Optimization"]
    },
    {
      name: "Rachel Foster",
      role: "Safety & Compliance Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      bio: "Rachel ensures all projects meet the highest safety standards and regulatory compliance. With 15 years in electrical safety, she's developed comprehensive safety protocols adopted industry-wide.",
      credentials: "BEng Electrical Safety, NECA Certified",
      specialties: ["Electrical Safety", "Compliance", "Risk Assessment", "Training"]
    },
    {
      name: "Michael O'Brien",
      role: "Senior Field Engineer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      bio: "Michael leads our field operations and commissioning activities. His hands-on experience with high-voltage systems and commissioning procedures ensures safe and successful project delivery.",
      credentials: "BEng Electrical, HV Switching Certified",
      specialties: ["Commissioning", "High Voltage", "Field Operations", "Testing"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        id="team-hero" 
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
        
        {/* Power pulse animation line */}
        <div className="absolute top-0 left-0 w-full h-1 power-pulse z-20" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-start justify-center text-left">
          {/* Service badge */}
          <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full border border-yellow-400/30 mb-8">
              <Users2 className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Industry Experts & Innovators</span>
            </div>
          </div>
          
          {/* Main headline with premium typography and animations */}
          <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-300">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6 relative text-white">
              Meet the Experts—
              <span className="text-yellow-400 relative inline-block"> Our Team
                {/* Subtle glow effect */}
                <div className="absolute inset-0 blur-sm text-yellow-400 opacity-30 animate-pulse"></div>
              </span>
            </h1>
          </div>
          
          {/* Enhanced subheading */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="mt-6 text-xl max-w-3xl text-gray-200 mb-8 leading-relaxed font-medium">
              Meet the experienced professionals who bring Grid Flow's projects to life with technical excellence and innovative thinking. Industry veterans with 15+ years of collective expertise.
            </p>
          </div>
          
          {/* Enhanced CTAs with animations */}
          <div className="animate-in slide-in-from-bottom-2 duration-1000 delay-700">
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                onClick={() => scrollToSection('leadership-team')}
                className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-yellow-400/50 group text-lg"
              >
                <Bolt className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Meet Leadership
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-blue-500/50 font-semibold text-lg border-2 border-blue-700 hover:border-blue-600"
              >
                Work With Us
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 text-gray-300">Meet our team</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership-team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">Leadership Team</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our leadership combines 15+ years of proven engineering expertise with strategic vision to guide Grid Flow's continued growth and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadership.map((member, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-32 h-32 rounded-xl object-cover shadow-md"
                      />
                      <div className="flex space-x-3 mt-4 justify-center">
                        <a href="#" className="w-8 h-8 bg-grid-blue rounded-full flex items-center justify-center hover:bg-grid-dark-blue transition-colors">
                          <Linkedin className="h-4 w-4 text-white" />
                        </a>
                        <a href="#" className="w-8 h-8 bg-grid-blue rounded-full flex items-center justify-center hover:bg-grid-dark-blue transition-colors">
                          <Mail className="h-4 w-4 text-white" />
                        </a>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-grid-dark-blue mb-2">{member.name}</h3>
                      <p className="text-grid-blue font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                      <div className="mb-3">
                        <p className="text-sm font-semibold text-gray-700">Credentials:</p>
                        <p className="text-sm text-gray-600">{member.credentials}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Specialties:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span key={idx} className="px-3 py-1 bg-grid-light-gray text-grid-dark-blue text-xs rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section className="py-20 bg-grid-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">Engineering Team</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our diverse team of specialists brings deep expertise across all aspects of power engineering and industrial automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineers.map((member, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-md"
                    />
                    <h3 className="text-xl font-bold text-grid-dark-blue mb-1">{member.name}</h3>
                    <p className="text-grid-blue font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Credentials:</p>
                      <p className="text-xs text-gray-600">{member.credentials}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="px-2 py-1 bg-grid-light-gray text-grid-dark-blue text-xs rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2 justify-center">
                      <a href="#" className="w-8 h-8 bg-grid-blue rounded-full flex items-center justify-center hover:bg-grid-dark-blue transition-colors">
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                      <a href="#" className="w-8 h-8 bg-grid-blue rounded-full flex items-center justify-center hover:bg-grid-dark-blue transition-colors">
                        <Mail className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            We're always looking for talented engineers and professionals who share our passion for innovation and excellence in power engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#careers" 
              className="bg-grid-blue hover:bg-grid-dark-blue text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Open Positions
            </a>
            <a 
              href="#contact" 
              className="border-2 border-grid-blue text-grid-blue hover:bg-grid-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;