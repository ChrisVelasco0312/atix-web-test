import type React from "react";

interface Step {
  id: number;
  info: React.JSX.Element;
}


const Stepper = ({ steps }: { steps: Step[] }) => {
  return (
    <div className="relative text-white grid gap-4">
      <div className="absolute left-[20px] z-1 h-[90%] w-[1px] bg-white"></div>
      {steps.map((step) => (
        <div key={step.id} className="grid grid-cols-[40px_1fr] gap-4 relative z-2 items-center">
          <div className="w-[40px] h-[40px] bg-[#B5C715] font-jakartaSansBold rounded-full flex justify-center items-center">
            {step.id}
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
      info: <div className="flex gap-8">
        <img src="logos/logo-seiz-white.svg" alt="seiz-logo" />
        <div>
          <p>Processes and analyzes the doc</p>
          <p>Extracts pertinent information</p>
          <p>Empowers decision making process</p>
        </div>
      </div>,
    },
    {
      id: 4,
      info: <p>Generate reports effortlessly, with the flexibility to personalize data in various formats.</p>
    }
  ];

  return (
    <article className="h-[829px] flex">
      <img height={800} src="/images/seiz-howitworks.png" alt="howitworks" />
      <div className="grid gap-4 content-center">
        <h4 className="text-[14px] text-white tracking-[2.8px]">HOW IT WORKS</h4>
        <h1 className="font-integralCF text-[40px] text-white">Forget about manual document processing</h1>
        <Stepper steps={steps} />
      </div>
    </article>
  );
};

export default HowitworksContent;
