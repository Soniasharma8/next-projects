import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-500">
          Get in Touch
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Feel free to reach out through the form below or via my contact
          details.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md shadow-md rounded-2xl p-6 space-y-4 border border-transparent hover:border-green-500 transition">
            <h2 className="text-xl font-semibold mb-4 text-green-500">
              Contact Information
            </h2>
            <p className="text-gray-300">
              📞 Phone:{" "}
              <a
                href="tel:123-456-7890"
                className="text-green-400 hover:underline"
              >
                123-456-7890
              </a>
            </p>
            <p className="text-gray-300">
              📧 Email:{" "}
              <a
                href="mailto:example@mail.com"
                className="text-green-400 hover:underline"
              >
                example@mail.com
              </a>
            </p>
            <p className="text-gray-300">
              📍 Location: <span className="text-green-400">xyz, Pune</span>
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md shadow-md rounded-2xl p-6 border border-transparent hover:border-green-500 transition">
            <h2 className="text-xl font-semibold mb-4 text-green-500">
              Send a Message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-black text-white border-gray-700"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-black text-white border-gray-700"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-black text-white border-gray-700"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 text-black py-2 rounded-lg hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
