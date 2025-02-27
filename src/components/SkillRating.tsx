"use client";

import { motion } from "framer-motion";

interface SkillRatingProps {
  name: string;
  rating: number;
}

const SkillRating = ({ name, rating }: SkillRatingProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-lg">{name}</span>
        <span className="text-lg">{rating}%</span>
      </div>
      <motion.div
        className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${rating}%` }}
        transition={{ duration: 1 }}
      >
        <div className="h-2 bg-[#3345A4] rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default SkillRating; // Correct default export
