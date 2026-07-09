import { ArrowRight } from "lucide-react";

const BlogCard = ({ image, title, description, date }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">

        <p className="text-sm text-blue-600 font-medium">
          {date}
        </p>

        <h2 className="text-2xl font-bold mt-3 dark:text-white">
          {title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-4 leading-7">
          {description}
        </p>

        <button className="flex items-center gap-2 mt-6 text-blue-600 font-semibold hover:gap-3 transition-all cursor-pointer">
          Read More
          <ArrowRight size={18} />
        </button>

      </div>

    </div>
  );
};

export default BlogCard;