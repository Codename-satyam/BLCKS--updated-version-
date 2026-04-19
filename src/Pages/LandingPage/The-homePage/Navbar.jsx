import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">

      <nav
        className="w-full h-16 bg-black/70 backdrop-blur-md text-white grid grid-cols-3 items-center px-8 border-b border-white/10"
        style={{ fontFamily: '"Bungee", cursive' }}
      >

        {/* Logo */}
        <div className="text-cyan-400 text-sm glitch relative text-[24px]">
          BLCKS
        </div>

        {/* Center Links */}
        <div className="flex justify-center gap-10 text-[15px]">

          <Link to="/" className="navlink">
            Home
          </Link>

          <Link to="/builder-landing" className="navlink">
            Build
          </Link>

          <Link to="/components" className="navlink">
            Components
          </Link>

          <Link to="/contact" className="navlink">
            Contact
          </Link>
          <Link to='/about' className="navlink">
            About
          </Link>

        </div>

        {/* User Area */}
        <div className="flex justify-end items-center gap-4 text-[15px]">

          <button className="login-btn" style={{ hover: { cursor: "pointer" } }} onClick={() => window.location.href = "/login"}>
            Login
          </button>

          <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-black text-[10px]">
            👤
          </div>

        </div>

      </nav>
    </div>
  );
}