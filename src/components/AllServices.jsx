import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="text-center">

        <h2 className="text-4xl font-bold dark:text-white">
          What We Offer
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-5 max-w-2xl mx-auto">
          From web development to AI solutions,
          we deliver technology that drives results.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
          />
        ))}

      </div>

    </section>
  );
};

export default AllServices;