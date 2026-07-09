import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";

const process = [
  {
    id: 1,
    icon: Search,
    title: "Discovery",
    description: "We understand your goals, business and project requirements.",
  },
  {
    id: 2,
    icon: ClipboardList,
    title: "Planning",
    description: "We create the roadmap, timeline and development strategy.",
  },
  {
    id: 3,
    icon: PenTool,
    title: "Design",
    description: "Our designers build modern and user-friendly interfaces.",
  },
  {
    id: 4,
    icon: Code2,
    title: "Development",
    description: "Our developers turn ideas into scalable digital products.",
  },
  {
    id: 5,
    icon: Bug,
    title: "Testing",
    description: "Every feature is thoroughly tested before deployment.",
  },
  {
    id: 6,
    icon: Rocket,
    title: "Deployment",
    description: "We launch your project and provide ongoing support.",
  },
];

const Process = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="text-center">

        <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
          Our Process
        </p>

        <h2 className="text-4xl font-bold mt-4 dark:text-white">
          How We Work
        </h2>

        <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We follow a structured workflow to ensure every project is delivered
          on time and exceeds expectations.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {process.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <div className="bg-blue-100 dark:bg-slate-700 w-fit p-4 rounded-2xl">
                <Icon className="text-blue-600" size={30} />
              </div>

              <h3 className="text-2xl font-bold mt-6 dark:text-white">
                {step.id}. {step.title}
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                {step.description}
              </p>
            </div>
          );
        })}

      </div>

    </section>
  );
};

export default Process;