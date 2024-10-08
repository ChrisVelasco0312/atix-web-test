import type React from "react";
import { t } from "astro-i18n";

interface Step {
  id: number;
  info: React.JSX.Element;
}


const Stepper = ({ steps }: { steps: Step[] }) => {
  return (
    <div className="relative text-white grid gap-8">
      <div className="absolute left-[20px] z-1 lg:h-[90%] h-[80%] w-[1px] bg-white"></div>
      {steps.map((step) => (
        <div key={step.id} className="grid grid-cols-[40px_1fr] items-start gap-4 relative z-2">
          <div className="relative w-[40px] h-[40px]">
            <div className="absolute w-[40px] h-[40px] bg-[#B5C715] font-jakartaSansBold rounded-full flex justify-center items-center">
              {step.id}
            </div>
          </div>
          {step.info}
        </div>
      ))}
    </div>
  );
};

const HowitworksContent = () => {
  const steps: Step[] = [
    {
      id: 1,
      info: <p className="h-full content-center">{t("seiz.howitworks.step1")}</p>,
    },
    {
      id: 2,
      info: <p className="h-full content-center">{t("seiz.howitworks.step2")}</p>,
    },
    {
      id: 3,
      info: <div className="flex gap-8 items-start">
        <img className="hidden lg:block" src="../../logos/logo-seiz-white.svg" alt="seiz-logo" />
        <div className="grid gap-4">
          <p>{t("seiz.howitworks.step3.1")}</p>
          <p>{t("seiz.howitworks.step3.2")}</p>
          <p>{t("seiz.howitworks.step3.3")}</p>
        </div>
      </div>,
    },
    {
      id: 4,
      info: <p className="lg:w-[380px]">
        {t("seiz.howitworks.step4")}
      </p>
    }
  ];

  return (
    <article className="lg:h-[829px] grid lg:flex lg:p-0 py-[45px] gap-4">
      <img
        className="hidden lg:block"
        height={800}
        src="../../images/seiz-howitworks.png"
        alt="howitworks"
      />
      <div className="grid lg:gap-4 gap-[27px] content-center">
        <h4 className="hidden lg:block text-[14px] text-white tracking-[2.8px]">{t("seiz.howitworks.sectionText")}</h4>
        <h1 className="font-integralCF lg:text-[40px] text-[28px] text-white mb-5 leading-[130%] lg:text-left text-center">
          {t("seiz.howitworks.title")}
        </h1>
        <img
          className="lg:hidden block"
          src="../../images/seiz-howitworks-complete.png"
          alt="howitworks"
        />
        <h4 className="lg:hidden block text-[14px] text-white tracking-[2.8px]">{t("seiz.howitworks.sectionText")}</h4>
        <Stepper steps={steps} />
      </div>
    </article>
  );
};

export default HowitworksContent;
