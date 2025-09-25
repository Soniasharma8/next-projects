export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center px-6">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
