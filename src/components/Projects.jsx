// import React, { useState, useEffect } from "react";
// import {
//   Github,
//   ExternalLink,
//   ChevronRight,
//   ChevronLeft,
//   X,
//   Star,
//   Code,
//   Eye,
// } from "lucide-react";

// // Project data
// const projects = [
//   {
//     title: "Job Quick Website",
//     description:
//       "Responsive job portal built with React and Tailwind, translating Figma designs into dynamic reusable components.",
//     technologies: ["React.js", "Tailwind CSS", "Figma", "Git"],
//     image:
//       "https://plus.unsplash.com/premium_photo-1661677942925-b6ad7b27af18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNXx8fGVufDB8fHx8fA%3D%3D",
//     links: { live: "#", code: "#" },
//     color: "indigo",
//     features: [
//       "Responsive Design",
//       "Authentication",
//       "Job Search",
//       "Application System",
//     ],
//   },
//   {
//     title: "To-Do List Web App",
//     description:
//       "Manage tasks with real-time Firebase Firestore and authentication. Fully responsive with CRUD operations.",
//     technologies: ["React", "Firebase", "Firestore", "Auth"],
//     image:
//       "https://plus.unsplash.com/premium_photo-1661320878454-ae8a70582f36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8",
//     color: "purple",
//     features: [
//       "Real-time Updates",
//       "User Authentication",
//       "Task Categories",
//       "Priority Sorting",
//     ],
//   },
//   {
//     title: "Trello Clone",
//     description:
//       "Drag-and-drop Kanban board with Firebase backend. Real-time task management and list sorting features.",
//     technologies: ["React", "Tailwind", "Firebase", "Dnd-kit"],
//     image:
//       "https://plus.unsplash.com/premium_photo-1692241076210-9e696db67fce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
//     color: "blue",
//     features: [
//       "Drag & Drop",
//       "Real-time Collaboration",
//       "Custom Board Themes",
//       "Task Comments",
//     ],
//   },
//   {
//     title: "Healthify",
//     description:
//       "Wellness app featuring fitness tracking, blog integration, and daily health insights.",
//     technologies: ["React", "CSS Modules", "Firebase", "Chart.js"],
//     image:
//       "https://plus.unsplash.com/premium_photo-1661331911412-330f2e99cf53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0N3x8fGVufDB8fHx8fA%3D%3D",
//     color: "green",
//     features: [
//       "Fitness Tracking",
//       "Nutrition Log",
//       "Progress Visualization",
//       "Workout Plans",
//     ],
//   },
//   {
//     title: "SearchKro",
//     description:
//       "A smart search engine UI to find and filter websites, blogs, and resources. Fast and responsive.",
//     technologies: ["React", "Tailwind CSS", "API Integration"],
//     image:
//       "https://plus.unsplash.com/premium_photo-1690521447032-8c608d25a0e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
//     color: "pink",
//     features: [
//       "Advanced Filtering",
//       "Bookmark System",
//       "Fast Autocomplete",
//       "Recent Searches",
//     ],
//   },
//   {
//     title: "Archtech ",
//     description:
//       "A smart search engine UI to find and filter websites, blogs, and resources. Fast and responsive.",
//     technologies: ["React", "Tailwind CSS", "API Integration"],
//     image:
//       "https://plus.unsplash.com/premium_photo-1690303193719-f2e07048e50a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     color: "pink",
//     features: [
//       "Advanced Filtering",
//       "Bookmark System",
//       "Fast Autocomplete",
//       "Recent Searches",
//     ],
//   },
// ];

// const Projects = () => {
//   const [currentProject, setCurrentProject] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalProject, setModalProject] = useState(null);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [direction, setDirection] = useState("next");

//   // Theme colors for each project
//   const themeColors = {
//     indigo: {
//       primary: "from-indigo-500 to-indigo-700",
//       secondary: "bg-indigo-500",
//       text: "text-indigo-500",
//       light: "bg-indigo-50",
//       border: "border-indigo-500",
//       hover: "hover:bg-indigo-600",
//     },
//     purple: {
//       primary: "from-purple-500 to-purple-700",
//       secondary: "bg-purple-500",
//       text: "text-purple-500",
//       light: "bg-purple-50",
//       border: "border-purple-500",
//       hover: "hover:bg-purple-600",
//     },
//     blue: {
//       primary: "from-blue-500 to-blue-700",
//       secondary: "bg-blue-500",
//       text: "text-blue-500",
//       light: "bg-blue-50",
//       border: "border-blue-500",
//       hover: "hover:bg-blue-600",
//     },
//     green: {
//       primary: "from-emerald-500 to-emerald-700",
//       secondary: "bg-emerald-500",
//       text: "text-emerald-500",
//       light: "bg-emerald-50",
//       border: "border-emerald-500",
//       hover: "hover:bg-emerald-600",
//     },
//     pink: {
//       primary: "from-pink-500 to-pink-700",
//       secondary: "bg-pink-500",
//       text: "text-pink-500",
//       light: "bg-pink-50",
//       border: "border-pink-500",
//       hover: "hover:bg-pink-600",
//     },
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isModalOpen && !isAnimating) {
//         handleNext();
//       }
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [currentProject, isModalOpen, isAnimating]);

//   const handlePrev = () => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     setDirection("prev");
//     setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 700);
//   };

//   const handleNext = () => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     setDirection("next");
//     setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 700);
//   };

//   const openModal = (index) => {
//     setModalProject(index);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = "auto";
//   };

//   const currentTheme = themeColors[projects[currentProject].color];

//   return (
//     <div
//       className="relative min-h-screen py-16 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100"
//       id="projects"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-300/20 to-purple-300/30 blur-3xl"></div>
//         <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-blue-300/20 to-indigo-300/20 blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-purple-300/20 to-pink-300/20 blur-3xl"></div>

//         {/* Animated rings */}
//         <div className="absolute top-1/3 left-1/4 w-64 h-64 border-2 border-indigo-200/30 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/3 w-96 h-96 border-2 border-purple-200/30 rounded-full animate-ping animate-duration-5000"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <div className="relative text-center mb-16">
//           <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>

//           <div className="flex items-center justify-center space-x-2 mb-4">
//             <Star className="text-yellow-400" size={20} />
//             <h3 className="text-lg font-medium text-gray-600 uppercase tracking-wider">
//               Portfolio Showcase
//             </h3>
//             <Star className="text-yellow-400" size={20} />
//           </div>

//           <h2 className="text-5xl font-bold mb-8">
//             <span className="inline-block relative">
//               My{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
//                 Creative
//               </span>{" "}
//               Projects
//               <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 transform skew-x-12"></div>
//             </span>
//           </h2>

//           <p className="max-w-2xl mx-auto text-gray-600">
//             Explore my latest work showcasing innovative solutions, clean
//             design, and modern development techniques.
//           </p>
//         </div>

//         {/* 3D Project Showcase */}
//         <div className="relative max-w-6xl mx-auto h-[600px] perspective-1000 mb-16">
//           <div className="absolute inset-0 flex items-center justify-center">
//             {/* Previous button - positioned left */}
//             <button
//               onClick={handlePrev}
//               className="absolute left-0 md:left-6 z-30 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-gray-800 hover:bg-white transition-all duration-300 transform hover:scale-110"
//               aria-label="Previous project"
//             >
//               <ChevronLeft size={24} />
//             </button>

//             {/* Next button - positioned right */}
//             <button
//               onClick={handleNext}
//               className="absolute right-0 md:right-6 z-30 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-gray-800 hover:bg-white transition-all duration-300 transform hover:scale-110"
//               aria-label="Next project"
//             >
//               <ChevronRight size={24} />
//             </button>

//             {/* Projects carousel */}
//             <div className="w-full h-full relative preserve-3d">
//               {projects.map((project, index) => {
//                 // Calculate position based on current project and wrap around
//                 let position = index - currentProject;
//                 if (position < -1) position += projects.length;
//                 if (position > 1) position -= projects.length;

//                 const isActive = position === 0;
//                 const isPrevious =
//                   position === -1 ||
//                   (currentProject === 0 && index === projects.length - 1);
//                 const isNext =
//                   position === 1 ||
//                   (currentProject === projects.length - 1 && index === 0);

//                 const positionClasses = isActive
//                   ? "z-20 opacity-100 scale-100 translate-y-0"
//                   : isPrevious
//                   ? `z-10 opacity-70 scale-90 -translate-x-3/4 ${
//                       direction === "prev" ? "slide-in-left" : "slide-out-left"
//                     }`
//                   : isNext
//                   ? `z-10 opacity-70 scale-90 translate-x-3/4 ${
//                       direction === "next"
//                         ? "slide-in-right"
//                         : "slide-out-right"
//                     }`
//                   : "opacity-0 scale-75 translate-y-full";

//                 const theme = themeColors[project.color];

//                 return (
//                   <div
//                     key={index}
//                     className={`absolute inset-0 flex flex-col md:flex-row transition-all duration-700 transform ${positionClasses}`}
//                   >
//                     {/* Card content */}
//                     <div className="w-full md:w-1/2 bg-white rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none shadow-2xl overflow-hidden flex flex-col">
//                       {/* Image section with overlay */}
//                       <div className="relative h-48 md:h-80 overflow-hidden">
//                         <div
//                           className={`absolute inset-0 bg-gradient-to-r ${theme.primary} opacity-85`}
//                         ></div>
//                         <img
//                           src={project.image}
//                           alt={project.title}
//                           className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
//                         />

//                         {/* Project number */}
//                         <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white flex items-center justify-center">
//                           <span className={`text-3xl font-bold ${theme.text}`}>
//                             {(index + 1).toString().padStart(2, "0")}
//                           </span>
//                         </div>

//                         {/* Project title overlay */}
//                         <div className="absolute inset-0 flex flex-col justify-center px-8">
//                           <h3 className="text-white text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">
//                             {project.title}
//                           </h3>

//                           <div className="flex flex-wrap gap-2 mt-2">
//                             {project.technologies.slice(0, 3).map((tech, i) => (
//                               <span
//                                 key={i}
//                                 className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium"
//                               >
//                                 {tech}
//                               </span>
//                             ))}
//                             {project.technologies.length > 3 && (
//                               <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
//                                 +{project.technologies.length - 3}
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Project details */}
//                       <div className="flex-1 p-6 flex flex-col">
//                         <p className="text-gray-600 mb-6">
//                           {project.description}
//                         </p>

//                         {/* Key features */}
//                         <div className="mb-6">
//                           <h4 className="text-gray-800 font-semibold mb-3">
//                             Key Features:
//                           </h4>
//                           <div className="grid grid-cols-2 gap-2">
//                             {project.features.map((feature, i) => (
//                               <div
//                                 key={i}
//                                 className="flex items-center space-x-2"
//                               >
//                                 <div
//                                   className={`w-2 h-2 rounded-full ${theme.secondary}`}
//                                 ></div>
//                                 <span className="text-sm text-gray-700">
//                                   {feature}
//                                 </span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Action buttons */}
//                         <div className="mt-auto flex gap-4">
//                           <button
//                             onClick={() => openModal(index)}
//                             className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 text-gray-800 font-medium transition-all hover:bg-gray-200"
//                           >
//                             <Eye size={18} />
//                             Details
//                           </button>

//                           <a
//                             href={project.links?.live || "#"}
//                             className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg ${theme.secondary} text-white font-medium transition-all ${theme.hover}`}
//                           >
//                             <ExternalLink size={18} />
//                             View Live
//                           </a>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Preview section - simulated browser/device */}
//                     <div className="hidden md:flex w-1/2 bg-gray-900 rounded-r-3xl overflow-hidden relative">
//                       {/* Mockup browser UI */}
//                       <div className="absolute inset-0 flex flex-col">
//                         {/* Browser toolbar */}
//                         <div className="h-8 bg-gray-800 flex items-center px-4 space-x-2">
//                           <div className="w-3 h-3 rounded-full bg-red-400"></div>
//                           <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
//                           <div className="w-3 h-3 rounded-full bg-green-400"></div>
//                           <div className="ml-4 flex-1 h-5 bg-gray-700 rounded-full"></div>
//                         </div>

//                         {/* Browser content */}
//                         <div className="flex-1 bg-gray-100 p-1">
//                           <div className="w-full h-full rounded bg-white flex items-center justify-center relative overflow-hidden">
//                             {/* Add a realistic browser shadow effect */}
//                             <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/5 to-transparent"></div>

//                             {/* Project preview mockup */}
//                             <div className="absolute inset-0 flex items-center justify-center">
//                               <img
//                                 src={project.image}
//                                 alt={`${project.title} preview`}
//                                 className="w-full h-full object-cover"
//                               />

//                               {/* Hover overlay with button */}
//                               <div className="absolute inset-0 bg-gray-900/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                                 <a
//                                   href={project.links?.code || "#"}
//                                   className="px-6 py-3 bg-white rounded-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition-transform duration-300"
//                                 >
//                                   <Github size={18} />
//                                   View Code
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Progress indicators */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-30">
//             {projects.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => {
//                   setDirection(idx > currentProject ? "next" : "prev");
//                   setCurrentProject(idx);
//                 }}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   idx === currentProject
//                     ? `w-10 ${
//                         themeColors[projects[currentProject].color].secondary
//                       }`
//                     : "bg-gray-300"
//                 }`}
//                 aria-label={`Go to project ${idx + 1}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* View all projects button */}
//         <div className="text-center">
//           <a
//             href="#"
//             className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
//           >
//             Browse All Projects
//             <ChevronRight
//               size={20}
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </a>
//         </div>
//       </div>

//       {/* Detailed project modal */}
//       {isModalOpen && modalProject !== null && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
//           <div className="animate-in slide-in-from-bottom duration-300 w-full max-w-4xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
//             {/* Modal header */}
//             <div
//               className={`px-6 py-4 bg-gradient-to-r ${
//                 themeColors[projects[modalProject].color].primary
//               } flex justify-between items-center`}
//             >
//               <h3 className="text-xl font-bold text-white">
//                 {projects[modalProject].title} - Project Details
//               </h3>
//               <button
//                 onClick={closeModal}
//                 className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Modal content */}
//             <div className="flex-1 overflow-y-auto p-6">
//               <div className="flex flex-col lg:flex-row gap-8">
//                 {/* Project image */}
//                 <div className="lg:w-1/2">
//                   <div className="rounded-lg overflow-hidden shadow-lg">
//                     <img
//                       src={projects[modalProject].image}
//                       alt={projects[modalProject].title}
//                       className="w-full h-auto object-cover"
//                     />
//                   </div>

//                   <div className="mt-6 grid grid-cols-2 gap-4">
//                     <a
//                       href={
//                         projects[modalProject].links?.live ||
//                         "https://jobquick.vercel.app/"
//                       }
//                       className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg ${
//                         themeColors[projects[modalProject].color].secondary
//                       } text-white font-medium transition-all ${
//                         themeColors[projects[modalProject].color].hover
//                       }`}
//                     >
//                       <ExternalLink size={18} />
//                       View Live Site
//                     </a>

//                     <a
//                       href={projects[modalProject].links?.code || "#"}
//                       className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 text-gray-800 font-medium transition-all hover:bg-gray-200"
//                     >
//                       <Github
//                         size={18}
//                         href="https://github.com/monubawane2861/Arctech-project.git"
//                       />
//                       Source Code
//                     </a>
//                   </div>
//                 </div>

//                 {/* Project details */}
//                 <div className="lg:w-1/2">
//                   <h4 className="text-2xl font-bold text-gray-900 mb-4">
//                     <span
//                       className={themeColors[projects[modalProject].color].text}
//                     >
//                       {projects[modalProject].title}
//                     </span>
//                   </h4>

//                   <p className="text-gray-700 mb-6">
//                     {projects[modalProject].description}
//                     {/* Additional modal-specific content */} This project was
//                     developed with a focus on user experience and performance
//                     optimization. I implemented modern development practices and
//                     ensured the codebase followed clean architecture principles.
//                   </p>

//                   <div className="mb-6">
//                     <h5 className="font-semibold text-gray-900 mb-3">
//                       Technologies Used:
//                     </h5>
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {projects[modalProject].technologies.map((tech, i) => (
//                         <span
//                           key={i}
//                           className={`${
//                             themeColors[projects[modalProject].color].light
//                           } ${
//                             themeColors[projects[modalProject].color].text
//                           } px-3 py-1 rounded-full text-sm font-medium`}
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <h5 className="font-semibold text-gray-900 mb-3">
//                       Key Features:
//                     </h5>
//                     <ul className="space-y-2">
//                       {projects[modalProject].features.map((feature, i) => (
//                         <li key={i} className="flex items-start">
//                           <div
//                             className={`mt-1.5 w-2 h-2 rounded-full ${
//                               themeColors[projects[modalProject].color]
//                                 .secondary
//                             } mr-2`}
//                           ></div>
//                           <span className="text-gray-700">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="pt-4 border-t border-gray-200">
//                     <h5 className="font-semibold text-gray-900 mb-3">
//                       Development Process:
//                     </h5>
//                     <div className="space-y-4">
//                       <p className="text-gray-700">
//                         From concept to deployment, this project was developed
//                         using modern development workflows. This involved
//                         wireframing, component-based architecture, and rigorous
//                         testing.
//                       </p>
//                       <p className="text-gray-700">
//                         Special attention was given to accessibility,
//                         performance optimization, and responsive design to
//                         ensure a great user experience across all devices.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Modal footer */}
//             <div className="border-t border-gray-200 px-6 py-4 flex justify-between items-center">
//               <div className="flex items-center gap-1">
//                 <Code
//                   size={16}
//                   className={themeColors[projects[modalProject].color].text}
//                 />
//                 <span className="text-sm text-gray-600">
//                   Project {modalProject + 1} of {projects.length}
//                 </span>
//               </div>

//               <div className="flex gap-2">
//                 <button
//                   onClick={closeModal}
//                   className="px-4 py-2 text-gray-700 hover:text-gray-900"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add CSS for custom animations */}
//       <style jsx>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .animate-in {
//           animation-duration: 300ms;
//         }
//         .slide-in-from-bottom {
//           animation: slideInFromBottom 0.3s ease-out forwards;
//         }
//         .slide-in-left {
//           animation: slideInLeft 0.7s ease-out forwards;
//         }
//         .slide-out-left {
//           animation: slideOutLeft 0.7s ease-out forwards;
//         }
//         .slide-in-right {
//           animation: slideInRight 0.7s ease-out forwards;
//         }
//         .slide-out-right {
//           animation: slideOutRight 0.7s ease-out forwards;
//         }
//         @keyframes slideInFromBottom {
//           from {
//             transform: translateY(30px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         @keyframes slideInLeft {
//           from {
//             transform: translateX(-100%) scale(0.8);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(-75%) scale(0.9);
//             opacity: 0.7;
//           }
//         }
//         @keyframes slideOutLeft {
//           from {
//             transform: translateX(0) scale(1);
//             opacity: 1;
//             z-index: 20;
//           }
//           to {
//             transform: translateX(-75%) scale(0.9);
//             opacity: 0.7;
//             z-index: 10;
//           }
//         }
//         @keyframes slideInRight {
//           from {
//             transform: translateX(100%) scale(0.8);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(75%) scale(0.9);
//             opacity: 0.7;
//           }
//         }
//         @keyframes slideOutRight {
//           from {
//             transform: translateX(0) scale(1);
//             opacity: 1;
//             z-index: 20;
//           }
//           to {
//             transform: translateX(75%) scale(0.9);
//             opacity: 0.7;
//             z-index: 10;
//           }
//         }
//         .animate-duration-5000 {
//           animation-duration: 5000ms;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Projects;

// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________
import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Info,
  ArrowRight,
  ArrowLeft,
  Plus,
  X,
  Save,
  Image as ImageIcon,
} from "lucide-react";

// Project data
const initialProjects = [
  {
    title: "Job Quick Website",
    description:
      "Responsive job portal built with React and Tailwind, translating Figma designs into dynamic reusable components.",
    technologies: ["React.js", "Tailwind CSS", "Figma", "Git"],
    image:
      "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D",
    links: {
      live: "https://jobquick.vercel.app/",
      code: "https://github.com/monubawane2861/jobquick.git",
    },
    color: "indigo",
  },
  {
    title: "To-Do List Web App",
    description:
      "Manage tasks with real-time Firebase Firestore and authentication. Fully responsive with CRUD operations.",
    technologies: ["React", "Firebase", "Firestore", "Auth"],
    image:
      "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D",
    links: {
      live: "https://jobquick.vercel.app/",
      code: "https://github.com/monubawane2861/jobquick.git",
    },
    color: "purple",
  },
  {
    title: "Trello Clone",
    description:
      "Drag-and-drop Kanban board with Firebase backend. Real-time task management and list sorting features.",
    technologies: ["React", "Tailwind", "Firebase", "Dnd-kit"],
    image:
      "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D",
    links: {
      live: "https://trello-web-orpin.vercel.app/",
      code: "https://github.com/monubawane2861/trello-web.git",
    },
    color: "blue",
  },
  {
    title: "Healthify",
    description:
      "Wellness app featuring fitness tracking, blog integration, and daily health insights.",
    technologies: ["React", "CSS Modules", "Firebase", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D",
    links: {
      live: "https://jobquick.vercel.app/",
      code: "https://github.com/monubawane2861/jobquick.git",
    },
    color: "green",
  },
  {
    title: "SearchKro",
    description:
      "A smart search engine UI to find and filter websites, blogs, and resources. Fast and responsive.",
    technologies: ["React", "Tailwind CSS", "API Integration"],
    image:
      "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D",
    links: {
      live: "https://jobquick.vercel.app/",
      code: "https://github.com/monubawane2861/jobquick.git",
    },
    color: "pink",
  },
  {
    title: "Collage Chatbot Website",
    description:
      "AI-powered chatbot for college students with course information and FAQ support.",
    technologies: ["React", "Node.js", "Dialogflow", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D",
    links: {
      live: "https://clg-chat-bot.vercel.app/",
      code: "https://github.com/monubawane2861/clg-chat-bot.git",
    },
    color: "blue",
  },

  {
    title: "Artech",
    description:
      "AI-powered chatbot for college students with course information and FAQ support.",
    technologies: ["React", "Node.js", "Dialogflow", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D",
    links: {
      live: "https://arctech-project.vercel.app/",
      code: "https://github.com/monubawane2861/Arctech-project.git",
    },
    color: "blue",
  },
];

const ProjectCard = ({ project, isActive, onClick, onDelete }) => {
  const colorMap = {
    indigo: "bg-indigo-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    green: "bg-emerald-500",
    pink: "bg-pink-500",
  };

  const textColorMap = {
    indigo: "text-indigo-500",
    blue: "text-blue-500",
    purple: "text-purple-500",
    green: "text-emerald-500",
    pink: "text-pink-500",
  };

  const bgColorMap = {
    indigo: "bg-indigo-50",
    blue: "bg-blue-50",
    purple: "bg-purple-50",
    green: "bg-emerald-50",
    pink: "bg-pink-50",
  };

  return (
    <div
      className={`relative rounded-2xl transition-all duration-500 ${
        isActive
          ? "w-full md:w-5/6 h-64 sm:h-80 md:h-96 shadow-2xl scale-100"
          : "w-full md:w-24 lg:w-36 h-32 sm:h-40 md:h-64 lg:h-80 shadow-md scale-95 cursor-pointer hover:shadow-xl"
      }`}
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className={`absolute inset-0 ${
            colorMap[project.color]
          } opacity-80 z-10 transition-opacity duration-500 ${
            isActive ? "opacity-10" : "opacity-80"
          }`}
        ></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Delete button (only shown on active card) */}
      {isActive && onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="absolute top-2 right-2 z-40 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
          aria-label="Delete project"
        >
          <X size={14} />
        </button>
      )}

      {/* Project title on collapsed card */}
      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center z-20 p-2 sm:p-4">
          <h3 className="text-white font-bold text-sm sm:text-xl md:text-2xl text-center">
            {project.title}
          </h3>
        </div>
      )}

      {/* Expanded content */}
      {isActive && (
        <div className="absolute inset-0 z-30 flex flex-col justify-end p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="flex justify-between items-start mb-2 sm:mb-3">
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                  textColorMap[project.color]
                }`}
              >
                {project.title}
              </h3>
              <div
                className={`${
                  bgColorMap[project.color]
                } p-1.5 sm:p-2 rounded-full`}
              >
                <Info
                  className={`${
                    textColorMap[project.color]
                  } h-4 w-4 sm:h-5 sm:w-5`}
                />
              </div>
            </div>

            <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`${bgColorMap[project.color]} ${
                    textColorMap[project.color]
                  } px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-4">
              <a
                href={project.links?.live || "#"}
                className={`flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-lg ${
                  colorMap[project.color]
                } text-white transition-transform hover:scale-105 text-xs sm:text-sm`}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
              <a
                href={project.links?.code || "#"}
                className={`flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-gray-100 ${
                  textColorMap[project.color]
                } transition-transform hover:scale-105 text-xs sm:text-sm`}
              >
                <Github size={14} /> Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: "",
    image:
      "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D",
    links: { live: "", code: "" },
    color: "indigo",
  });

  // Auto-rotate through projects
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAnimate && projects.length > 0) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeIndex, isAnimate, projects.length]);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handleDeleteProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);

    if (activeIndex >= newProjects.length) {
      setActiveIndex(newProjects.length - 1);
    }
  };

  const handleAddProject = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setNewProject({
      title: "",
      description: "",
      technologies: "",
      image:
        "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D",
      links: { live: "", code: "" },
      color: "indigo",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleLinksChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      links: { ...prev.links, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const technologiesArray = newProject.technologies
      .split(",")
      .map((tech) => tech.trim())
      .filter((tech) => tech !== "");

    const projectToAdd = {
      ...newProject,
      technologies: technologiesArray,
    };

    setProjects([...projects, projectToAdd]);
    setActiveIndex(projects.length);
    handleCloseModal();
  };

  return (
    <div
      className="relative w-full py-12 sm:py-16 md:py-20 bg-gray-50"
      id="projects"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl md:blur-3xl"></div>
      <div className="absolute top-1/3 left-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-lg sm:blur-xl md:blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2 sm:mb-4">
            <span className="h-px w-4 sm:w-6 md:w-8 bg-indigo-400"></span>
            <span className="py-0.5 sm:py-1 px-2 sm:px-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs sm:text-sm font-medium">
              My Work
            </span>
            <span className="h-px w-4 sm:w-6 md:w-8 bg-purple-400"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Featured Projects
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
            Explore my latest work showcasing my skills in frontend development,
            user experience design, and modern web technologies.
          </p>
        </div>

        {/* Project gallery */}
        <div className="relative max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16">
          {projects.length > 0 ? (
            <>
              <div
                className="flex flex-col md:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start"
                onMouseEnter={() => setIsAnimate(true)}
                onMouseLeave={() => setIsAnimate(false)}
              >
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    isActive={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                    onDelete={() => handleDeleteProject(index)}
                  />
                ))}
              </div>

              {/* Navigation controls */}
              <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 gap-2 sm:gap-3 md:gap-4">
                <button
                  onClick={handlePrev}
                  className="p-2 sm:p-3 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-50 transition-colors"
                  aria-label="Previous project"
                >
                  <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
                </button>
                <div className="flex gap-1 sm:gap-2 items-center">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                        index === activeIndex
                          ? "bg-indigo-500 w-4 sm:w-6 md:w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="p-2 sm:p-3 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-50 transition-colors"
                  aria-label="Next project"
                >
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-8 sm:py-12 md:py-16">
              <p className="text-gray-500 mb-4 sm:mb-6">
                No projects to display
              </p>
              <button
                onClick={handleAddProject}
                className="inline-flex items-center gap-1 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Plus size={16} className="sm:w-5 sm:h-5" />
                Add Your First Project
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
