
import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import QuizQuestion from "../components/QuizQuestion";
import QuizResults from "../components/QuizResults";
import { quizQuestions } from "../data/quizData";

const Quiz = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionId: number, key: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: key,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === quizQuestions.length) {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleRetake = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const allQuestionsAnswered = Object.keys(answers).length === quizQuestions.length;

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="container mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bebas mb-4">BLEACH: THOUSAND-YEAR BLOOD WAR</h1>
            <h2 className="text-3xl font-shojumaru mb-8">BANKAI CHARACTER QUIZ</h2>
            <p className="text-lg font-noto mb-6">
              Discover which Bleach character you align with based on their Bankai (or Shikai, in Aizen's case) and personality!
            </p>
            
            <div className="bg-gray-100 border-2 border-black p-6 mb-8 text-left">
              <h3 className="text-xl font-bebas mb-3 border-b border-black pb-1">INSTRUCTIONS:</h3>
              <ul className="list-disc pl-5 space-y-2 font-noto">
                <li>For each question, choose the option that best describes you.</li>
                <li>Answer all 5 questions to see your result.</li>
                <li>Your character will be determined by your most frequent answer choice.</li>
                <li>If you have a tie, enjoy being a blend of those characters!</li>
              </ul>
            </div>
          </div>
          
          {!showResults ? (
            <>
              <div className="space-y-8">
                {quizQuestions.map((question) => (
                  <QuizQuestion
                    key={question.id}
                    question={question}
                    selectedAnswer={answers[question.id] || null}
                    onSelect={handleSelectOption}
                  />
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <motion.button
                  onClick={handleSubmit}
                  className={`px-8 py-3 font-bebas text-xl rounded-none transition-all duration-300 border-2 ${
                    allQuestionsAnswered
                      ? "bg-black text-white border-black hover:bg-black/80"
                      : "bg-gray-300 text-gray-600 border-gray-400 cursor-not-allowed"
                  }`}
                  whileHover={allQuestionsAnswered ? { scale: 1.05 } : {}}
                  whileTap={allQuestionsAnswered ? { scale: 0.95 } : {}}
                  disabled={!allQuestionsAnswered}
                >
                  {allQuestionsAnswered ? "SEE YOUR RESULT" : "ANSWER ALL QUESTIONS"}
                </motion.button>
                
                {!allQuestionsAnswered && (
                  <p className="text-red-500 mt-2 font-noto">
                    {`You've answered ${Object.keys(answers).length} of ${
                      quizQuestions.length
                    } questions`}
                  </p>
                )}
              </div>
            </>
          ) : (
            <QuizResults answers={answers} onRetake={handleRetake} />
          )}
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Quiz;
