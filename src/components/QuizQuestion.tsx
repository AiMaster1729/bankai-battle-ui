
import React from "react";
import { motion } from "framer-motion";
import { QuizQuestion as QuizQuestionType } from "../data/quizData";
import QuizOption from "./QuizOption";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: string | null;
  onSelect: (questionId: number, key: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onSelect,
}) => {
  return (
    <div className="mb-12 border-2 border-black bg-white p-6 shadow-manga">
      <motion.h3 
        className="text-2xl font-bebas mb-6 border-b-2 border-black pb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {question.id}. {question.question}
      </motion.h3>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <QuizOption
            key={option.key}
            option={option}
            selected={selectedAnswer === option.key}
            onSelect={(key) => onSelect(question.id, key)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
