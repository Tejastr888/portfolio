import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../utils/ThemeContext";
import useInView from "../utils/useInView";

const Contact = () => {
  const { darkMode } = useTheme();
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "tejasrh1999@gmail.com",
      link: "mailto:tejasrh1999@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+91 9945696589",
      link: "tel:+919945696589"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Bengaluru, India",
      link: "#"
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-40 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl sm:text-6xl font-light tracking-tight mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let&apos;s connect and build something amazing together.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.link}
              className={`group p-8 border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                darkMode
                  ? "border-gray-800/50 hover:border-cyan-500/50 hover:bg-cyan-500/5"
                  : "border-gray-200/50 hover:border-cyan-500 hover:bg-cyan-50/50"
              } ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                animation: isInView
                  ? `slideInLeft 0.6s ease-out ${idx * 150}ms forwards`
                  : "none"
              }}
            >
              <div className={`mb-4 group-hover:scale-110 transition-transform duration-300 ${
                darkMode ? "text-cyan-400" : "text-cyan-500"
              }`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-light tracking-wide mb-2">
                {method.title}
              </h3>
              <p className="text-sm opacity-75 group-hover:opacity-100 transition-opacity">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Email CTA */}
        <div className="text-center">
          <p className="text-lg opacity-60 mb-6">
            Or send me an email directly
          </p>
          <a
            href="mailto:tejasrh1999@gmail.com"
            className={`inline-block px-8 py-4 border-2 font-light tracking-wide transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black"
                : "border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white"
            }`}
          >
            Send Email
          </a>
        </div>

        {/* Response Time */}
        <div className="mt-16 p-6 border text-center opacity-70">
          <p className="text-sm">
            💬 I typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
