import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = ({ activeSection, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverEffect, setHoverEffect] = useState({ isActive: false, item: "" });

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/Black and White Simple Infographic Resume.pdf";
    link.download = "Monali_Bawane_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById("navbar-container");
      if (mobileMenuOpen && navbar && !navbar.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "contact",
  ];

  return (
    <nav
      id="navbar-container"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
      style={{
        background: scrolled
          ? "rgba(255, 255, 255, 0.9)"
          : "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div
          onClick={() => scrollToSection("home")}
          className="group flex items-center cursor-pointer"
          onMouseEnter={() => setHoverEffect({ isActive: true, item: "logo" })}
          onMouseLeave={() => setHoverEffect({ isActive: false, item: "" })}
        >
          <div
            className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3 shadow-lg transition-all duration-500"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              transform:
                hoverEffect.isActive && hoverEffect.item === "logo"
                  ? "rotate(10deg)"
                  : "rotate(0)",
              boxShadow:
                hoverEffect.isActive && hoverEffect.item === "logo"
                  ? "0 20px 25px -5px rgba(99, 102, 241, 0.2), 0 10px 10px -5px rgba(168, 85, 247, 0.2)"
                  : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <span className="relative z-10">MB</span>
            {hoverEffect.isActive && hoverEffect.item === "logo" && (
              <div className="absolute inset-0 bg-white opacity-20 rounded-lg animate-pulse"></div>
            )}
          </div>
          <div className="transition-all duration-300">
            <h1
              className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
              style={{
                transform:
                  hoverEffect.isActive && hoverEffect.item === "logo"
                    ? "translateY(-2px)"
                    : "translateY(0)",
              }}
            >
              Monali Bawane
            </h1>
            <div
              className="overflow-hidden h-5"
              style={{
                maxHeight:
                  hoverEffect.isActive && hoverEffect.item === "logo"
                    ? "24px"
                    : "20px",
                opacity:
                  hoverEffect.isActive && hoverEffect.item === "logo" ? 1 : 0.7,
              }}
            >
              <span
                className="text-sm text-gray-500 font-medium"
                style={{
                  display: "block",
                  transform:
                    hoverEffect.isActive && hoverEffect.item === "logo"
                      ? "translateY(0)"
                      : "translateY(20px)",
                  transition: "transform 0.3s ease-out",
                }}
              >
                Web Developer
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <div
            className="mr-6 py-1.5 px-1.5 bg-white/30 backdrop-blur-md rounded-full flex items-center shadow-sm border border-white/20"
            style={{
              boxShadow:
                "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 4px 10px rgba(0, 0, 0, 0.03)",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                onMouseEnter={() => setHoverEffect({ isActive: true, item })}
                onMouseLeave={() =>
                  setHoverEffect({ isActive: false, item: "" })
                }
                className={`relative capitalize px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeSection === item
                    ? "text-white"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
                style={{
                  transform:
                    (hoverEffect.isActive && hoverEffect.item === item) ||
                    activeSection === item
                      ? "translateY(-2px)"
                      : "translateY(0)",
                }}
              >
                {activeSection === item && (
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -z-10 animate-fadeIn"></span>
                )}

                {hoverEffect.isActive &&
                  hoverEffect.item === item &&
                  activeSection !== item && (
                    <span className="absolute inset-0 bg-indigo-50 rounded-full -z-10 animate-fadeIn"></span>
                  )}

                {item}

                {activeSection === item && (
                  <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <div className="group">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2.5 bg-white/30 backdrop-blur-md hover:bg-indigo-50 rounded-full transition-all duration-300 border border-white/20 shadow-sm"
                aria-label="GitHub"
                style={{
                  boxShadow:
                    "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 4px rgba(0, 0, 0, 0.02)",
                }}
              >
                <FaGithub
                  className="text-gray-600 group-hover:text-indigo-600 transition-colors group-hover:scale-110 duration-300"
                  size={18}
                />
              </a>
            </div>

            <div className="group">
              <a
                href="https://www.linkedin.com/in/monali-bawane-99bb892a7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2.5 bg-white/30 backdrop-blur-md hover:bg-indigo-50 rounded-full transition-all duration-300 border border-white/20 shadow-sm"
                aria-label="LinkedIn"
                style={{
                  boxShadow:
                    "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 4px rgba(0, 0, 0, 0.02)",
                }}
              >
                <FaLinkedin
                  className="text-gray-600 group-hover:text-indigo-600 transition-colors group-hover:scale-110 duration-300"
                  size={18}
                />
              </a>
            </div>

            <div className="group">
              <a
                href="mailto:monubawane21@gmail.com"
                className="flex items-center justify-center p-2.5 bg-white/30 backdrop-blur-md hover:bg-indigo-50 rounded-full transition-all duration-300 border border-white/20 shadow-sm"
                aria-label="Email"
                style={{
                  boxShadow:
                    "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 4px rgba(0, 0, 0, 0.02)",
                }}
              >
                <FaEnvelope
                  className="text-gray-600 group-hover:text-indigo-600 transition-colors group-hover:scale-110 duration-300"
                  size={18}
                />
              </a>
            </div>

            <div className="ml-2">
              <button
                onClick={handleDownloadCV}
                className="group relative overflow-hidden px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm font-medium flex items-center"
                style={{
                  boxShadow: "0 4px 14px -4px rgba(99, 102, 241, 0.6)",
                }}
              >
                <span className="relative z-10">Download CV</span>
                <FaDownload
                  className="ml-2 w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform duration-300"
                  size={18}
                />
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 group-hover:skew-x-12 transition-all duration-700"></span>
              </button>
            </div>
          </div>
        </div>

        <button
          className="md:hidden relative p-2.5 rounded-lg transition-all duration-300 active:scale-95"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)",
            boxShadow:
              "inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 2px 6px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(255,255,255,0.5)",
          }}
        >
          {mobileMenuOpen ? (
            <HiX className="text-indigo-600" size={22} />
          ) : (
            <HiOutlineMenuAlt3 className="text-gray-600" size={22} />
          )}

          <span
            className={`absolute inset-0 rounded-lg ${
              mobileMenuOpen ? "bg-indigo-100" : "bg-transparent"
            } opacity-40 ${mobileMenuOpen ? "" : "animate-pulse"}`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg shadow-xl transform transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 max-h-screen border-t border-indigo-50"
            : "opacity-0 -translate-y-10 max-h-0 overflow-hidden"
        }`}
        aria-hidden={!mobileMenuOpen}
        style={{
          boxShadow: mobileMenuOpen
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            : "none",
        }}
      >
        <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-6">
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setMobileMenuOpen(false);
                }}
                className={`capitalize py-3 px-4 rounded-xl text-left transition-all duration-300 ${
                  activeSection === item
                    ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 font-medium border-l-4 border-indigo-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: mobileMenuOpen
                    ? "fadeSlideIn 0.4s forwards"
                    : "none",
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-4">Connect with me:</p>

            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 hover:bg-indigo-50 rounded-xl text-gray-600 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center hover:-translate-y-1 hover:shadow-md"
                aria-label="GitHub"
                style={{
                  animationDelay: "150ms",
                  animation: mobileMenuOpen
                    ? "fadeSlideIn 0.4s forwards"
                    : "none",
                }}
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/monali-bawane-99bb892a7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 hover:bg-indigo-50 rounded-xl text-gray-600 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center hover:-translate-y-1 hover:shadow-md"
                aria-label="LinkedIn"
                style={{
                  animationDelay: "200ms",
                  animation: mobileMenuOpen
                    ? "fadeSlideIn 0.4s forwards"
                    : "none",
                }}
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:monubawane21@gmail.com"
                className="p-3 bg-gray-50 hover:bg-indigo-50 rounded-xl text-gray-600 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center hover:-translate-y-1 hover:shadow-md"
                aria-label="Email"
                style={{
                  animationDelay: "250ms",
                  animation: mobileMenuOpen
                    ? "fadeSlideIn 0.4s forwards"
                    : "none",
                }}
              >
                <FaEnvelope size={20} />
              </a>
            </div>

            <button
              onClick={(e) => {
                handleDownloadCV(e);
                setMobileMenuOpen(false);
              }}
              className="w-full text-center px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 text-base font-medium flex items-center justify-center relative overflow-hidden group"
              style={{
                boxShadow: "0 4px 14px -4px rgba(99, 102, 241, 0.6)",
                animationDelay: "300ms",
                animation: mobileMenuOpen
                  ? "fadeSlideIn 0.4s forwards"
                  : "none",
              }}
            >
              <span className="relative z-10">Download CV</span>
              <FaDownload
                className="ml-2 w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform duration-300"
                size={20}
              />
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 group-hover:skew-x-12 transition-all duration-700"></span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
