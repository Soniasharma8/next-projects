import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-6 sm:px-12 md:px-20 bg-black text-white rounded-2xl shadow-2xl">
        {/* Left Content */}
        <div className="flex-1 max-w-xl text-center md:text-left space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="px-3 py-1 text-sm bg-gray-800 rounded-full">
              Next.js
            </span>
            <span className="px-3 py-1 text-sm bg-gray-800 rounded-full">
              React
            </span>
            <span className="px-3 py-1 text-sm bg-gray-800 rounded-full">
              MERN
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hello, I’m <span className="text-green-500">Sonia</span>.
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            A passionate full-stack developer crafting unique digital
            experiences with{" "}
            <span className="font-semibold text-green-400">
              React, Next.js & Node.js
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-medium shadow-lg transition transform hover:-translate-y-1 animate-bounce"
            >
              Get in touch →
            </a>
            <a
              href="/projects"
              className="px-6 py-3 border border-gray-600 hover:border-green-400 rounded-lg font-medium transition transform hover:-translate-y-1"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="mt-8 md:mt-0 md:ml-12 flex justify-center items-center flex-shrink-0">
          <img
            src="https://cdn.dribbble.com/users/32785/screenshots/11267769/media/5e87b7f2a946f3c7d8f07e3745c81406.png?compress=1&resize=600x600"
            alt="3D Coding Illustration"
            className="w-60 sm:w-72 md:w-96 h-60 sm:h-72 md:h-96 rounded-2xl shadow-[0_0_80px_-15px_rgba(0,255,0,0.6)] object-cover"
          />
        </div>
      </section>
    </Layout>
  );
}
