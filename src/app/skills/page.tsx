import Layout from "../components/Layout";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiGit } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-6xl" />,
    },
    { name: "React", icon: <FaReact className="text-cyan-400 text-6xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-6xl" /> },
    { name: "Git", icon: <SiGit className="text-red-500 text-6xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-400 text-6xl" /> },
  ];

  return (
    <Layout>
      <div className="relative bg-black min-h-screen py-12">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-green-500">
          My Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-8 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-2xl hover:border-green-500 border border-transparent duration-300"
            >
              {skill.icon}
              <h3 className="mt-4 text-lg font-semibold text-white tracking-wide">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
