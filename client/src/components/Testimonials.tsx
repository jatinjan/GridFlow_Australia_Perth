import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Infrastructure Director",
      company: "Western Mining Corp",
      text: "GridFlow delivered our $50M substation project ahead of schedule and under budget. Their expertise in Western Australia's unique challenges is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "David Chen",
      title: "Chief Engineer",
      company: "Perth Energy Solutions",
      text: "Working with GridFlow has been exceptional - their team's 15+ years of founder expertise shows in every project. They're our go-to partner for critical infrastructure.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Amanda Roberts",
      title: "Operations Manager",
      company: "Pilbara Industrial Group",
      text: "GridFlow's renewable integration expertise helped us transition to sustainable power while maintaining 100% uptime. Exceptional results.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", subtitle: "Across WA" },
    { number: "99.8%", label: "Project Success Rate", subtitle: "On-time delivery" },
    { number: "$2.5B", label: "Infrastructure Value", subtitle: "Delivered safely" },
    { number: "15+", label: "Years Average", subtitle: "Team experience" }
  ];

  return (
    <section className="py-32 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Section */}
        <div className="text-center mb-20 fade-in-up">
          <div className="heading-sm text-grid-electric-blue mb-4">PROVEN RESULTS</div>
          <h2 className="heading-lg text-grid-deep-navy mb-6">Trusted by Western Australia's Leading Organizations</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="heading-xl text-grid-electric-blue mb-2">{stat.number}</div>
                <div className="heading-sm text-grid-deep-navy mb-1">{stat.label}</div>
                <div className="text-grid-medium-gray">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="heading-sm text-grid-electric-blue text-center mb-4">CLIENT SUCCESS STORIES</div>
        <h3 className="heading-md text-grid-deep-navy text-center mb-16">What Our Clients Say</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-lift p-8 rounded-2xl bg-gradient-to-br from-grid-light-gray to-white border border-gray-100 relative fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-grid-electric-blue/20" />
              </div>
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-grid-vibrant-yellow fill-current" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-grid-medium-gray text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Client info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="heading-sm text-grid-deep-navy">{testimonial.name}</div>
                  <div className="text-grid-medium-gray text-sm">{testimonial.title}</div>
                  <div className="text-grid-electric-blue text-sm font-semibold">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;