import type React from "react";

const Stat = ({
  statNumber,
  statDescription
}: {
  statNumber: string,
  statDescription: React.JSX.Element
}) => {
  return (
    <div className="grid grid-rows-[70px_1fr] h-[140px] items-center content-center justify-items-center">
      <h1 className="font-integralCF text-[40px]">{statNumber}</h1>
      <div className="text-[#7D7D7D] text-[18px] text-center max-w-[280px]">
        {statDescription}
      </div>
    </div>
  );
};

const ExtractionStatsContent = () => {

  const stats = [
    {
      statNumber: "36K",
      statDescription: (
        <p>Processes <span className="text-[#583277]">over 36,000 documents</span> per month, regardless of their format.</p>
      )
    },
    {
      statNumber: "200",
      statDescription: (
        <p>Processes over 200 documents per minute</p>
      )
    },
    {
      statNumber: "500K",
      statDescription: (
        <p>Contributed in more than 500,000 decisions in two years</p>
      )
    },
    {
      statNumber: "98%",
      statDescription: (
        <p>Accuracy beyond 98%</p>
      )
    }
  ];


  return (
    <article className="h-[1130px] grid content-center justify-items-center">
      <div className="grid grid-cols-2 w-[100%]">
        <div className="leading-[450%] text-right mr-[100px]">
          <h2 className="realative text-[30px] leading-[130%]">Extract any type of data</h2>
          <h1 className="font-integralCF text-[64px] text-[#C4C4C4]">TABLES</h1>
          <h1 className="font-integralCF text-[64px] text-[#C4C4C4]">TEXTS</h1>
          <h1 className="font-integralCF text-[64px] text-[#272443]">IMAGES</h1>
          <h2 className="text-[30px]">in seconds!</h2>
        </div>
        <div></div>
      </div>
      <div className="relative flex gap-4 items-center justify-center top-[200px] w-[1218.773px] h-[206px] bg-white rounded-[16px] filter drop-shadow-[0_1px_15px_rgba(0,0,0,0.08)]">
        {
          stats.map((stat, index) => {
            return (
              <>
                <Stat
                  key={index}
                  statNumber={stat.statNumber}
                  statDescription={stat.statDescription}
                />
                {index !== stats.length - 1 ? <img src="images/notery-stats-divider.svg" alt="Notery Stats Separator" /> : null}
              </>
            );
          })
        }
      </div>
    </article>
  );
};

export default ExtractionStatsContent;
