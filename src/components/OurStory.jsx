import storyImage from "../assets/images/story.png";
import { CheckCircle } from "lucide-react";

const OurStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}

        <div>

          <img
            src={storyImage}
            alt="Our Team"
            className="lg:rounded-3xl shadow-2xl object-cover w-full 
            lg:h-[500px] h-50 md:h-80 rounded-xl"
          />

        </div>

        {/* Right Content */}

        <div className="text-center lg:text-start">

          <p className="text-blue-600 font-semibold uppercase tracking-[4px]">
            Our Story
          </p>

          <h2 className="text-4xl font-bold mt-4 dark:text-white">
            Turning Ideas Into
            Digital Success
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8">
            Founded with a passion for technology and innovation, TechNova
            Solutions helps businesses create modern digital experiences that
            drive growth. From startups to established enterprises, we build
            scalable, secure and user-focused solutions tailored to every
            client's vision.
          </p>

          <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
            Our multidisciplinary team combines creativity, strategy and
            cutting-edge technology to deliver websites, mobile applications,
            AI-powered solutions and cloud platforms that make a real impact.
          </p>

          {/* Features */}

          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            <div className="flex items-center gap-3 mx-auto">
              <CheckCircle className="text-blue-600" />
              <span className="dark:text-white">Innovation Driven</span>
            </div>

            <div className="flex items-center gap-3 mx-auto">
              <CheckCircle className="text-blue-600" />
              <span className="dark:text-white">Client First Approach</span>
            </div>

            <div className="flex items-center gap-3 mx-auto">
              <CheckCircle className="text-blue-600" />
              <span className="dark:text-white">Modern Technologies</span>
            </div>

            <div className="flex items-center gap-3 mx-auto">
              <CheckCircle className="text-blue-600" />
              <span className="dark:text-white">Quality Assurance</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurStory;