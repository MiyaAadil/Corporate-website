import { Star } from "lucide-react";

const TestimonialCard = ({ name, role, review, rating }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-300">

      <div className="flex mb-5">

        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}

      </div>

      <p className="text-gray-600 leading-7 italic dark:text-gray-300">
        "{review}"
      </p>

      <div className="flex items-center mt-8">

        <div className="h-14 w-14 rounded-full bg-blue-950 dark:bg-slate-700 flex items-center justify-center text-white font-bold text-xl">

          {name.charAt(0)}

        </div>

        <div className="ml-4">

          <h3 className="font-bold text-lg">
            {name}
          </h3>

          <p className="text-gray-500 text-sm">
            {role}
          </p>

        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;