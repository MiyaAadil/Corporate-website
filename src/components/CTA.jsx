import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.section
    initial={{
    scale: 0.9,
    opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      
    className="max-w-7xl mx-auto px-6 py-7">

      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 px-8 py-16 text-center shadow-2xl">

        {/* Decorative Blur Circles */}

        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-400/20 blur-3xl"></div>

        <div className="relative z-10">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Build Something Amazing?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg leading-8">
            Whether you're launching a startup, scaling your business,
            or transforming your digital presence, our team is here
            to turn your ideas into reality.
          </p>

          <Link to="/contact">

            <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 hover:bg-gray-300 transition-all duration-200 active:scale-95 cursor-pointer">

              Get In Touch

              <ArrowRight size={20} />

            </button>

          </Link>

        </div>

      </div>

    </motion.section>
  );
};

export default CTA;