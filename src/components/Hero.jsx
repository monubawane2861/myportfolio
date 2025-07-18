import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import Img from "../assets/mona pic.jpg";
// import ResumeFile from "../assets/resum.pdf";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    "Reactjs",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Responsive Design",
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72   bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>

      <div className="container mx-auto px-6 py-16 md:py-24 relative mt-10 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          <div
            className={`md:w-1/2 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-6 shadow-sm">
              Web Developer
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 relative">
                Monali Bawane
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C57.4 4.2 111.8 2.5 166.2 3C220.7 3.5 275.1 7 299.5 9"
                    stroke="url(#paint0_linear)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="3"
                      y1="9"
                      x2="299.5"
                      y2="9"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#6366F1" />
                      <stop offset="1" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
              Crafting <span className="font-semibold">responsive</span> &{" "}
              <span className="font-semibold">intuitive</span> digital
              experiences
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Creative and detail-oriented Web Developer with hands-on
              experience in building responsive and user-friendly web
              applications that engage users and help businesses grow.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="group px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-indigo-200 transition duration-300 flex items-center"
              >
                Contact Me{" "}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                // href={ResumeFile}
                href=""
                download="Monali_Bawane_Resume.pdf"
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition duration-300 flex items-center"
              >
                <FiDownload className="mr-2" /> Download Resume
              </a>
            </div>

            <div className="flex items-center gap-1 text-gray-500 text-sm mb-6">
              <span className="h-px w-10 bg-gray-300"></span>
              <span>My tech stack</span>
              <span className="h-px flex-grow bg-gray-300"></span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:shadow-md hover:border-indigo-300 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-5">
              <a
                href="https://www.linkedin.com/in/monali-bawane-99bb892a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BK9DJsTczT3uEUeV5%2BQvhBg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <FaLinkedin className="text-indigo-600 text-xl" />
                </div>
              </a>
              <a
                href="mailto:monubawane21@gmail.com"
                className="group"
                aria-label="Email"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <HiOutlineMail className="text-indigo-600 text-xl" />
                </div>
              </a>
              <a
                href="https://github.com/monubawane2861"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="GitHub"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <FaGithub className="text-indigo-600 text-xl" />
                </div>
              </a>
            </div>
          </div>

          <div
            className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main Profile Image */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full animate-pulse-slow"></div>
                <div className="absolute inset-2 bg-white rounded-full"></div>
                <div className="absolute inset-3 rounded-full overflow-hidden">
                  <img
                    src={Img}
                    alt="Monali Bawane"
                    className="w-full h-[100%] object-cover"
                  />
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute top-0 -right-4 bg-gradient-to-r from-indigo-500 to-purple-600 p-1 rounded-lg shadow-lg z-20">
                <div className="bg-white px-4 py-3 rounded-md">
                  <div className="text-indigo-600 font-bold text-lg">
                    1 Years
                  </div>
                  <div className="text-gray-600 text-sm">Experience</div>
                </div>
              </div>

              {/* Projects Badge */}
              <div className="absolute -bottom-6 -right-4 bg-white p-3 rounded-lg shadow-lg z-20">
                <div className="text-indigo-600 font-bold text-xl">10+</div>
                <div className="text-gray-600 text-sm">Projects</div>
              </div>

              {/* Coffee Badge */}
              <div className="absolute -bottom-2 -left-6 bg-white p-3 rounded-lg shadow-lg z-20">
                <div className="text-purple-600 font-bold text-xl">∞</div>
                <div className="text-gray-600 text-sm">Coffee Cups</div>
              </div>

              {/* Decorative Patterns */}
              <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-indigo-100 rounded-full"></div>
              <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-scroll-down"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          75% {
            transform: translateY(4px);
            opacity: 0;
          }
          80% {
            transform: translateY(0);
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s infinite;
        }
        .bg-grid-pattern {
          background-size: 20px 20px;
          background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
