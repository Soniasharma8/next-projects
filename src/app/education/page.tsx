import Layout from "../components/Layout";

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
      <div className="max-w-4xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold mb-12 text-center text-green-500">
          Education
        </h1>

        <div className="relative border-l-4 border-green-500 pl-6 space-y-10">
          {educationData.map((edu) => (
            <div
              key={edu.level}
              className="relative bg-white/10 backdrop-blur-md shadow-md rounded-xl p-6 border border-transparent hover:border-green-500 hover:shadow-2xl transition duration-300"
            >
              {/* Dot on Timeline */}
              <span className="absolute -left-3 top-6 w-6 h-6 bg-green-500 rounded-full border-4 border-black"></span>

              <h2 className="text-xl font-semibold text-green-500">
                {edu.level}
              </h2>
              <p className="text-gray-300">{edu.school}</p>
              <p className="text-gray-300">{edu.stream}</p>
              <p className="text-gray-400 mt-1">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
