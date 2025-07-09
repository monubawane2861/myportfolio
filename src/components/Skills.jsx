import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Expanded skills with more detailed info
const skills = [
  {
    name: "HTML/HTML5",
    level: 90,
    icon: "🌐",
    color: "#E44D26",
    description: "Semantic markup, accessibility focus",
  },
  {
    name: "CSS",
    level: 85,
    icon: "🎨",
    color: "#264DE4",
    description: "Animations, responsive layouts",
  },
  {
    name: "JavaScript",
    level: 80,
    icon: "⚡",
    color: "#F7DF1E",
    description: "ES6+, modern patterns",
  },
  {
    name: "React.js",
    level: 80,
    icon: "⚛️",
    color: "#61DAFB",
    description: "Hooks, custom components",
  },
  {
    name: "Next.js",
    level: 70,
    icon: "▲",
    color: "#000000",
    description: "SSR, API routes",
  },
  {
    name: "Bootstrap",
    level: 75,
    icon: "🅱️",
    color: "#7952B3",
    description: "Custom theming",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    icon: "🌊",
    color: "#38B2AC",
    description: "Utility-first approach",
  },
];

// More comprehensive additional technologies
const additionalTech = [
  { name: "Git", category: "Tools" },
  { name: "Firebase", category: "Backend" },
  { name: "Redux", category: "State Management" },
  { name: "Material UI", category: "UI Library" },
  { name: "Figma", category: "Design" },
  { name: "GraphQL", category: "API" },
  { name: "TypeScript", category: "Language" },
  { name: "SASS/SCSS", category: "CSS" },
  { name: "Jest", category: "Testing" },
  { name: "Webpack", category: "Build Tools" },
  { name: "Storybook", category: "Development" },
  { name: "Vercel", category: "Deployment" },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeTechCategory, setActiveTechCategory] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  // Get unique categories
  const techCategories = [
    "All",
    ...new Set(additionalTech.map((tech) => tech.category)),
  ];

  // Filter tech by category
  const filteredTech =
    activeTechCategory === "All"
      ? [...additionalTech]
      : additionalTech.filter((tech) => tech.category === activeTechCategory);

  return (
    <section id="skills-section" className=" relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-70"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full -mr-24 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full -ml-48 -mb-48 opacity-50"></div>

      {/* Animated Particles */}
      {isVisible &&
        Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-300 opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.5],
              opacity: [0.2, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-2 px-3 py-1 bg-indigo-100  text-indigo-700 rounded-full text-sm font-medium">
            My Expertise
          </div>
          <h2 className="text-5xl font-bold text-gray-800 relative inline-block ">
            Technical Skills
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-0 left-0 w-full h-1  bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full"
            ></motion.div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I specialize in creating responsive web applications with modern
            technologies. My focus is on delivering exceptional user experiences
            through clean code and intuitive interfaces.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Skill Bars with Hover Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-indigo-50"
          >
            <div className="absolute top-0 right-0 -mt-5 -mr-5 w-20 h-20 bg-indigo-600 rounded-full opacity-10"></div>
            <div className="absolute bottom-0 left-0 -mb-3 -ml-3 w-12 h-12 bg-purple-600 rounded-full opacity-10"></div>

            <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-3 border-gray-100 flex items-center">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-500 w-6 h-6 rounded-full mr-3"></span>
              Proficiency Levels
            </h3>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="skill-item relative"
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="flex justify-between mb-3">
                    <span className="flex items-center gap-2 font-semibold text-gray-800 text-lg">
                      <span
                        className="flex items-center justify-center text-xl h-8 w-8 rounded-lg"
                        style={{ backgroundColor: `${skill.color}20` }}
                      >
                        {skill.icon}
                      </span>
                      {skill.name}
                    </span>
                    <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-md">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Descriptive info on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeSkill === index ? 1 : 0,
                      height: activeSkill === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-gray-600 mb-3 overflow-hidden"
                  >
                    {skill.description}
                  </motion.div>

                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isVisible ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1.2, delay: 0.4 + index * 0.1 }}
                      className="h-3 rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${skill.color}80, ${skill.color})`,
                      }}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className="absolute right-0 top-0 h-full w-5 bg-white opacity-70"
                        animate={{
                          x: [-5, 5, -5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - 3D-like Skill Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 content-start">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center justify-center aspect-square text-center group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}10, ${skill.color}30)`,
                  }}
                />

                {/* Circular border accent */}
                <div
                  className="absolute -top-8 -right-8 w-16 h-16 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}50)`,
                  }}
                />

                <div className="z-10 flex flex-col items-center">
                  {/* Icon with custom color background */}
                  <div
                    className="text-3xl mb-3 w-16 h-16 flex items-center justify-center rounded-xl shadow-sm transform group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, white, ${skill.color}20)`,
                    }}
                  >
                    {skill.icon}
                  </div>

                  <h4 className="font-bold text-gray-800 mb-1">{skill.name}</h4>

                  {/* Skill level indicator */}
                  <div className="flex items-center mt-2">
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isVisible
                            ? { width: `${skill.level}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      ></motion.div>
                    </div>
                    <span
                      className="ml-2 text-xs font-semibold"
                      style={{ color: skill.color }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-800 relative inline-block">
            Additional Technologies
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
            ></motion.div>
          </h3>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {techCategories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                onClick={() => setActiveTechCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTechCategory === category
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-indigo-50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Tech Tags with Categories */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {filteredTech.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isVisible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)",
                }}
                className="px-4 py-2 bg-white shadow-md rounded-full text-indigo-600 font-medium border border-indigo-100 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-500 hover:text-white transition-all duration-300 relative group"
              >
                <span>{tech.name}</span>

                {/* Category tooltip on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded pointer-events-none"
                >
                  {tech.category}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Stats and Quote */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-50 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-8 8a5 5 0 00-10 0h10zm4 0a2 2 0 10-4 0h4zm7 0h-3a2 2 0 00-2-2 2 2 0 00-2 2h-3"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-1">5+ Years</h4>
            <p className="text-gray-600">Experience in Frontend</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-50 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-1">50+</h4>
            <p className="text-gray-600">Projects Completed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-50 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.007 9.007 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-1">Continuous</h4>
            <p className="text-gray-600">Learning & Growth</p>
          </motion.div>
        </div>

        {/* Enhanced Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mt-16 max-w-4xl mx-auto relative"
        >
          <div className="absolute -top-10 -left-10 w-20 h-20 text-8xl text-indigo-200 opacity-80 z-0">
            "
          </div>

          <div className="relative z-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mt-10 -mr-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -mb-8 -ml-8"></div>

            <div className="p-10 text-center">
              <p className="text-xl italic mb-6 text-white leading-relaxed">
                "I believe in continuous learning and staying updated with the
                latest web technologies to deliver exceptional user experiences.
                My goal is to create intuitive, accessible, and performant web
                applications that solve real problems."
              </p>

              <div className="w-16 h-1 bg-white/30 mx-auto rounded-full mb-4"></div>

              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">MB</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">Monali Bawane</p>
                  <p className="text-indigo-200 text-sm">Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
