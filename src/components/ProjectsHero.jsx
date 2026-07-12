import hero from "../assets/images/projects-hero.jpg";
import { motion } from "framer-motion";

const ProjectsHero = () => {
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

      <div className="relative text-center px-6 max-w-4xl">

        <p className="uppercase tracking-[5px] text-blue-400 font-semibold">
          Our Projects
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
          Turning Ideas Into
          <br />
          Digital Success
        </h1>

        <p className="text-gray-300 mt-8 text-lg leading-8">
          Explore some of our recent work across web, mobile,
          cloud and AI solutions.
        </p>

      </div>
    </motion.section>
  );
};

export default ProjectsHero;