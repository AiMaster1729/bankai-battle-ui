
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BankaiType } from "../data/bankais";

interface BankaiShowcaseProps {
  bankai: BankaiType;
}

const BankaiShowcase: React.FC<BankaiShowcaseProps> = ({ bankai }) => {
  const [isActivated, setIsActivated] = useState(false);
  
  const toggleBankai = () => {
    setIsActivated(!isActivated);
  };

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-xl border-2 border-black bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isActivated && (
        <motion.div 
          className="absolute inset-0 bg-speed-lines z-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
        />
      )}
      
      <div
        className="h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bankai.imageSrc})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-4 z-10">
          <h3 className="bankai-title mb-1">{bankai.name}</h3>
          <p className="text-sm text-black/80 font-noto">{bankai.owner}</p>
          
          <div className="mt-4">
            <motion.button
              onClick={toggleBankai}
              className={`font-bebas py-2 px-4 rounded transition-all duration-300 ${
                isActivated
                  ? "bg-black text-white"
                  : "bg-white text-black border-2 border-black"
              }`}
              whileTap={{ scale: 0.95 }}
              whileHover={{
                boxShadow: isActivated 
                  ? "0px 0px 8px rgba(0,0,0,0.5)" 
                  : "0px 0px 0px rgba(0,0,0,0)"
              }}
            >
              {isActivated ? "SEAL BANKAI" : "RELEASE BANKAI"}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-black/20">
        <div className="mb-3">
          <span className="text-xs font-noto text-black/70">
            {isActivated ? "BANKAI:" : "SHIKAI:"} 
            <span className="ml-2 text-black font-medium">
              {isActivated ? bankai.bankai : bankai.shikai}
            </span>
          </span>
        </div>
        
        {isActivated && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="text-sm text-black/90 font-noto relative"
          >
            <p>{bankai.description}</p>
            
            <div className="absolute -left-2 top-0 bottom-0 w-[1px] bg-black"></div>
            {/* Manga-style action lines */}
            <div className="absolute right-0 top-1/2 w-[100px] h-[1px] bg-black rotate-[-20deg] opacity-20"></div>
            <div className="absolute right-20 bottom-1/3 w-[60px] h-[1px] bg-black rotate-[15deg] opacity-20"></div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BankaiShowcase;
