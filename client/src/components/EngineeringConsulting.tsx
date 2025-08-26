import { Button } from "@/components/ui/button";

const EngineeringConsulting = () => {
  return (
    <section className="py-20 bg-grid-light-gray" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-6">
              Engineering Consulting
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our expert team of power engineers brings proven experience
              together with innovation and advanced technical software to
              deliver comprehensive solutions for your electrical infrastructure
              design and management services. From initial concept through final implementation, we
              provide trusted engineering consulting that ensures optimal
              performance and reliability.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We specialize in power generation, transmission, distribution
              systems, and renewable energy integration. Our proven track record
              spans across industrial, commercial, and utility-scale projects.
            </p>
            </div>
          <div className="relative">
            {/* Oil pump jack silhouette against dramatic sunset sky */}
            <img
              src="/Oil_gas_facility_ff327de8.png"
              alt="Oil and gas facility with electrical infrastructure and processing systems"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringConsulting;
