import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15+", label: "Years Founder Experience" },
    { value: "200+", label: "Satisfied Clients" },
    { value: "5000+", label: "MW Installed" }
  ];

  const projects = [
    {
      title: "Industrial Power Plant",
      image: "https://pixabay.com/get/gaa9c6e5116b0e32898bf5848abd6157ca6314be996ecbff9554c8ddf35569571635d73743be6e94b346972079db32fcc575e4c739118e6ec0f8a64ee0c0ef08d_1280.jpg",
      alt: "Industrial power plant with cooling towers",
      description: "Complete electrical design and installation for 500MW combined cycle power generation facility."
    },
    {
      title: "Commercial Complex",
      image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Modern office building complex with electrical infrastructure",
      description: "Comprehensive electrical infrastructure design for 50-story mixed-use development project."
    },
    {
      title: "Solar Farm Integration",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Large scale solar panel installation with grid connections",
      description: "Grid integration and electrical design for 100MW utility-scale solar photovoltaic facility."
    }
  ];

  return (
    <section className="py-20 bg-grid-light-gray" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-6">Experience & Portfolio</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded by industry veterans with extensive proven expertise, our team brings deep power engineering knowledge to deliver projects across various industries and scales. From small commercial installations to large utility-scale infrastructure projects.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-grid-blue mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <Button className="bg-grid-blue hover:bg-grid-dark-blue text-white">
              View Full Portfolio
            </Button>
          </div>
          <div className="relative">
            {/* Large scale electrical power distribution network with high voltage transmission lines */}
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Large scale electrical power distribution network" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.alt} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-grid-dark-blue mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-grid-blue font-semibold">
                  <span>View Case Study</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
