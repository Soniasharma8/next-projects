"use client";

import Layout from "../components/Layout";
import Tilt from "react-parallax-tilt";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function SkillsPage() {
  const skills = [
    { name: "React.js", level: "Advanced", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: "Next.js", level: "Intermediate", icon: <SiNextdotjs className="text-white text-5xl" /> },
    { name: "JavaScript (ES6+)", level: "Advanced", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { name: "HTML5", level: "Advanced", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS3", level: "Advanced", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
    { name: "Git & GitHub", level: "Intermediate", icon: <FaGithub className="text-gray-300 text-5xl" /> },
    { name: "Node.js (Basics)", level: "Beginner", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  ];

  return (
    <Layout>
      <section className="relative bg-black py-20 text-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-green-500 mb-12 text-center">
            🛠️ Skills & Technologies
          </h1>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {skills.map((skill) => (
              <Tilt
                key={skill.name}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#22c55e"
                glarePosition="all"
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center justify-center shadow-md border border-transparent hover:border-green-500 transition hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-green-400 group-hover:text-green-300 transition">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-400">{skill.level}</p>
              </Tilt>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
