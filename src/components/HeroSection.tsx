
import React from "react";
import { ChevronDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToCharacters = () => {
    const charactersSection = document.getElementById("characters");
    if (charactersSection) {
      charactersSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.85), rgba(139, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bleach-black/60 to-bleach-red/30"></div>

      <div className="container mx-auto relative z-10 text-center animate-fade-in">
        <h1 className="hero-text mb-6">
          BLEACH<span className="text-bleach-red">:</span> 
          <span className="text-bleach-gold">THOUSAND YEAR</span> 
          <span className="block sm:inline"> BLOOD WAR</span>
        </h1>
        
        <p className="text-bleach-white text-lg md:text-xl max-w-3xl mx-auto mb-10 font-noto">
          Unleash your Bankai and witness the epic final battle between Shinigami, Quincy, and the fate of all realms
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#characters"
            className="px-8 py-3 bg-bleach-red text-bleach-white font-bebas text-xl rounded hover:bg-bleach-red/80 transition-all duration-300 animate-pulse-reiatsu shadow-lg"
          >
            EXPLORE CHARACTERS
          </a>
          <a
            href="#bankais"
            className="px-8 py-3 bg-transparent border-2 border-bleach-gold text-bleach-gold font-bebas text-xl rounded hover:bg-bleach-gold/10 transition-all duration-300 shadow-lg"
          >
            DISCOVER BANKAIS
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToCharacters}
      >
        <ChevronDown className="w-10 h-10 text-bleach-white" />
      </div>
    </section>
  );
};

export default HeroSection;
