
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CharacterType } from "../data/characters";

interface CharacterCardProps {
  character: CharacterType;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden bg-white border-2 border-black shadow-xl transition-all duration-300 ${
        isHovered ? "shadow-[5px_5px_0_rgba(0,0,0,0.8)]" : "shadow-[3px_3px_0_rgba(0,0,0,0.5)]"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
    >
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-black z-10 opacity-80"></div>
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[35px] border-r-[35px] border-t-transparent border-r-white z-20 opacity-90"></div>
      
      <div
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${character.imageSrc})` }}
      >
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-speed-lines bg-[size:10px_10px] z-10 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        <div className="w-full h-full bg-gradient-to-t from-white via-white/70 to-transparent flex items-end p-4">
          <div className="w-full relative">
            <h3 className="font-shojumaru text-xl text-black">{character.name}</h3>
            <p className="text-sm text-black/80 font-noto">{character.role}</p>
            <div className="absolute bottom-full right-0 w-[120px] h-[1px] bg-black rotate-[-5deg] opacity-30"></div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center mb-2">
          <character.icon className="w-5 h-5 mr-2 text-black" />
          <span className="text-sm font-noto text-black relative">
            Zanpakuto: <span className="font-semibold">{character.zanpakuto}</span>
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/20"></span>
          </span>
        </div>
        
        <p className="text-sm italic text-black/70 mt-3 font-noto">"{character.quote}"</p>
        
        <div className="mt-4 flex justify-end">
          <Link to={`/character/${character.id}`}>
            <motion.button
              className="text-xs font-bebas py-1 px-3 bg-black text-white rounded-sm hover:bg-black/80 transition-colors duration-300 relative overflow-hidden"
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">VIEW PROFILE</span>
              {isHovered && (
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ opacity: 0.2 }}
                />
              )}
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterCard;
