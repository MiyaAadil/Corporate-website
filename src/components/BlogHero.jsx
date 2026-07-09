import hero from "../assets/images/blog-hero.jpg";

const BlogHero = () => {
  return (
    <section
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
    </section>
  );
};

export default BlogHero;