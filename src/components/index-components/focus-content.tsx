import React, { useState } from 'react';
import FocusCard from "./focus-card";
import SectionTitle from "../shared/section-title";

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

  return (
    <div className="relative grid grid-cols-2 px-[30px] h-[940px]">
      <SectionTitle title="OUR FOCUS" iconColor="#1C7FC1" topDistance="54px" />
      <div className="grid gap-20 grid-rows-[auto_500px] content-center">
        <h1 className="font-integralCF text-purple500 text-[40px] leading-[130%] mt-[50px] w-[600px]">
          When Intelligent Tech Meets Business Process
        </h1>
        <div className="grid">
          {focusCards.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`
                transition-all duration-100 ease-out cursor-pointer
                ${animatingCardIndex === index ? 'scale-105 opacity-50' : 'scale-100 opacity-100'}
                ${openCardIndex === index ? 'z-10' : 'z-0'}
              `}
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
      </div>
    </div>
  );
};

export default FocusContent;
