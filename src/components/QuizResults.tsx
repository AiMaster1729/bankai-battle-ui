
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { QuizResult, quizResults } from "../data/quizData";
import { bankais } from "../data/bankais";
import { characters } from "../data/characters";

interface QuizResultsProps {
  answers: Record<number, string>;
  onRetake: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ answers, onRetake }) => {
  // Count the frequency of each answer
  const answerCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    Object.values(answers).forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1;
    });
    return counts;
  }, [answers]);

  // Find the most frequent answer
  const mostFrequentAnswer = useMemo(() => {
    let maxCount = 0;
    let maxKey = "";
    
    Object.entries(answerCounts).forEach(([key, count]) => {
      if (count > maxCount) {
        maxCount = count;
        maxKey = key;
      }
    });
    
    return maxKey;
  }, [answerCounts]);

  // Get the result based on the most frequent answer
  const result = useMemo(() => {
    return {
      key: mostFrequentAnswer,
      count: answerCounts[mostFrequentAnswer] || 0,
      total: Object.keys(answers).length,
    };
  }, [mostFrequentAnswer, answerCounts, answers]);

  // Find the character and bankai data
  const characterData = useMemo(() => {
    const foundCharacter = characters.find(
      (char) => char.name === quizResults.find((res) => res.key === result.key)?.character
    );
    
    const foundBankai = bankais.find(
      (bankai) => bankai.owner === foundCharacter?.name
    );
    
    return {
      character: foundCharacter,
      bankai: foundBankai,
    };
  }, [result.key]);

  const resultData = quizResults.find((res) => res.key === result.key);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-4 border-black bg-white p-8 shadow-manga"
    >
      <h2 className="text-4xl font-bebas text-center mb-8 border-b-2 border-black pb-2">YOUR RESULT</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col items-center">
          <div className="relative w-full h-[300px] mb-4 overflow-hidden border-2 border-black">
            {characterData.character?.imageSrc && (
              <img 
                src={characterData.character.imageSrc} 
                alt={resultData?.character || ""} 
                className="w-full h-full object-cover"
              />
            )}
            <div className={`absolute bottom-0 left-0 right-0 h-12 ${characterData.character?.reiatsuColor || ""} opacity-70`}></div>
          </div>
          <div className="stats text-center">
            <p className="text-lg font-noto">
              You selected <span className="font-bold">{result.key.toUpperCase()}</span> answers 
              <span className="font-bold"> {result.count}</span> out of <span className="font-bold">{result.total}</span> times
            </p>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-3xl font-bebas mb-2">{resultData?.character}</h3>
          <p className="text-xl mb-4 font-bold font-noto">
            {resultData?.bankai}
          </p>
          <p className="text-lg font-noto mb-6">
            {resultData?.description}
          </p>
          
          {Object.entries(answerCounts).length > 1 && (
            <div className="mt-auto">
              <h4 className="text-xl font-bebas mb-2 border-t-2 border-black pt-2">YOUR ANSWER BREAKDOWN</h4>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(answerCounts)
                  .sort(([, countA], [, countB]) => countB - countA)
                  .map(([key, count]) => (
                    <div key={key} className="text-sm font-noto">
                      <span className="font-bold">{key.toUpperCase()}</span>: {count} answer{count !== 1 ? 's' : ''}
                      {key === result.key && <span className="ml-1">★</span>}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-center">
        <motion.button
          onClick={onRetake}
          className="px-8 py-3 bg-black text-white font-bebas text-xl rounded-none hover:bg-black/80 transition-all duration-300 border-2 border-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          RETAKE QUIZ
        </motion.button>
      </div>
    </motion.div>
  );
};

export default QuizResults;
