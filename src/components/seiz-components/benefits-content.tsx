import { useState } from "react";
import { useViewportInfo } from "../hooks/useViewportInfo";
import SliderDots from "../shared/slider-dots";
import { t } from "astro-i18n";

const BenefitsCard = ({
  iconSrc,
  title,
  description
}: {
  iconSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex lg:p-0 p-2 bg-white place-items-center justify-center lg:gap-[24px] gap-2 shadow-[8px_8px_26.5px_-8px_rgba(181,199,21,0.30)] rounded-[16px] lg:w-[576px] h-[161px]">
      <img className="lg:w-[51px] lg:h-[51px] w-[38px]" src={iconSrc} alt="icon" />
      <div className="lg:w-[425px] w-fit">
        <h1 className="font-jakartaSansBold lg:text-[24px] text-[16px]">{title}</h1>
        <p className="text-petroleo500 lg:text-[16px] text-[14px] leading-[150%]">{description}</p>
      </div>
    </div>
  );
};


const BenefitsContent = () => {
  const { width } = useViewportInfo();
  const [currentIndex, setCurrentIndex] = useState(0);

  const benefits = [
    {
      iconSrc: "../../icons/seiz-benefits-reduce-icon.svg",
      title: t('seiz.benefits.card1.title'),
      description: t('seiz.benefits.card1.description'),
    },
    {
      iconSrc: "../../icons/seiz-benefits-save-icon.svg",
      title: t('seiz.benefits.card2.title'),
      description: t('seiz.benefits.card2.description'),
    },
    {
      iconSrc: "../../icons/seiz-benefits-drive-icon.svg",
      title: t('seiz.benefits.card3.title'),
      description: t('seiz.benefits.card3.description'),
    },
    {
      iconSrc: "../../icons/seiz-benefits-catch-icon.svg",
      title: t('seiz.benefits.card4.title'),
      description: t('seiz.benefits.card4.description'),
    }
  ];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };


  return (
    <article className="lg:h-[644px] grid gap-10 pt-[81px] pb-[85px]">
      <div className="flex items-center justify-center gap-4">
        <h1 className="inline-block font-integralCF lg:text-[64px] text-[40px] text-stroke-green">
          {t("seiz.benefits.with")}
        </h1>
        <img
          className="relative lg:top-2 top-[4px] inline-block lg:w-[180px] lg:h-[56px] w-[140px]"
          src="../../logos/logo-seiz-clean.svg"
          alt="benefits"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-[34px]">
        {
          width < 440 ? (
            <SliderDots
              itemIndex={currentIndex}
              itemsLength={benefits.length}
              handleDotClick={handleDotClick}
              dotColors={{
                selected: "bg-[#B5C715]",
                unselected: "bg-[#B5C7154D]",
              }}
            >
              <BenefitsCard
                iconSrc={benefits[currentIndex].iconSrc}
                title={benefits[currentIndex].title}
                description={benefits[currentIndex].description}
              />
            </SliderDots>

          ) : benefits.map((benefit) => (
            <BenefitsCard
              key={benefit.title}
              iconSrc={benefit.iconSrc}
              title={benefit.title}
              description={benefit.description}
            />
          ))
        }
      </div>
    </article>
  );
};

export default BenefitsContent;
