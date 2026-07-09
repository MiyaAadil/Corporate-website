import aboutHero from "../assets/images/about-hero.jpg";

const AboutHero = () => {
  return (
    <section>
      
      <div className="relative h-90 md:h-110 lg:h-150 max-w-7xl mx-auto overflow-hidden">

        <img className="h-full w-full object-center md:object-cover rounded-b-xl" src={aboutHero} alt="" />

        <div className="absolute inset-0 bg-black/60 flex flex-col lg:gap-10 gap-3 md:gap-10 items-center p-5 text-center justify-center">

          <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase text-cyan-500 font-bold">About us</h1>

          <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-semibold">Building Innovative Digital
            <br />
            Solutions for Tomorrow
          </h2>

          <p className="text-gray-100">We help startups, businesses and enterprises transform ideas into
          impactful digital products through modern technology, creativity and
          innovation.</p>
        </div>
      </div>

      
      

      {/* Content */}
      {/* <div className="absolute z-10 text-center px-6 max-w-4xl top-0">

        <img className="h-full w-full object-cover" src={aboutHero} alt="About-hero image" />

        <p className="uppercase font-bold mb-10 text-5xl text-cyan-500">
          About Us
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Building Innovative Digital
          <br />
          Solutions for Tomorrow
        </h1>

        <p className="text-gray-300 mt-8 text-lg leading-8 max-w-3xl mx-auto">
          We help startups, businesses and enterprises transform ideas into
          impactful digital products through modern technology, creativity and
          innovation.
        </p>

      </div> */}
    </section>
  );
};

export default AboutHero;