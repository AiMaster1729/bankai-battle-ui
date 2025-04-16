
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Sword, Droplet, Skull, Crown, Heart, Snowflake, Flame, User } from "lucide-react";
import { characters, CharacterType } from "../data/characters";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const CharacterProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundCharacter = characters.find(char => char.id === parseInt(id));
      setCharacter(foundCharacter || null);
      setLoading(false);
    }
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl font-shojumaru">Loading...</div>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-2xl font-shojumaru mb-4">Character Not Found</div>
        <motion.button
          onClick={goBack}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white font-bebas rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={16} /> GO BACK
        </motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.button
            onClick={goBack}
            className="mb-8 flex items-center gap-2 px-4 py-2 bg-black text-white font-bebas rounded hover:bg-black/80"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={16} /> BACK TO CHARACTERS
          </motion.button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Character Image */}
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border-2 border-black shadow-[5px_5px_0_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${character.imageSrc})` }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${character.reiatsuColor}`}></div>
                  <span className="text-white text-sm font-noto">Reiatsu</span>
                </div>
              </div>
            </motion.div>
            
            {/* Character Details */}
            <motion.div
              className="bg-white p-6 border-2 border-black rounded-lg shadow-[5px_5px_0_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <character.icon className="w-6 h-6 text-black" />
                <h1 className="font-shojumaru text-3xl text-black">{character.name}</h1>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 border-l-4 border-black bg-gray-50">
                  <h3 className="text-sm text-black/60 font-noto">ROLE</h3>
                  <p className="text-lg font-noto text-black">{character.role}</p>
                </div>
                
                <div className="p-3 border-l-4 border-black bg-gray-50">
                  <h3 className="text-sm text-black/60 font-noto">ZANPAKUTO</h3>
                  <p className="text-lg font-noto text-black">{character.zanpakuto}</p>
                </div>
                
                <div className="p-3 border-l-4 border-black bg-gray-50">
                  <h3 className="text-sm text-black/60 font-noto">QUOTE</h3>
                  <p className="text-lg font-noto text-black italic">"{character.quote}"</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-manga-dots bg-[size:10px_10px] border-2 border-black rounded">
                <h3 className="font-bebas text-lg mb-2">CHARACTER SUMMARY</h3>
                <p className="font-noto text-sm">
                  {character.name} is a powerful {character.role.toLowerCase()} known for wielding {character.zanpakuto}. 
                  Their distinctive fighting style and personality have made them a memorable character in the Bleach universe.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Additional Content Section */}
          <motion.div
            className="mt-12 border-t-2 border-black/20 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-shojumaru text-2xl text-center mb-6">RELATED CONTENT</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border-2 border-black rounded-lg bg-white shadow-[3px_3px_0_rgba(0,0,0,0.5)]">
                <h3 className="font-bebas text-lg mb-2">NOTABLE BATTLES</h3>
                <p className="font-noto text-sm">
                  Explore the significant battles and confrontations involving {character.name} throughout the series.
                </p>
              </div>
              
              <div className="p-4 border-2 border-black rounded-lg bg-white shadow-[3px_3px_0_rgba(0,0,0,0.5)]">
                <h3 className="font-bebas text-lg mb-2">POWERS & ABILITIES</h3>
                <p className="font-noto text-sm">
                  Learn more about {character.name}'s unique powers, abilities, and fighting techniques.
                </p>
              </div>
              
              <div className="p-4 border-2 border-black rounded-lg bg-white shadow-[3px_3px_0_rgba(0,0,0,0.5)]">
                <h3 className="font-bebas text-lg mb-2">CHARACTER EVOLUTION</h3>
                <p className="font-noto text-sm">
                  Track {character.name}'s development and growth throughout the Bleach series.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CharacterProfile;
