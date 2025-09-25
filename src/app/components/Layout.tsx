import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1 w-full container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
