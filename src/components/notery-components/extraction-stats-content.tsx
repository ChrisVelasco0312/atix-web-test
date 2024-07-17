import React from "react";
import { useState } from "react";

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
  const [currentImage, setCurrentImage] = useState("notery-extract-1.png");

  const handleImageChange = (imageId: string) => {
    setCurrentImage(imageId);
  };

  const getTextColor = (imageId: string) => {
    return currentImage === imageId ? "text-[#272443]" : "text-[#C4C4C4]";
  };

  const stats = [
    {
      statNumber: "36K",
      statDescription: (
        <p className="w-[295px]">
          Processes <span className="text-[#583277]">over 36,000 documents</span> per month, regardless of their format.
        </p>
      )
    },
    {
      statNumber: "200",
      statDescription: (
        <p className="w-[205px]">
          Processes over <span className="text-[#583277]">200 documents</span> per minute
        </p>
      )
    },
    {
      statNumber: "500K",
      statDescription: (
        <p className="w-[220px]">
          Contributed in more than <span className="text-[#583277]">500,000 decisions</span> in two years
        </p>
      )
    },
    {
      statNumber: "98%",
      statDescription: (
        <p><span className="text-[#583277]">Accuracy beyond</span> 98%</p>
      )
    }
  ];

  return (
    <article className="h-[1130px] grid justify-items-center content-center gap-8">
      <div className="grid grid-cols-2 content-center items-center">
        <div className="relative leading-[450%] text-right right-[200px]">
          <h2 className="relative text-[30px] leading-[130%]">Extract any type of data</h2>
          <h1
            onClick={() => handleImageChange("notery-extract-1.png")}
            className={`font-integralCF text-[64px] cursor-pointer transition-colors duration-300 ${getTextColor("notery-extract-1.png")}`}
          >
            TABLES
          </h1>
          <h1
            onClick={() => handleImageChange("notery-extract-2.png")}
            className={`font-integralCF text-[64px] cursor-pointer transition-colors duration-300 ${getTextColor("notery-extract-2.png")}`}
          >
            TEXTS
          </h1>
          <h1
            onClick={() => handleImageChange("notery-extract-3.png")}
            className={`font-integralCF text-[64px] cursor-pointer transition-colors duration-300 ${getTextColor("notery-extract-3.png")}`}
          >
            IMAGES
          </h1>
          <h2 className="text-[30px]">in seconds!</h2>
        </div>
        <img
          className="relative max-w-none right-[200px] transition-opacity duration-300 ease-in-out"
          src={`../images/${currentImage}`}
          alt="Notery Extraction"
        />
      </div>
      <div className="relative flex gap-10 items-center justify-center w-[1218.773px] h-[206px] bg-white rounded-[16px] filter drop-shadow-[0_1px_15px_rgba(0,0,0,0.08)]">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <Stat
              statNumber={stat.statNumber}
              statDescription={stat.statDescription}
            />
            {index !== stats.length - 1 && <img src="../images/notery-stats-divider.svg" alt="Notery Stats Separator" />}
          </React.Fragment>
        ))}
      </div>
    </article>
  );
};

export default ExtractionStatsContent;
