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
    <div className="grid items-center grid-cols-[79.6px_1fr] gap-4 pl-4 pr-16 h-[115px] relative bg-white rounded-[16px]">
      <div className="grid place-items-center content-center w-[79.6px] h-[92.87px] rounded-[8px] bg-[#F1EFFC]">
        <h1 className="relative bottom-[6px] font-integralCF text-[70px] text-stroke-purple">
          {stepNumber}
        </h1>
      </div>
      <div>
        <h1 className="font-jakartaSansBold text-[24px]">
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
      stepTitle: "Upload your file or batch of documents",
      stepDescription: "In any file format"
    },
    {
      stepNumber: 2,
      stepTitle: "Create a template for Notery to analyze",
      stepDescription: "You'll be able to share it with your coworkers"
    },
    {
      stepNumber: 3,
      stepTitle: "Notery analyzes your documents",
      stepDescription: "Now Notery will read all your files"
    },
    {
      stepNumber: 4,
      stepTitle: "Download the extracted data",
      stepDescription: "In Excel, XLSX, or JSON formats"
    }
  ];

  return (
    <article className="h-[769px] grid grid-cols-2 content-center justify-items-center items-center">
      <div className="relative grid gap-[25px]">
        <div className="absolute w-[16px] h-[100%] bg-[#4E2370] left-[50px]" />
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
      <img src="images/notery-howitworks.png" alt="Notery How It Works" />
    </article>
  );
};

export default HowItWorksContent;
