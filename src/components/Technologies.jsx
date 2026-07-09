const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Git",
  "Figma",
  "Firebase",
];

const Technologies = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">

      <div className="text-center">

        <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
          Technologies
        </p>

        <h2 className="text-4xl font-bold mt-4 dark:text-white">
          Tools We Work With
        </h2>

        <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We use modern technologies to build secure, scalable and
          high-performance digital products.
        </p>

      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-12">

        {technologies.map((tech) => (
          <div
            key={tech}
            className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:bg-slate-950 hover:text-white transition-all duration-500 cursor-pointer border border-gray-200"
          >
            {tech}
          </div>
        ))}

      </div>

    </section>
  );
};

export default Technologies;