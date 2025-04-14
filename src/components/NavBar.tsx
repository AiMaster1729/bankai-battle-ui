
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-bleach-black border-b border-bleach-red z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-shojumaru text-2xl text-bleach-white">
              BLEACH<span className="text-bleach-red">:</span>TYBW
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Characters", "Bankais", "Quiz"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-noto text-bleach-white hover:text-bleach-red transition-colors duration-300 relative overflow-hidden group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-bleach-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-bleach-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4 py-4">
              {["Home", "Characters", "Bankais", "Quiz"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-noto text-bleach-white hover:text-bleach-red px-4 py-2 border-l-2 border-transparent hover:border-bleach-red transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
