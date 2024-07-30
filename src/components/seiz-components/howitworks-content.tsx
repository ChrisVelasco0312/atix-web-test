import type React from "react";

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
      info: <p>Scan</p>,
    },
    {
      id: 2,
      info: <p>Upload to seiz</p>,
    },
    {
      id: 3,
      info: <div className="flex gap-8 items-start">
        <img className="hidden lg:block" src="../logos/logo-seiz-white.svg" alt="seiz-logo" />
        <div className="grid gap-4">
          <p>Processes and analyzes the doc</p>
          <p>Extracts pertinent information</p>
          <p>Empowers decision making process</p>
        </div>
      </div>,
    },
    {
      id: 4,
      info: <p className="lg:w-[380px]">Generate reports effortlessly, with the flexibility to personalize data in various formats.</p>
    }
  ];

  return (
    <article className="lg:h-[829px] grid lg:flex lg:p-0 p-8 gap-4">
      <img height={800} src="../images/seiz-howitworks.png" alt="howitworks" />
      <div className="grid gap-4 content-center">
        <h4 className="text-[14px] text-white tracking-[2.8px]">HOW IT WORKS</h4>
        <h1 className="font-integralCF lg:text-[40px] text-[28px] text-white mb-5 leading-[130%]">Forget about manual document processing</h1>
        <Stepper steps={steps} />
      </div>
    </article>
  );
};

export default HowitworksContent;
