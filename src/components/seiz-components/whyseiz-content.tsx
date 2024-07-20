
interface InfoLine {
  title: string
  description: string
}

const WhySeizContent = () => {
  const infoLines: InfoLine[] = [
    {
      title: "REDUCE",
      description: "turnaround time"
    },
    {
      title: "150M+",
      description: "documents processed"
    },
    {
      title: "99%",
      description: "extraction accuracy"
    },
    {
      title: "5 TO 15 SECS",
      description: "to process a document"
    }
  ];

  return (
    <article className="grid items-center lg:h-[471px] h-[814px] content-center gap-12">
      <div className="flex gap-4 items-center content-center justify-center lg:pr-[100px]">
        <h1 className="font-integralCF  text-[40px]">WHY</h1>
        <img className="w-[167px] h-[52px]" src="../logos/logo-seiz-clean.svg" alt="logo" />
      </div>
      <div className="lg:flex grid lg:gap-[95px] gap-8 items-center justify-center justify-items-center">
        {
          infoLines.map((infoLine, index) => (
            <>
              <div className="grid gap-[15px] text-center">
                <h1 className="font-integralCF text-green600 text-[40px]">{infoLine.title}</h1>
                <p>{infoLine.description}</p>
              </div>
              {index !== infoLines.length - 1 && <div className="lg:w-[1px] w-[200px] h-[1px] lg:h-[200px] bg-gray300" />}
            </>
          ))
        }
      </div>
    </article>
  );
};

export default WhySeizContent;
