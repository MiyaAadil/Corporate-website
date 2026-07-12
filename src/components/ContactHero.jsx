import hero from "../assets/images/contact_hero.avif";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}

      className="relative h-[65vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 text-center max-w-4xl px-6">

        <p className="uppercase tracking-[5px] text-blue-400 font-semibold">
          Contact Us
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
          Let's Build Something
          <br />
          Amazing Together
        </h1>

        <p className="text-gray-300 mt-8 text-lg leading-8">
          We'd love to hear about your ideas. Reach out and let's discuss your
          next digital project.
        </p>

      </div>
    </motion.section>
  );
};

export default ContactHero;