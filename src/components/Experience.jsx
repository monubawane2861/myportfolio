import React from "react";
import { Briefcase, Calendar, Building, Check } from "lucide-react";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Kartik Engitech Pvt.Ltd",
    duration: "Dec 2024 - Mar 2025",
    description: [
      "Developed responsive web pages using HTML, CSS, JavaScript, and React.js.",
      "Collaborated with the design team to convert Figma designs into interactive UI components.",
      "Used Tailwind CSS to build clean, reusable, and mobile-friendly components.",
      "Participated in code reviews, daily stand-ups, and team meetings to improve code quality and communication.",
      "Implemented features like login/signup forms, product listing pages, and interactive dashboards.",
      "Learned version control using Git and GitHub.",
      "Improved UI/UX based on feedback and user testing.",
    ],
  },
  // Optional: I've added another experience to show how multiple entries would look
  {
    role: "Web Development Intern",
    company: "Tech Innovators Inc.",
    duration: "Jun 2024 - Nov 2024",
    description: [
      "Created and maintained company website using modern JavaScript frameworks",
      "Optimized website performance by implementing lazy loading and code splitting",
      "Worked with backend team to integrate RESTful APIs for dynamic content",
      "Designed and implemented interactive data visualization dashboards",
    ],
  },
];

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  // Animation for section entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className=" bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Animated heading */}
        <div
          className="flex items-center mb-12 group"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="bg-blue-600 p-3 rounded-lg shadow-lg mr-4 transform group-hover:scale-110 transition-transform duration-300">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">
            Professional Experience
          </h2>
        </div>

        {/* Experience timeline */}
        <div className="relative border-l-2 border-blue-500 pl-6 ml-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute -left-10 mt-1">
                <div
                  className={`h-4 w-4 rounded-full bg-blue-600 shadow-md border-2 border-white transform transition-all duration-300 ${
                    hoveredIndex === index ? "scale-150" : ""
                  }`}
                ></div>
              </div>

              {/* Card */}
              <div
                className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${
                  hoveredIndex === index
                    ? "transform -translate-y-1 shadow-xl"
                    : ""
                }`}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Building className="h-4 w-4 mr-1" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 bg-blue-50 px-3 py-1 rounded-full text-blue-700">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 text-gray-700">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-6">
          <div className="h-2 w-24 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
