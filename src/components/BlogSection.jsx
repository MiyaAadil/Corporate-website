import { blogs } from "../data/blogs";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="text-center">

        <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
          Latest Articles
        </p>

        <h2 className="text-4xl font-bold mt-4 dark:text-white">
          Insights & Resources
        </h2>

        <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Stay updated with the latest trends in technology, business,
          AI and software development.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            {...blog}
          />
        ))}

      </div>

    </section>
  );
};

export default BlogSection;