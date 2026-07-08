import { testimonials } from "../data/testimonials.js";
import TestimonialCard from "./TestimonialCard.jsx"

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-7 cursor-pointer">

      <div className="text-center">

        <h2 className="text-4xl font-bold">
          What Our Clients Say
        </h2>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Trusted by startups and enterprises worldwide for delivering
          innovative, scalable and reliable digital solutions.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {testimonials.map((testimonial) => (

          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
          />

        ))}

      </div>

    </section>
  );
};

export default Testimonials;