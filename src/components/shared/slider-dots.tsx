import { motion } from "framer-motion";
import type React from "react";

const SliderDots = ({
  itemIndex,
  itemsLength,
  handleDotClick,
  animationDuration = 0.1,
  dotColors = { selected: "bg-purple500", unselected: "bg-gray400" },
  children
}: {
  itemIndex: number,
  itemsLength: number,
  animationDuration?: number,
  handleDotClick: (index: number) => void,
  dotColors?: {
    selected: string,
    unselected: string
  }
  children: React.ReactNode
}) => {
  return (
    <div className="relative overflow-visible">
      <div className="overflow-hidden">
        <div className="pt-4 pb-8 px-2">
          <motion.div
            key={itemIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: animationDuration }}
          >
            {children}
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center overflow-visible">
        {Array.from({ length: itemsLength }).map((_, index) => (
          <motion.div
            key={index}
            className={`w-[5px] h-[5px] rounded-full mx-1 cursor-pointer ${itemIndex === index ? dotColors.selected : dotColors.unselected}`}
            onClick={() => handleDotClick(index)}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderDots;
