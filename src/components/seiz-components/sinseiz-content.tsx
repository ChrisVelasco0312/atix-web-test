import { t } from "astro-i18n";

const SinseizContent = () => {
  return (
    <article
      className="relative lg:h-[870px] h-[583px] overflow-hidden lg:overflow-visible">
      <div className="lg:absolute left-[100px] top-[76px] lg:h-[870px]">
        <div className="lg:absolute top-[20px] left-[-200px]">
          <h1 className="lg:w-[567px] font-integralCF lg:text-[40px] text-[28px] text-[#0E2B3D] leading-[120%] lg:p-0 p-8">
            {t("seiz.sinseiz.title1")}
            <span className="text-green600 block"> {t("seiz.sinseiz.title2")} </span>
            {t("seiz.sinseiz.title3")}
          </h1>
        </div>
        <div className="lg:absolute lg:left-[230px] flex lg:w-[1198px] lg:h-[718px]">
          <img className="lg:block hidden absolute lg:top-[284px] lg:left-[-380px]" src="../images/sinseiz-graph-1.svg" alt="graph-1" />
          <img className="lg:absolute relative left-[0px] bottom-[65px] lg:right-[128px] lg:top-[0px] lg:w-auto w-[393px]" src="../images/sinseiz-graph-2.png" alt="graph-2" />
          <img className="lg:block hidden absolute right-[0px] bottom-[0px]" src="../images/sinseiz-graph-3.svg" alt="graph-3" />
        </div>
      </div>
    </article>
  );
};

export default SinseizContent;
