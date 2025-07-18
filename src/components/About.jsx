import React from "react";
import {
  FiDownload,
  FiMail,
  FiMapPin,
  FiGlobe,
  FiUser,
  FiCalendar,
} from "react-icons/fi";
import {
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineLightBulb,
} from "react-icons/hi";
// import ResumeFile from "../assets/resum.pdf"; // Import your resume file here

const About = () => {
  // Progress bar data
  const skills = [
    { name: "React.js", progress: 90 },
    { name: "JavaScript", progress: 85 },
    { name: "Tailwind CSS", progress: 90 },
    { name: "HTML/CSS", progress: 95 },
  ];

  return (
    <section
      className="bg-gradient-to-b  from-white to-indigo-50 relative overflow-hidden"
      id="about"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-14 right-14 w-40 h-40 bg-indigo-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-100 rounded-full opacity-40"></div>
      <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-indigo-400 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-purple-400 rounded-full opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-3">
            Discover
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p className="text-gray-600 text-center max-w-2xl">
            Get to know more about me, my skills, and what drives me to create
            exceptional web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: About Me Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  My Journey
                </h3>

                <div className="space-y-6 text-gray-600">
                  <p className="leading-relaxed">
                    I'm a{" "}
                    <span className="text-indigo-600 font-medium">
                      passionate Web Developer
                    </span>{" "}
                    with expertise in creating responsive and user-friendly web
                    applications. My focus is on delivering seamless user
                    experiences through clean, efficient code and modern design
                    principles.
                  </p>

                  <p className="leading-relaxed">
                    I specialize in{" "}
                    <span className="text-indigo-600 font-medium">
                      React.js, Next.js, and Tailwind CSS
                    </span>
                    . My approach combines technical skills with an eye for
                    design to create applications that are both functional and
                    visually appealing.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-gray-800">
                      Top Skills
                    </h4>

                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <span className="text-sm text-indigo-600">
                            {skill.progress}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                            style={{ width: `${skill.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <span className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <HiOutlineCode className="w-6 h-6" />
                  </span>
                  <h4 className="ml-3 text-lg font-semibold text-gray-800">
                    Clean Code
                  </h4>
                </div>
                <p className="text-gray-600">
                  I write maintainable, well-structured code following best
                  practices and industry standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <span className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    <HiOutlineDesktopComputer className="w-6 h-6" />
                  </span>
                  <h4 className="ml-3 text-lg font-semibold text-gray-800">
                    UI/UX Focus
                  </h4>
                </div>
                <p className="text-gray-600">
                  I create interfaces that are intuitive, accessible, and
                  deliver exceptional user experiences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <span className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <HiOutlineDeviceMobile className="w-6 h-6" />
                  </span>
                  <h4 className="ml-3 text-lg font-semibold text-gray-800">
                    Responsive Design
                  </h4>
                </div>
                <p className="text-gray-600">
                  Every project I build is fully responsive and works flawlessly
                  across all device sizes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <span className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    <HiOutlineLightBulb className="w-6 h-6" />
                  </span>
                  <h4 className="ml-3 text-lg font-semibold text-gray-800">
                    Problem Solver
                  </h4>
                </div>
                <p className="text-gray-600">
                  I enjoy tackling complex challenges and finding efficient
                  solutions through creative thinking.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Info */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-end">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative p-8">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-lg p-1 mb-3">
                    <div className="w-full h-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      MB
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Monali Bawane
                  </h3>
                  <p className="text-indigo-100">Web Developer</p>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mr-4">
                      <FiUser />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium text-gray-800">Monali Bawane</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mr-4">
                      <FiMail />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>
                      <p className="font-medium text-gray-800">
                        monubawane21@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mr-4">
                      <FiMapPin />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-800">Nagpur, India</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mr-4">
                      <FiGlobe />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Languages</p>
                      <p className="font-medium text-gray-800">
                        English, Hindi, Marathi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mr-4">
                      <FiCalendar />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="font-medium text-gray-800">1 Years</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    // href={ResumeFile}
                    href=""
                    download="Monali_Bawane_Resume.pdf"
                    className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg shadow-indigo-200 transition-all duration-300 flex items-center justify-center font-medium"
                  >
                    <FiDownload className="mr-2" /> Download My Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 mt-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                What I Do
              </h3>

              <ul className="space-y-5">
                <li className="flex items-start p-4 rounded-xl hover:bg-indigo-50 transition-colors duration-300">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                    1
                  </span>
                  <div className="ml-4">
                    <p className="font-medium text-gray-800">Web Development</p>
                    <p className="text-gray-600 mt-1">
                      Build responsive web applications with React.js and
                      Next.js
                    </p>
                  </div>
                </li>

                <li className="flex items-start p-4 rounded-xl hover:bg-indigo-50 transition-colors duration-300">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                    2
                  </span>
                  <div className="ml-4">
                    <p className="font-medium text-gray-800">
                      UI Implementation
                    </p>
                    <p className="text-gray-600 mt-1">
                      Convert Figma designs into interactive UI components
                    </p>
                  </div>
                </li>

                <li className="flex items-start p-4 rounded-xl hover:bg-indigo-50 transition-colors duration-300">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                    3
                  </span>
                  <div className="ml-4">
                    <p className="font-medium text-gray-800">
                      Component Development
                    </p>
                    <p className="text-gray-600 mt-1">
                      Build clean, reusable, and mobile-friendly components
                    </p>
                  </div>
                </li>

                <li className="flex items-start p-4 rounded-xl hover:bg-indigo-50 transition-colors duration-300">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                    4
                  </span>
                  <div className="ml-4">
                    <p className="font-medium text-gray-800">
                      Feature Implementation
                    </p>
                    <p className="text-gray-600 mt-1">
                      Implement authentication, dashboards, and CRUD operations
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
