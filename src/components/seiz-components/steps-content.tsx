const StepsContent = () => {
  const steps = [
    {
      id: 1,
      img: "../icons/seiz-read-icon.svg",
      name: "Read",
    },
    {
      id: 2,
      img: "../icons/seiz-interpret-icon.svg",
      name: "Interpret",
    },
    {
      id: 3,
      img: "../icons/seiz-decide-icon.svg",
      name: "Decide",
    },
    {
      id: 4,
      img: "../icons/seiz-report-icon.svg",
      name: "Report",
    }
  ];



  return (
    <article className="h-[410px] grid pt-[70px] pb-[72px]">
      <div className="grid gap-4 justify-items-center">
        <h1 className="font-integralCF text-[40px]">
          Save up to <span className="text-green600"> 60% </span> on costs and time spent on
        </h1>
        <div className="grid grid-flow-col items-center w-[956px]">
          {steps.map((step, index) => (
            <div key={step.id} className="grid grid-cols-2 items-center content-center">
              <div className="grid justify-items-center">
                <img src={step.img} alt="step" />
                <p className="text-[20px] font-jakartaSansRegular">{step.name}</p>
              </div>
              {
                index < steps.length - 1
                && (
                  <div className="grid items-center justify-items-center">
                    <img className="w-[60px]" src="../icons/multiple-arrows-icon.svg" alt="multiple-arrows" />
                  </div>
                )
              }
            </div>
          ))}
        </div>
      </div>

    </article>
  );
};

export default StepsContent;
