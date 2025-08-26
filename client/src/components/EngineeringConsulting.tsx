import { Button } from "@/components/ui/button";

const EngineeringConsulting = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-grid-light-gray" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4 sm:mb-6 leading-tight">
              Engineering Consulting
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              Our expert team of power engineers brings proven experience
              together with innovation and advanced technical software to
              deliver comprehensive solutions for your electrical infrastructure
              design and management services. From initial concept through final implementation, we
              provide trusted engineering consulting that ensures optimal
              performance and reliability.
            </p>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              We specialize in power generation, transmission, distribution
              systems, and renewable energy integration. Our proven track record
              spans across industrial, commercial, and utility-scale projects.
            </p>
            </div>
          <div className="relative mt-6 lg:mt-0">
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
