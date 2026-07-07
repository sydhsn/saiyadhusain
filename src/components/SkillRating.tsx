"use client";

import { motion } from "framer-motion";

interface SkillRatingProps {
  name: string;
  rating: number;
}

const SkillRating = ({ name, rating }: SkillRatingProps) => {
  return (
    <div className="w-full">
      <div className="mb-1.5 flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-content-muted">{rating}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${rating}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillRating;
