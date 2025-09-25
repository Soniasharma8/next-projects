import Layout from "../components/Layout";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1612831661042-9f0eea4d0c30?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/yourusername/portfolio",
    },
    {
      title: "E-commerce Store",
      description:
        "A fully functional e-commerce store with product listing, cart, and checkout.",
      image:
        "https://images.unsplash.com/photo-1581092795361-2e2e9f67f93b?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/yourusername/ecommerce-store",
    },
    {
      title: "Blog Platform",
      description:
        "A blog platform with CRUD functionality, authentication, and markdown support.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/yourusername/blog-platform",
    },
    {
      title: "Task Manager App",
      description:
        "A task management app with user authentication and real-time updates.",
      image:
        "https://images.unsplash.com/photo-1604079626083-80f88fefefaa?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/yourusername/task-manager",
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app using OpenWeather API with search and geolocation features.",
      image:
        "https://images.unsplash.com/photo-1501973801540-537f08ccae7d?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/yourusername/weather-app",
    },
  ];

  return (
    <Layout>
      <div className="py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-green-500">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:border-green-500 border border-transparent hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-green-500">
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
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
