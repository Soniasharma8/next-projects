"use client";

import Layout from "../components/Layout";
import Tilt from "react-parallax-tilt";

export default function Projects() {
  const projects = [
    {
      title: "PHP 2.o",
      description:
        "PHP 2.0 is a social working website that connects people and organizations to collaborate on community welfare projects.",
      image:
        "PHP2.o.png",
      link: "https://php2o.netlify.app/",
    },
    {
      title: "BYF",
      description:
        "PHP 2.0 is a social working website by Bharat Youth Federation that connects people and organizations for community welfare projects.",
      image:
        "byf.png",
      link: "https://byf.netlify.app/",
    },
    {
      title: "Baked Bliss",
      description:
        "Baked Bliss is a modern bakery website showcasing delicious baked goods with a clean and user-friendly design.",
      image:
        "bakedbliss.png",
      link: "https://bakedbliss.netlify.app/",
    },
    {
      title: "Bharat Go",
      description:
        "A task management app with user authentication and real-time updates.",
      image:
        "bharatgo.png",
      link: "https://github.com/yourusername/task-manager",
    },
    {
      title: "Mamaearth Clone",
      description:
        "A skincare e-commerce website built with Next.js featuring product listings, user authentication, and responsive design.",
      image:
        "mamaearth.png",
      link: "https://mamaearth-clone-seven.vercel.app/",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black py-16 px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-500 text-center mb-12">
          🚀 Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Tilt
              key={project.title}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#22c55e"
              glarePosition="all"
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-md border border-transparent hover:border-green-500 hover:shadow-2xl transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-green-400 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-green-500 text-black rounded-full hover:bg-green-600 transition"
                >
                  View Project
                </a>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </Layout>
  );
}
