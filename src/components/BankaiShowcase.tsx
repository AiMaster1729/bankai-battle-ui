
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
      className={`relative rounded-lg overflow-hidden shadow-xl ${
        isActivated ? bankai.reiatsuColor : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bankai.imageSrc})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bleach-black via-bleach-black/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-4 z-10">
          <h3 className="bankai-title mb-1">{bankai.name}</h3>
          <p className="text-sm text-bleach-white/80 font-noto">{bankai.owner}</p>
          
          <div className="mt-4">
            <motion.button
              onClick={toggleBankai}
              className={`font-bebas py-2 px-4 rounded transition-colors duration-300 ${
                isActivated
                  ? "bg-bleach-gold text-bleach-black"
                  : "bg-bleach-red/80 text-bleach-white"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isActivated ? "SEAL BANKAI" : "RELEASE BANKAI"}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="p-4 bg-bleach-black border-t border-gray-800">
        <div className="mb-3">
          <span className="text-xs font-noto text-bleach-white/70">
            {isActivated ? "BANKAI:" : "SHIKAI:"} 
            <span className="ml-2 text-bleach-white font-medium">
              {isActivated ? bankai.bankai : bankai.shikai}
            </span>
          </span>
        </div>
        
        {isActivated && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="text-sm text-bleach-white/90 font-noto"
          >
            <p>{bankai.description}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BankaiShowcase;
