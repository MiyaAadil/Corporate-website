import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {

  const [category, setCategory] = useState("All");

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((item) => item.category === category);

  const categories = [
    "All",
    "Web",
    "AI",
    "Mobile",
    "Cloud",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="text-center">

        <h2 className="text-4xl font-bold dark:text-white">
          Featured Projects
        </h2>

        <p className="mt-5 text-gray-600 dark:text-gray-300">
          Discover how we've helped businesses build
          innovative digital products.
        </p>

      </div>

      {/* Filter */}

      <div className="flex flex-wrap justify-center gap-4 mt-8">

        {categories.map((item) => (

          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-6 py-3 rounded-full transition-all cursor-pointer ${
              category === item
                ? "bg-emerald-500 text-white"
                : "bg-gray-200 dark:bg-slate-800 dark:text- dark:hover:text-black hover:bg-emerald-100"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

      {/* Grid */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {filteredProjects.map((project) => (

          <ProjectCard
            key={project.id}
            {...project}
          />

        ))}

      </div>

    </section>
  );
};

export default ProjectSection;