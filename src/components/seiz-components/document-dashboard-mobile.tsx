import { useState } from "react";
import ElementSlider from "../shared/element-slider";
import { t } from "astro-i18n";

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
              <img src="../../icons/check-icon.svg" alt="check-icon" />
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
      title: t("seiz.document.finance.title"),
      points: [
        t("seiz.document.finance.points.1"),
        t("seiz.document.finance.points.2")
      ]
    },
    {
      title: t("seiz.document.government.title"),
      points: [
        t("seiz.document.government.points.1")
      ]
    },
    {
      title: t("seiz.document.insurance.title"),
      points: [
        t("seiz.document.insurance.points.1"),
        t("seiz.document.insurance.points.2"),
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
