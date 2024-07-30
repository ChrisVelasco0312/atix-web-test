import { useState } from "react";
import ElementSlider from "../shared/element-slider";

const DocumentDashboardCard = ({
  title,
  points
}: {
  title: string;
  points: string[]
}) => {
  return (
    <div className="grid gap-4 shadow-[2px_4px_20px_0px_rgba(181,199,21,0.15)] p-[38px]">
      <h1 className="font-integralCF text-[24px]">{title}</h1>
      <div className="w-[182px] h-[5px] bg-green600" />
      <ul>
        {
          points.map((point, index) => (
            <li className="flex items-center gap-3" key={index}>
              <img src="../icons/check-icon.svg" alt="check-icon" />
              {point}
            </li>
          ))
        }
      </ul>
    </div>
  );
};


const DocumentDashboardMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dashboardCards = [
    {
      title: "How Seiz helps companies in the Financial industry",
      points: [
        "Before, 100 decisions take 220 minutes. Now, with SEIZ, 100 decisions are made in just 1 minute!",
        "Over 1.5 billion documents processed, improving the banking liabilities process by 80%"
      ]
    },
    {
      title: "How Seiz helps companies in the Government industry",
      points: [
        "Generated over 200,000 payment orders for tax collection, impacting a portfolio worth 100 billion pesos"
      ]
    },
    {
      title: "How Seiz helps companies in the Insurance industry",
      points: [
        "521,000 transactions processed per month.",
        "Extracted and classified 8 million data fields from insurance policies, increasing placement rates by 60% for the commercial sector."
      ]
    }
  ];

  return (
    <div className="py-10">
      <ElementSlider
        customSize="h-[600px]"
        index={currentIndex}
        onNext={() => {
          if (currentIndex === dashboardCards.length - 1) {
            setCurrentIndex(0);
          } else {
            setCurrentIndex(currentIndex + 1);
          }
        }}
        onPrev={() => {
          if (currentIndex === 0) {
            setCurrentIndex(dashboardCards.length - 1);
          } else {
            setCurrentIndex(currentIndex - 1);
          }
        }}
      >
        <DocumentDashboardCard
          title={dashboardCards[currentIndex].title}
          points={dashboardCards[currentIndex].points}
        />
      </ElementSlider>
    </div>
  );
};

export default DocumentDashboardMobile;
