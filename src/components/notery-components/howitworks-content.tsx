import { useState } from "react";
import ElementSlider from "../shared/element-slider";
import { t } from "astro-i18n";

const WorkStep = ({
  stepNumber,
  stepTitle,
  stepDescription
}: {
  stepNumber: number,
  stepTitle: string,
  stepDescription: string
}) => {
  return (
    <div className="grid items-center grid-cols-[79.6px_1fr] gap-4 lg:pl-4 lg:pr-16 lg:h-[115px] p-4 h-fit relative bg-white rounded-[16px]">
      <div className="grid place-items-center content-center w-[79.6px] h-[92.87px] rounded-[8px] bg-[#F1EFFC]">
        <h1 className="relative bottom-[6px] font-integralCF text-[70px] text-stroke-purple">
          {stepNumber}
        </h1>
      </div>
      <div>
        <h1 className="font-jakartaSansBold lg:text-[24px]">
          {stepTitle}
        </h1>
        <p>{stepDescription}</p>
      </div>
    </div>
  );
};

const HowItWorksContent = () => {
  const steps = [
    {
      stepNumber: 1,
      stepTitle: t("notery.howitworks.step1.stepTitle"),
      stepDescription: t("notery.howitworks.step1.stepDescription")
    },
    {
      stepNumber: 2,
      stepTitle: t("notery.howitworks.step2.stepTitle"),
      stepDescription: t("notery.howitworks.step2.stepDescription")
    },
    {
      stepNumber: 3,
      stepTitle: t("notery.howitworks.step3.stepTitle"),
      stepDescription: t("notery.howitworks.step3.stepDescription")
    },
    {
      stepNumber: 4,
      stepTitle: t("notery.howitworks.step4.stepTitle"),
      stepDescription: t("notery.howitworks.step4.stepDescription")
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <article className="lg:h-[769px] h-[700px] grid lg:grid-rows-none grid-rows-[214px_200px] lg:grid-cols-2 lg:gap-0 gap-8 lg:p-0 py-10 content-center justify-items-center items-center">
      <div className="relative lg:grid hidden gap-[25px]">
        <div className="lg:block hidden absolute w-[16px] h-[100%] bg-[#4E2370] left-[50px]" />
        {
          steps.map((step, index) => {
            return (
              <WorkStep
                key={index}
                stepNumber={step.stepNumber}
                stepTitle={step.stepTitle}
                stepDescription={step.stepDescription}
              />
            );
          })
        }
      </div>
      <img
        className="lg:hidden block h-[214px]"
        src="../../images/notery-howitworks.png"
        alt="Notery How It Works" />
      <div className="lg:hidden grid gap-4 justify-items-center">
        <h2 className="text-purple500 text-[14px]">
          {t("notery.howitworks.title")}
        </h2>
        <ElementSlider
          customPosition="bottom-0"
          index={currentIndex}
          onNext={() => {
            if (currentIndex < steps.length - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              setCurrentIndex(0);
            }
          }}
          onPrev={() => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
            } else {
              setCurrentIndex(steps.length - 1);
            }
          }}
        >
          <WorkStep
            stepNumber={steps[currentIndex].stepNumber}
            stepTitle={steps[currentIndex].stepTitle}
            stepDescription={steps[currentIndex].stepDescription}
          />
        </ElementSlider>
      </div>
      <img
        className="lg:block hidden"
        src="../../images/notery-howitworks.png"
        alt="Notery How It Works" />
    </article>
  );
};

export default HowItWorksContent;
