"use client";

import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      level: "High School",
      school: "S D Girls Sen Sec School",
      stream: "Arts - 82.44%",
      year: "Passout Year 2020",
    },
    {
      level: "College",
      school: "Govt. College For Girls",
      stream: "BCA - 82.46%",
      year: "Passout Year 2023",
    },
    {
      level: "Post Graduation",
      school: "Guru Nanak Dev Engineering College",
      stream: "MCA - 83%",
      year: "Passout Year 2025",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black py-16 px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-green-500 mb-16"
        >
          🎓 Education
        </motion.h1>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Gradient Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-cyan-400 to-green-400"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.level}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <span className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-black animate-pulse"></span>

              {/* Card */}
              <div
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-[80%] md:w-[45%] shadow-md hover:shadow-2xl border border-transparent hover:border-green-500 transition ${
                  index % 2 === 0 ? "ml-10 text-left" : "mr-10 text-right"
                }`}
              >
                <h2 className="text-2xl font-bold text-green-400">{edu.level}</h2>
                <p className="text-gray-300 mt-1">{edu.school}</p>
                <p className="text-gray-300">{edu.stream}</p>
                <p className="text-gray-400 mt-2 italic">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
