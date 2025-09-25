import Layout from "../components/Layout";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiGit } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500 text-6xl animate-pulse" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500 text-6xl animate-pulse" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-6xl animate-pulse" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400 text-6xl animate-pulse" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white text-6xl animate-pulse" />,
    },
    {
      name: "Git",
      icon: <SiGit className="text-red-500 text-6xl animate-pulse" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-400 text-6xl animate-pulse" />,
    },
  ];

  return (
    <Layout>
      <div className="relative bg-black min-h-screen py-12 px-4 sm:px-6 md:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-green-500">
          My Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center transition transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-green-500 border border-transparent duration-300 w-full sm:w-auto"
            >
              {skill.icon}
              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-white tracking-wide text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
