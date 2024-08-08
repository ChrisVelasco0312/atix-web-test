import { useState } from "react";
import SliderDots from "../shared/slider-dots";

const ProblemCard = ({
  iconSrc,
  title,
  description
}: {
  iconSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="grid content-center gap-4 bg-white pl-[36px] pr-[24px] filter lg:drop-shadow-[0_12.385px_39.632px_rgba(39,36,67,0.15)] drop-shadow-[0_3.385px_5.632px_rgba(39,36,67,0.15)] rounded-[16px] lg:w-[348px] h-[280px]">
      <img src={iconSrc} alt="icon" />
      <div>
        <h1 className="font-jakartaSansBold text-[18px] text-[#3A393F]">{title}</h1>
        <p className="text-[16px] leading-[150%] text-[#7D7D7D]">{description}</p>
      </div>
    </div>
  );
};


const ProblemContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const problems = [
    {
      iconSrc: "../icons/problem-icon-1.svg",
      title: "A person can only review between 40 and 50 documents.",
      description: "Business Intelligence Associates (BIA)"
    },
    {
      iconSrc: "../icons/problem-icon-2.svg",
      title: "Companies invest millions in hiring people",
      description: "Specifically for document review tasks"
    }
  ];

  return (
    <article className="h-[847px] grid lg:grid-cols-2 content-center items-center justify-items-center">
      <img className="hidden lg:block" src="../images/notery-problem.png" alt="Notery Problem" />
      <div className="grid gap-8 text-center lg:text-left">
        <div>
          <div className="relative top-[10px] grid justify-items-center gap-6 lg:block">
            <h1 className="relative top-[30px] font-integralCF lg:text-[40px] text-[26px] text-purple500 lg:w-auto w-[60%]">
              REVIEWING DOCUMENTS
            </h1>
            <h1 className="font-integralCF lg:text-[76px] text-[52px] text-purple300 leading-[110%] lg:leading-normal">
              ONE BY ONE
            </h1>
            <h1 className="relative bottom-[20px] font-integralCF lg:text-[40px] text-[26px] text-purple500 lg:text-nowrap">
              is a waste of time & resources
            </h1>
          </div>
          <p className="lg:text-[20px] lg:max-w-[545px]">
            Free yourself from tedious and costly tasks, and save time and money with Notery
          </p>
        </div>
        <div className="hidden lg:flex gap-4">
          {problems.map((problem) => (
            <ProblemCard
              key={problem.title}
              iconSrc={problem.iconSrc}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
        <div className="lg:hidden grid justify-items-center">
          <SliderDots
            itemIndex={currentIndex}
            itemsLength={problems.length}
            handleDotClick={setCurrentIndex}
          >
            <ProblemCard
              iconSrc={problems[currentIndex].iconSrc}
              title={problems[currentIndex].title}
              description={problems[currentIndex].description}
            />
          </SliderDots>
        </div>
      </div>

    </article>
  );
};

export default ProblemContent;
