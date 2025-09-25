import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="relative bg-black py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/250"
              alt="Profile"
              className="w-56 h-56 rounded-full object-cover border-4 border-green-500 shadow-xl hover:scale-105 transform transition duration-300"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold mb-4 text-green-500">
              Hi, I'm Sonia 👋
            </h1>
            <p className="mt-4 text-gray-300 leading-relaxed max-w-xl">
              I’m a passionate developer who loves building
              <strong className="text-green-400">
                clean, modern, and user-friendly
              </strong>
              websites with
              <span className="text-green-500 font-medium">Next.js</span> and
              cutting-edge web technologies. My mission is to transform ideas
              into seamless digital experiences that make an impact.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: "8+", label: "Months Experience" },
                { value: "2+", label: "Projects" },
                { value: "Ludhiana", label: "Based In" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-md shadow-md rounded-xl p-4 text-center transition hover:shadow-2xl hover:border-green-500 border border-transparent"
                >
                  <h3 className="text-2xl font-bold text-green-500">
                    {item.value}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-green-500 text-black rounded-lg shadow hover:bg-green-600 transition"
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
