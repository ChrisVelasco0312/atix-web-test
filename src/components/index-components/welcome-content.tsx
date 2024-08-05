import Button from "../shared/button";
import { t } from "astro-i18n";

const WelcomeContent = () => {
  return (
    <article className="grid lg:grid-cols-2 w-full content-center h-[90%]">
      <div />
      <div className="relative lg:p-0">
        <h6 className="text-white mb-[10px] tracking-[2.8px]">
          {t("index.welcome.title")}
        </h6>
        {/*ADD OUTLINE*/}
        <h1
          className="absolute text-stroke-white opacity-20 lg:left-[10px] left-[5px] lg:top-[38px] font-integralCF text-white lg:text-[76px] text-[52px] leading-[98%]"
        >
          {t("index.welcome.slogan.line1")} <br /> {t("index.welcome.slogan.line2")} <br /> {t("index.welcome.slogan.line3")}
        </h1>
        <h1
          className="relative z-10 font-integralCF text-white lg:text-[76px] text-[52px] leading-[98%]"
        >
          {t("index.welcome.slogan.line1")} <br /> {t("index.welcome.slogan.line2")} <br /> {t("index.welcome.slogan.line3")}
        </h1>
        <p className="text-white text-[18px] mt-[26px] leading-[150%] lg:w-[449px]">
          {t('index.welcome.description')}{" "}
        </p>
        <Button style={{ marginTop: "40px" }} text={t('index.welcome.learnMore')} />
      </div>
    </article>
  );
};

export default WelcomeContent;
