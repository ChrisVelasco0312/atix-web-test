import { useState } from "react";
import ElementSlider from "../shared/element-slider";
import SectionTitle from "../shared/section-title";
import TrustedStripCard from "./trusted-strip-card";
import { t } from "astro-i18n";

const trustedData = [
  {
    logoSrc: "../../logos/bayport-trusted.png",
    description: t("index.trusted.card1.text"),
    info: {
      name: "Jorge Bernal",
      rol: t("index.trusted.card1.role"),
      social: "@Bayport",
    },
  },
  {
    logoSrc: "../../logos/banco-w-trusted.png",
    description: t("index.trusted.card2.text"),
    info: {
      name: "Rodrigo Jaramillo",
      rol: t("index.trusted.card2.role"),
      social: "@BancoW",
    },
  },
  {
    logoSrc: "../../logos/finesa-trusted.png",
    description: t("index.trusted.card3.text"),
    info: {
      name: "Diana Lucia Muñoz",
      rol: t("index.trusted.card3.role"),
      social: "@Finesa",
    },
  },
];

const TrustedContent = () => {
  const [index, setIndex] = useState(0);
  return (
    <article className="relative grid h-[856px]">
      <SectionTitle
        title={t("index.trusted.sectionText")}
        topDistance="54px"
        iconColor="#1C7FC1"
      />
      <div className="grid grid-rows-[auto_600px] justify-center justify-items-center items-center lg:gap-10 lg:pt-[170px] lg:pb-[150px]">
        <h1 className="font-integralCF text-purple500 lg:text-[40px] text-[28px] text-center lg:w-auto w-[284px] lg:self-start self-end">
          {t("index.trusted.title")}
        </h1>
        <div className="lg:grid hidden lg:grid-flow-col gap-8 justify-items-center">
          {trustedData.map((item, index) => (
            <TrustedStripCard
              key={index}
              logoSrc={item.logoSrc}
              description={item.description}
              info={item.info}
            />
          ))}
        </div>
        <div className="lg:hidden grid lg:grid-flow-col gap-8 justify-items-center overflow-hidden h-[550px]">
          <ElementSlider
            index={index}
            customSize="w-[340px]"
            onNext={() => {
              if (index < trustedData.length - 1) {
                setIndex(index + 1);
              } else {
                setIndex(0);
              }
            }}
            onPrev={() => {
              if (index > 0) {
                setIndex(index - 1);
              } else {
                setIndex(trustedData.length - 1);
              }
            }}
          >
            <TrustedStripCard
              logoSrc={trustedData[index].logoSrc}
              description={trustedData[index].description}
              info={trustedData[index].info}
            />
          </ElementSlider>
        </div>
      </div>
    </article>
  );
};

export default TrustedContent;
