import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FocusCard from "./focus-card";
import FocusMobileCard from './focus-mobile-card';
import SectionTitle from "../shared/section-title";
import { useViewportInfo } from '../hooks/useViewportInfo';

interface FocusCardData {
  title: string;
  descriptionStrong: string;
  description: string;
  iconSrc: string;
  iconSrcActive: string;
}

const FocusContent: React.FC = () => {
  const [openCardIndex, setOpenCardIndex] = useState<number>(0);
  const [animatingCardIndex, setAnimatingCardIndex] = useState<number | null>(null);
  const [currentMobileCard, setCurrentMobileCard] = useState<number>(0);
  const { breakpoint, width } = useViewportInfo();

  const focusCards: FocusCardData[] = [
    {
      title: "MACHINE LEARNING",
      descriptionStrong: "Harness the power of Data Intelligence!",
      description: "Using cutting-edge machine learning algorithms, we extract valuable insights from your data. Empower your business to make smart and accurate decisions with predictive analytics.",
      iconSrcActive: "icons/machine-learning-icon-active.svg",
      iconSrc: "icons/machine-learning-icon.svg"
    },
    {
      title: "USER EXPERIENCE",
      descriptionStrong: "A commitment to exceptional user experience!",
      description: "We design our solutions with a user-centric approach, ensuring that every interaction is intuitive, seamless, and efficient. Our goal is to simplify complex processes, making them accessible and straightforward for everyone",
      iconSrcActive: "icons/user-experience-icon-active.svg",
      iconSrc: "icons/user-experience-icon.svg"
    },
    {
      title: "RESEARCH",
      descriptionStrong: "We are dedicated to continuous innovation!",
      description: "By collaborating closely with academic institutions, we stay at the forefront of advancements in our field. Our commitment to research drives us to explore new frontiers, develop cutting-edge solutions, and integrate the latest technologies into our products.",
      iconSrcActive: "icons/research-icon-active.svg",
      iconSrc: "icons/research-icon.svg"
    }
  ];

  const handleCardClick = (index: number) => {
    setAnimatingCardIndex(index);
    setTimeout(() => {
      setOpenCardIndex(index);
      setAnimatingCardIndex(null);
    }, 100);
  };

  const handleDotClick = (index: number) => {
    setCurrentMobileCard(index);
  };

  return (
    <div className="relative grid lg:grid-cols-2 lg:px-[30px] lg:h-[940px] h-[530px]">
      <SectionTitle title="OUR FOCUS" iconColor="#1C7FC1" topDistance={width < 720 ? "30px" : "54px"} leftDistance={width < 720 ? "-30px" : ""} />
      <div className="grid gap-4 lg:grid-rows-[auto_500px] content-center justify-items-center">
        <h1 className="font-integralCF text-purple500 lg:text-[40px] text-[28px] leading-[130%] lg:mt-[50px] lg:w-[600px] w-[285px]">
          When Intelligent Tech Meets Business Process
        </h1>
        {breakpoint === "md" || breakpoint === "lg" || breakpoint === "xl" && (
          <div className="grid">
            {focusCards.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`transition-all duration-100 ease-out cursor-pointer ${animatingCardIndex === index ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} ${openCardIndex === index ? 'z-10' : 'z-0'}`}
              >
                <FocusCard
                  open={index === openCardIndex}
                  title={card.title}
                  descriptionStrong={card.descriptionStrong}
                  description={card.description}
                  iconSrc={index === openCardIndex ? card.iconSrcActive : card.iconSrc}
                />
              </div>
            ))}
          </div>
        )}

        {breakpoint === "xs" && (
          <div className="relative overflow-visible"> {/* Changed from overflow-hidden */}
            <div className="overflow-hidden"> {/* New wrapper div */}
              <div className="pt-4 pb-8 px-4"> {/* Padding to prevent shadow cutoff */}
                <motion.div
                  key={currentMobileCard}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.1 }}
                >
                  <FocusMobileCard
                    title={focusCards[currentMobileCard].title}
                    descriptionStrong={focusCards[currentMobileCard].descriptionStrong}
                    iconSrc={focusCards[currentMobileCard].iconSrcActive}
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex justify-center mt-4 overflow-visible">
              {focusCards.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${currentMobileCard === index ? 'bg-purple500' : 'bg-gray400'
                    }`}
                  onClick={() => handleDotClick(index)}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FocusContent;
