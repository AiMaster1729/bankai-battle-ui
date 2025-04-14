
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-bleach-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="font-shojumaru text-2xl text-bleach-white mb-2">
            BLEACH<span className="text-bleach-red">:</span>TYBW
          </h2>
          <p className="text-sm text-bleach-white/60 font-noto">
            Fan-made website dedicated to the Thousand-Year Blood War arc
          </p>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="text-center text-xs text-bleach-white/50 font-noto">
            <p>Images sourced from Unsplash for demonstration purposes</p>
            <p className="mt-2">
              Bleach and all related characters, stories, and elements are © Tite Kubo/Shueisha/Viz Media
            </p>
            <p className="mt-4">
              This is a fan-made website for educational purposes only. No copyright infringement intended.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
