import { t } from "astro-i18n";

const SinseizContent = () => {
  return (
    <article
      className="lg:h-[870px] h-[570px] overflow-hidden lg:overflow-visible lg:py-[50px]">
      <div className="lg:relative lg:bottom-[150px] grid items-center justify-items-center">
        <div className="place-self-start">
          <h1 className="lg:relative lg:top-[250px] lg:left-[30px] lg:w-[567px] font-integralCF lg:text-[40px] text-[28px] text-[#0E2B3D] leading-[120%] lg:p-0 p-8">
            {t("seiz.sinseiz.title1")}
            <span className="text-green600 block"> {t("seiz.sinseiz.title2")} </span>
            {t("seiz.sinseiz.title3")}
          </h1>
        </div>
        <div className="lg:relative block">
          <img
            className="lg:block hidden"
            src="../../images/sinseiz-image-full.png"
            alt="sinseiz-full"
          />
          <img
            className="lg:hidden relative left-[0px] bottom-[65px] lg:left-[64px] lg:top-[0px] lg:w-auto w-[393px]"
            src="../../images/sinseiz-graph-2.png"
            alt="graph-2"
          />
        </div>
      </div>
    </article>
  );
};

export default SinseizContent;
