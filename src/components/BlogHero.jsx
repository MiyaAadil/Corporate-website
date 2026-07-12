import hero from "../assets/images/blog-hero.png";
import { motion } from "framer-motion";

const BlogHero = () => {
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        <p className="uppercase tracking-[5px] text-blue-400 font-semibold">
          Our Blog
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
          Insights, Ideas &
          <br />
          Innovation
        </h1>

        <p className="mt-8 text-lg text-gray-300 leading-8">
          Stay updated with industry trends, technology insights,
          development tips and the latest innovations from our team.
        </p>

      </div>
    </motion.section>
  );
};

export default BlogHero;