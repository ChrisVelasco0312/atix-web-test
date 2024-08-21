import { motion } from "framer-motion";
import type React from "react";

const ElementSlider = (
  {
    index,
    customSize = "w-full h-full",
    children,
    onNext,
    onPrev
  }: {
    index: number,
    onNext: () => void,
    onPrev: () => void,
    children: React.ReactNode,
    customSize?: string
  }) => {
  return (
    <div className={`flex overflow-hidden ${customSize} items-center justify-center gap-1.5`}>
      <img
        src="../icons/chevron-left.svg"
        alt="chevron-left"
        className="relative bottom-[70px] w-[8px] h-[13px] cursor-pointer"
        onClick={onPrev}
      />
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
      <img
        src="../icons/chevron-right.svg"
        alt="chevron-right"
        className="relative bottom-[70px] w-[8px] h-[13px] cursor-pointer"
        onClick={onNext}
      />
    </div>
  );
};

export default ElementSlider;
