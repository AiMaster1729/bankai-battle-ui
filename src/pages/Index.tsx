
import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import CharacterCard from "../components/CharacterCard";
import BankaiShowcase from "../components/BankaiShowcase";
import Footer from "../components/Footer";
import { characters } from "../data/characters";
import { bankais } from "../data/bankais";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <HeroSection />
      
      {/* Characters Section */}
      <section id="characters" className="py-20 px-4">
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
        className="py-20 px-4 bg-gradient-to-b from-bleach-black to-bleach-black/80"
      >
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
            {bankais.map((bankai) => (
              <BankaiShowcase key={bankai.id} bankai={bankai} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <motion.p 
              className="text-lg text-bleach-white/90 font-noto italic mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              "Bankai is the ultimate expression of a Shinigami's power, achieved after years of rigorous training and a deep connection with their Zanpakuto."
            </motion.p>
            
            <motion.a
              href="#home"
              className="inline-block px-8 py-3 bg-bleach-red/80 text-bleach-white font-bebas text-xl rounded hover:bg-bleach-red transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RETURN TO TOP
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-bleach-black/80 to-bleach-black">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="section-title mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            COMING SOON
          </motion.h2>
          
          <motion.div
            className="max-w-2xl mx-auto p-6 border border-bleach-gold/40 rounded-lg bg-gradient-to-br from-bleach-black to-bleach-black/90"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-shojumaru text-xl text-bleach-gold mb-4">WHICH TYBW CHARACTER ARE YOU?</h3>
            <p className="text-bleach-white/80 font-noto mb-6">
              Take our interactive quiz to discover which character from the Thousand-Year Blood War arc matches your personality.
            </p>
            
            <button 
              className="px-6 py-2 bg-transparent border-2 border-bleach-gold text-bleach-gold font-bebas text-lg rounded hover:bg-bleach-gold/10 transition-all duration-300 opacity-50 cursor-not-allowed"
              disabled
            >
              QUIZ COMING SOON
            </button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
