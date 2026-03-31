import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-blue-400 border-white border-2 px-3 py-1 font-bold text-lg">S</div>
        </div>
        <nav className="hidden md:flex gap-8 font-medium text-lg capitalize">
          <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link>
          <Link to="/banner" className="hover:text-yellow-300 transition-colors">CTA Banner</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-blue-500 px-4 pb-4 flex flex-col gap-4 text-lg font-medium capitalize">
          <Link to="/" className="hover:text-yellow-300 transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}