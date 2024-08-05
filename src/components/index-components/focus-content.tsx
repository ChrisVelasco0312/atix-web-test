import React, { useState } from 'react';
import FocusCard from "./focus-card";
import FocusMobileCard from './focus-mobile-card';
import SectionTitle from "../shared/section-title";
import { useViewportInfo } from '../hooks/useViewportInfo';
import SliderDots from '../shared/slider-dots';
import { t } from "astro-i18n";

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
      title: t("index.focus.card1.title"),
      descriptionStrong: t("index.focus.card1.smallDescription"),
      description: t("index.focus.card1.description"),
      iconSrcActive: "icons/machine-learning-icon-active.svg",
      iconSrc: "icons/machine-learning-icon.svg"
    },
    {
      title: t("index.focus.card2.title"),
      descriptionStrong: t("index.focus.card2.smallDescription"),
      description: t("index.focus.card2.description"),
      iconSrcActive: "icons/user-experience-icon-active.svg",
      iconSrc: "icons/user-experience-icon.svg"
    },
    {
      title: t("index.focus.card3.title"),
      descriptionStrong: t("index.focus.card3.smallDescription"),
      description: t("index.focus.card3.description"),
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
      <SectionTitle title={t("index.focus.sectionText")} iconColor="#1C7FC1" topDistance={width < 720 ? "30px" : "54px"} leftDistance={width < 720 ? "10px" : ""} />
      <div className="grid gap-4 lg:grid-rows-[auto_500px] content-center justify-items-center">
        <h1 className="font-integralCF text-purple500 lg:text-[40px] text-[28px] leading-[130%] lg:mt-[50px] lg:w-[600px] w-[285px]">
          {t("index.focus.title")}
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
          <SliderDots
            itemIndex={currentMobileCard}
            itemsLength={focusCards.length}
            handleDotClick={handleDotClick}
          >
            <FocusMobileCard
              title={focusCards[currentMobileCard].title}
              descriptionStrong={focusCards[currentMobileCard].descriptionStrong}
              iconSrc={focusCards[currentMobileCard].iconSrc}
            />
          </SliderDots>
        )}
      </div>
    </div>
  );
};

export default FocusContent;
