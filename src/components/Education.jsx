import React from "react";
import { Calendar, School, Clock } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Kavikulguru Kalidas Sanskrit University, Ramtek",
    duration: "Feb 2022 - May 2025",
    description:
      "Focused on building a strong foundation in computer science concepts, programming languages, and application development.",
  },
];

const Education = () => {
  return (
    <div className="container mx-auto px-6 py-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="flex items-center justify-center mb-12">
        <School className="text-indigo-600 mr-3" size={28} />
        <h2 className="text-4xl font-bold text-gray-800 relative">
          Education
          <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 rounded-full"></span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-indigo-500 mb-6 transform transition-all duration-300 hover:scale-102 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {edu.degree}
            </h3>

            <div className="flex items-center mb-3">
              <School className="text-indigo-600 mr-2" size={18} />
              <p className="text-indigo-600 font-medium">{edu.institution}</p>
            </div>

            <div className="flex items-center mb-4">
              <Calendar className="text-gray-500 mr-2" size={18} />
              <p className="text-gray-600">{edu.duration}</p>
              <Clock className="text-gray-500 ml-6 mr-2" size={18} />
              <p className="text-gray-600">Full-time</p>
            </div>

            {edu.description && (
              <p className="text-gray-700 mt-4 italic border-t pt-4 border-gray-100">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
