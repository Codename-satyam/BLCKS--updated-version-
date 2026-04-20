import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../Context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
    navigate('/');
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">

      <nav
        className="w-full h-16 bg-black/70 backdrop-blur-md text-white flex items-center justify-between px-6 md:px-8 border-b border-white/10"
        style={{ fontFamily: '"Bungee", cursive' }}
      >

        {/* Logo */}
        <div className="text-cyan-400 text-sm glitch relative text-[24px]">
          BLCKS
        </div>

        {/* Desktop Center Links - Hidden on mobile */}
        <div className="hidden md:flex justify-center gap-10 text-[15px]">
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

        {/* Desktop User Area - Hidden on mobile */}
        <div className="hidden md:flex justify-end items-center gap-4 text-[15px]">
          {user ? (
            <>
              <span className="text-cyan-400 font-bold">{user.username || user.email}</span>
              <button 
                className="login-btn hover:bg-red-600/20 hover:border-red-500 transition-colors" 
                onClick={handleLogout}
              >
                Logout
              </button>
              <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-black text-[10px] font-bold">
                {user.username?.[0]?.toUpperCase() || "U"}
              </div>
            </>
          ) : (
            <>
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
              <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-black text-[10px]">
                👤
              </div>
            </>
          )}
        </div>

        {/* Mobile Hamburger Menu - Visible only on mobile */}
        <button 
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

      </nav>

      {/* Mobile Menu - Slides down when open */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-0 px-6 py-4">
            <Link 
              to="/" 
              className="navlink py-3 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/builder-landing" 
              className="navlink py-3 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Build
            </Link>
            <Link 
              to="/components" 
              className="navlink py-3 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Components
            </Link>
            <Link 
              to="/contact" 
              className="navlink py-3 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/about" 
              className="navlink py-3 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Mobile User Area */}
            <div className="flex flex-col items-stretch gap-3 py-4 border-t border-white/10 mt-2">
              {user ? (
                <>
                  <div className="flex items-center justify-between px-2 py-2 bg-cyan-950/30 rounded border border-cyan-500/30">
                    <span className="text-cyan-400 font-bold">{user.username || user.email}</span>
                    <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-black text-[10px] font-bold">
                      {user.username?.[0]?.toUpperCase() || "U"}
                    </div>
                  </div>
                  <button 
                    className="login-btn hover:bg-red-600/20 hover:border-red-500 transition-colors" 
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button 
                    className="login-btn w-full" 
                    onClick={() => {
                      navigate("/login");
                      setIsOpen(false);
                    }}
                  >
                    Login
                  </button>
                  <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-black text-[10px] mx-auto">
                    👤
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}