import hero from "../assets/images/projects-hero.jpg";

const ProjectsHero = () => {
  return (
    <section
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
    </section>
  );
};

export default ProjectsHero;