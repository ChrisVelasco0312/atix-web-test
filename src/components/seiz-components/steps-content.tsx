import { useViewportInfo } from "../hooks/useViewportInfo";

const StepsContent = () => {

  const { width } = useViewportInfo();
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
    <article className="lg:h-[410px] grid pt-[70px] pb-[72px]">
      <div className="grid gap-4 justify-items-center">
        <h1 className="font-integralCF lg:text-[40px] text-[28px] lg:text-left text-center lg:w-auto w-[308px]">
          Save up to <span className="text-green600"> 60% </span> on costs and time spent on
        </h1>
        <div className="lg:grid flex flex-wrap lg:grid-flow-col items-center justify-center lg:w-[956px]">
          {steps.map((step, index) => (
            <div key={step.id} className={`grid ${index % 2 === 0 && width < 440 ? 'grid-cols-2' : 'lg:grid-cols-2'} items-center content-center`}>
              <div className="grid justify-items-center">
                <img className="lg:w-auto w-[90px]" src={step.img} alt="step" />
                <p className="text-[20px] font-jakartaSansRegular">{step.name}</p>
              </div>
              {
                index % 2 === 0 && width < 440
                && (
                  <div className="grid items-center justify-items-center">
                    <img className="w-[60px]" src="../icons/multiple-arrows-icon.svg" alt="multiple-arrows" />
                  </div>
                )
              }
              {
                index < steps.length - 1 && width > 440
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
