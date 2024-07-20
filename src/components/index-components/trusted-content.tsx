import SectionTitle from "../shared/section-title";
import TrustedStripCard from "./trusted-strip-card";

const trustedData = [
  {
    logoSrc: "logos/bayport-trusted.png",
    description: "<With SEIZ, we've achieved an average payroll collection of 85.88% in 2023>. 85% of our credit applications are now processed by SEIZ, <generating quick reports and reducing operational errors.>",
    info: {
      name: "Jorge Bernal",
      rol: "Credit and Portfolio Operations Manager",
      social: "@Bayport",
    },
  },
  {
    logoSrc: "logos/banco-w-trusted.png",
    description: "<SEIZ has allowed us to achieve a high processing speed.> Previously, we had a manual process requiring a team of 7 people to handle an average of 250 documents daily. Currently, <the processing of 1000 documents daily is managed by just 3 people.>",
    info: {
      name: "Rodrigo Jaramillo",
      rol: "Agreements and liabilities Coordinator",
      social: "@BancoW",
    },
  },
  {
    logoSrc: "logos/finesa-trusted.png",
    description: "<We've made significant improvements to our operational processes.> Integrating SEIZ has empowered us to compare information, enhance data quality, and streamline processing times.<As a result, our operation has grown 3X without requiring to modify our headcount.>",
    info: {
      name: "Diana Lucia Muñoz",
      rol: "Efficiency and Technology Manager",
      social: "@Finesa",
    },
  },
];

const TrustedContent = () => {
  return (
    <article className="relative grid">
      <SectionTitle
        title="TRUSTED BY THOUSANDS"
        topDistance="54px"
        iconColor="#1C7FC1"
      />
      <div className="grid justify-center gap-10 pt-[170px] pb-[150px]">
        <h1 className="font-integralCF text-purple500 lg:text-[40px] text-[28px] lg:text-center lg:w-auto w-[284px]">
          Read what our clients say about us
        </h1>
        <div className="grid lg:grid-flow-col gap-8 justify-items-center">
          {trustedData.map((item, index) => (
            <TrustedStripCard
              key={index}
              logoSrc={item.logoSrc}
              description={item.description}
              info={item.info}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default TrustedContent;
