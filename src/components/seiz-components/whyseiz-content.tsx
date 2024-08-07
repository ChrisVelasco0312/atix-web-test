import { t } from "astro-i18n";

interface InfoLine {
  title: string
  description: string
}

const WhySeizContent = () => {
  const infoLines: InfoLine[] = [
    {
      title: t("seiz.whyseiz.steps.1.title"),
      description: t("seiz.whyseiz.steps.1.description")
    },
    {
      title: t("seiz.whyseiz.steps.2.title"),
      description: t("seiz.whyseiz.steps.2.description")
    },
    {
      title: t("seiz.whyseiz.steps.3.title"),
      description: t("seiz.whyseiz.steps.3.description")
    },
    {
      title: t("seiz.whyseiz.steps.4.title"),
      description: t("seiz.whyseiz.steps.4.description")
    }
  ];

  return (
    <article className="grid items-center lg:h-[471px] content-center gap-12 py-20 lg:py-0">
      <div className="flex gap-4 items-center content-center justify-center lg:pr-[100px]">
        <h1 className="font-integralCF lg:text-[40px] text-[28px]">{t("seiz.whyseiz.why")}</h1>
        <img className="w-[167px] h-[52px]" src="../../logos/logo-seiz-clean.svg" alt="logo" />
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
