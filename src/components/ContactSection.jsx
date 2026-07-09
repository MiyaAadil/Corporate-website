import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-15">

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Form */}

        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-gray-200">

          <h2 className="text-3xl font-bold dark:text-white">
            Send us a Message
          </h2>

          <div className="space-y-5 mt-8">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border dark:border-slate-700 p-4 rounded-xl bg-transparent"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border dark:border-slate-700 p-4 rounded-xl bg-transparent"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border dark:border-slate-700 p-4 rounded-xl bg-transparent"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border dark:border-slate-700 p-4 rounded-xl bg-transparent"
            />

            <button className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-xl transition cursor-pointer">
              Send Message
            </button>

          </div>

        </div>

        {/* Contact Info */}

        <div className="space-y-6">

          <h2 className="text-3xl font-bold dark:text-white">
            Contact Information
          </h2>

          <div className="flex gap-4">
            <Mail className="text-blue-600" />
            <span className="dark:text-white">hello@technova.com</span>
          </div>

          <div className="flex gap-4">
            <Phone className="text-blue-600" />
            <span className="dark:text-white">+977 9800000000</span>
          </div>

          <div className="flex gap-4">
            <MapPin className="text-blue-600" />
            <span className="dark:text-white">Kathmandu, Nepal</span>
          </div>

          <div className="flex gap-4">
            <Clock className="text-blue-600" />
            <span className="dark:text-white">Mon - Fri : 9AM - 6PM</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;