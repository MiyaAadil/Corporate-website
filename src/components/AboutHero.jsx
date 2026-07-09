import aboutHero from "../assets/images/about-hero.jpg";

const AboutHero = () => {
  return (
    <section
      className="relative h-[80vh] md:h-[70vh] lg:h-[65vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <p className="uppercase tracking-[6px] text-blue-400 font-semibold mb-4">
          About Us
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Building Innovative Digital
          <br />
          Solutions for Tomorrow
        </h1>

        <p className="text-gray-300 mt-8 text-lg leading-8 max-w-3xl mx-auto">
          We help startups, businesses and enterprises transform ideas into
          impactful digital products through modern technology, creativity and
          innovation.
        </p>

      </div>
    </section>
  );
};

export default AboutHero;