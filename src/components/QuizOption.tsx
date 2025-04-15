
import React from "react";
import { motion } from "framer-motion";
import { QuizOption as QuizOptionType } from "../data/quizData";
import { cn } from "@/lib/utils";

interface QuizOptionProps {
  option: QuizOptionType;
  selected: boolean;
  onSelect: (key: string) => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({ option, selected, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "p-4 border-2 border-black mb-2 cursor-pointer transition-all duration-300",
        "font-noto relative overflow-hidden hover:bg-gray-50",
        selected ? "bg-black text-white" : "bg-white text-black"
      )}
      onClick={() => onSelect(option.key)}
    >
      <div className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center border-r-2 border-b-2 border-black">
        <span className={cn("font-bebas text-lg", selected ? "text-white" : "text-black")}>
          {option.key.toUpperCase()}
        </span>
      </div>
      <div className="ml-10">{option.text}</div>
    </motion.div>
  );
};

export default QuizOption;
