const Newsletter = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">

      <div className="bg-blue-900 rounded-3xl p-10 text-center text-white">

        <h2 className="text-4xl font-bold">
          Stay Updated
        </h2>

        <p className="mt-5 text-blue-100">
          Subscribe to receive our latest articles,
          technology insights and company updates.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white text-black rounded-full px-6 py-4 w-full md:w-96 outline-none"
          />

          <button className="bg-black hover:bg-slate-900 px-8 py-4 rounded-full font-semibold cursor-pointer transition-all">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;