import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import CharacterCard from "../components/CharacterCard";
import BankaiShowcase from "../components/BankaiShowcase";
import Footer from "../components/Footer";
import { characters } from "../data/characters";
import { bankais } from "../data/bankais";

const Index = () => {
  const [showAllBankais, setShowAllBankais] = useState(false);

  const visibleBankais = showAllBankais ? bankais : bankais.slice(0, 4);

  const toggleShowAllBankais = () => {
    setShowAllBankais(!showAllBankais);
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <HeroSection />
      
      {/* Characters Section */}
      <section id="characters" className="py-20 px-4 relative bg-white">
        <div className="absolute inset-0 bg-manga-dots bg-[size:20px_20px] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto">
          <motion.h2 
            className="section-title text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            CHARACTERS
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Bankais Section */}
      <section 
        id="bankais" 
        className="py-20 px-4 bg-gradient-to-b from-white to-gray-100 relative"
      >
        <div className="absolute inset-0 bg-manga-lines bg-[size:30px_30px] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto">
          <motion.h2 
            className="section-title text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            BANKAI SHOWCASE
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleBankais.map((bankai) => (
              <BankaiShowcase key={bankai.id} bankai={bankai} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <motion.button
              onClick={toggleShowAllBankais}
              className="flex items-center justify-center mx-auto px-6 py-3 bg-black text-white font-bebas text-xl rounded hover:bg-black/80 transition-all duration-300 border-2 border-black gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllBankais ? (
                <>
                  SHOW LESS <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  SHOW MORE <ChevronDown className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </div>
          
          <div className="mt-16 text-center">
            <motion.p 
              className="text-lg text-black/90 font-noto italic mb-8 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              "Bankai is the ultimate expression of a Shinigami's power, achieved after years of rigorous training and a deep connection with their Zanpakuto."
              <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/20"></span>
            </motion.p>
            
            <motion.a
              href="#home"
              className="inline-block px-8 py-3 bg-black text-white font-bebas text-xl rounded hover:bg-black/80 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RETURN TO TOP
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Quiz Section (formerly Coming Soon) */}
      <section className="py-20 px-4 bg-white border-t-2 border-black/10">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="section-title mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            BANKAI CHARACTER QUIZ
          </motion.h2>
          
          <motion.div
            className="max-w-2xl mx-auto p-6 border-2 border-black rounded-lg bg-white relative shadow-manga"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center transform rotate-12">
              <span className="font-bebas text-sm text-black">NEW!</span>
            </div>
            
            <h3 className="font-shojumaru text-xl text-black mb-4">WHICH TYBW CHARACTER ARE YOU?</h3>
            <p className="text-black/80 font-noto mb-6">
              Take our interactive quiz to discover which character from the Thousand-Year Blood War arc matches your personality.
            </p>
            
            <Link to="/quiz">
              <motion.button 
                className="px-6 py-2 bg-black border-2 border-black text-white font-bebas text-lg rounded hover:bg-black/80 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                TAKE THE QUIZ
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
