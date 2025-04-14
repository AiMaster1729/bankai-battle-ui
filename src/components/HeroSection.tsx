
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
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-manga-lines bg-[size:20px_20px]"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-1/4 w-[600px] h-[2px] bg-black rotate-[-30deg] opacity-10"></div>
        <div className="absolute right-20 top-1/3 w-[400px] h-[2px] bg-black rotate-[25deg] opacity-10"></div>
        <div className="absolute left-1/4 bottom-1/4 w-[300px] h-[2px] bg-black rotate-[15deg] opacity-10"></div>
        <div className="absolute right-1/3 bottom-1/3 w-[500px] h-[2px] bg-black rotate-[-20deg] opacity-10"></div>
      </div>

      <div className="container mx-auto relative z-10 text-center animate-fade-in">
        <div className="manga-panel inline-block p-1 p-6 mb-6 transform rotate-[-1deg]">
          <h1 className="hero-text mb-2">
            BLEACH<span className="text-black">:</span> 
            <span className="font-bold"> THOUSAND YEAR</span> 
            <span className="block sm:inline"> BLOOD WAR</span>
          </h1>
        </div>
        
        <p className="text-bleach-black text-lg md:text-xl max-w-3xl mx-auto mb-10 font-noto relative">
          <span className="relative z-10">
            Unleash your Bankai and witness the epic final battle between Shinigami, Quincy, and the fate of all realms
          </span>
          <span className="absolute left-0 right-0 bottom-0 h-[6px] bg-manga-dots bg-[size:8px_8px] opacity-20"></span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#characters"
            className="px-8 py-3 bg-black text-white font-bebas text-xl rounded hover:bg-black/80 transition-all duration-300 animate-pulse-manga shadow-lg relative overflow-hidden group"
          >
            <span className="relative z-10">EXPLORE CHARACTERS</span>
            <span className="absolute inset-0 bg-manga-lines opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </a>
          <a
            href="#bankais"
            className="px-8 py-3 bg-transparent border-2 border-black text-black font-bebas text-xl rounded hover:bg-black/5 transition-all duration-300 shadow-lg"
          >
            DISCOVER BANKAIS
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToCharacters}
      >
        <ChevronDown className="w-10 h-10 text-black" />
      </div>
    </section>
  );
};

export default HeroSection;
