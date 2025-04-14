
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CharacterType } from "../data/characters";

interface CharacterCardProps {
  character: CharacterType;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden bg-bleach-black border border-gray-800 shadow-xl transition-all duration-300 ${
        isHovered ? character.reiatsuColor : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
    >
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${character.imageSrc})` }}
      >
        <div className="w-full h-full bg-gradient-to-t from-bleach-black to-transparent flex items-end p-4">
          <div className="w-full">
            <h3 className="font-shojumaru text-xl text-bleach-white">{character.name}</h3>
            <p className="text-sm text-bleach-white/80 font-noto">{character.role}</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center mb-2">
          <character.icon className="w-5 h-5 mr-2 text-bleach-red" />
          <span className="text-sm font-noto text-bleach-white/90">Zanpakuto: {character.zanpakuto}</span>
        </div>
        
        <p className="text-sm italic text-bleach-white/70 mt-3 font-noto">"{character.quote}"</p>
        
        <div className="mt-4 flex justify-end">
          <motion.button
            className="text-xs font-bebas py-1 px-3 bg-bleach-red/80 text-bleach-white rounded-sm hover:bg-bleach-red transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
          >
            VIEW PROFILE
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterCard;
