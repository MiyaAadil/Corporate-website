import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      {/* Heading */}

      <div className="text-center max-w-3xl mx-auto">

        <p className="uppercase tracking-[4px] text-blue-600 font-semibold text-2xl">
          Our Purpose
        </p>

        <h2 className="text-4xl font-bold mt-4 dark:text-white">
          Mission & Vision
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8">
          We are committed to helping businesses embrace digital
          transformation through innovative technology and meaningful
          partnerships.
        </p>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 gap-8 mt-16">

        {/* Mission */}

        <div className="group bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-200">

          <div className="bg-blue-100 dark:bg-slate-700 w-fit p-4 rounded-2xl">

            <Target
              size={34}
              className="text-blue-600"
            />

          </div>

          <h3 className="text-3xl font-bold mt-8 dark:text-white">
            Our Mission
          </h3>

          <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
            To empower businesses with innovative, scalable and secure
            digital solutions that drive growth, improve efficiency and
            create lasting value for our clients.
          </p>

        </div>

        {/* Vision */}

        <div className="group bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-200">

          <div className="bg-blue-100 dark:bg-slate-700 w-fit p-4 rounded-2xl">

            <Eye
              size={34}
              className="text-blue-600"
            />

          </div>

          <h3 className="text-3xl font-bold mt-8 dark:text-white">
            Our Vision
          </h3>

          <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
            To become a trusted global technology partner recognized for
            delivering impactful digital experiences that shape the future
            of businesses worldwide.
          </p>

        </div>

      </div>

    </section>
  );
};

export default MissionVision;