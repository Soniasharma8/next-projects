import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
          My Portfolio
        </h1>

        {/* Links */}
        <div className="flex space-x-6 font-medium text-white">
          {[
            "/",
            "/about",
            "/skills",
            "/education",
            "/projects",
            "/contact",
          ].map((href, index) => {
            const names = [
              "Home",
              "About",
              "Skills",
              "Education",
              "Projects",
              "Contact",
            ];
            return (
              <Link
                key={index}
                href={href}
                className="relative group hover:text-green-500 transition-colors duration-300"
              >
                {names[index]}
                <span className="absolute inset-0 bg-green-500 opacity-20 blur-lg scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
              </Link>
            );
          })}
        </div>
        </div>
    </nav>
  );
}
