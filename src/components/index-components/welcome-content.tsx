import { useViewportInfo } from "../hooks/useViewportInfo";
import Button from "../shared/button";
import { t, astroI18n } from "astro-i18n";

const WelcomeContent = () => {
  const locale = astroI18n.locale;
  const { width } = useViewportInfo();
  const isMobile = width < 1024;

  const showLine2 = (locale === "en") || (locale === "es" && !isMobile);

  return (
    <article className="grid lg:grid-cols-2 w-full content-center h-[100%]">
      <div />
      <div className="relative lg:p-0">
        <h6 className="text-white mb-[10px] tracking-[2.8px]">
          {t("index.welcome.title")}
        </h6>
        <h1
          className="absolute text-stroke-white opacity-20 lg:left-[10px] left-[5px] lg:top-[38px] font-integralCF text-white lg:text-[76px] leading-[98%]"
          style={{
            fontSize: isMobile ? "clamp(38px, 12vw, 52px)" : "76px",
          }}
        >
          {t("index.welcome.slogan.line1")}
          <br className={showLine2 ? "" : "hidden"} />
          {showLine2 ? t("index.welcome.slogan.line2") : ""}
          <br />
          {t("index.welcome.slogan.line3")}
        </h1>
        <h1
          className="relative z-10 font-integralCF text-white lg:text-[76px] leading-[98%]"
          style={{
            fontSize: isMobile ? "clamp(38px, 12vw, 52px)" : "76px",
          }}
        >
          {t("index.welcome.slogan.line1")}
          <br className={showLine2 ? "" : "hidden"} />
          {showLine2 ? t("index.welcome.slogan.line2") : ""}
          <br />
          {t("index.welcome.slogan.line3")}
        </h1>
        <p className="text-white lg:text-[18px] mt-[26px] leading-[150%] lg:w-[449px]">
          {t('index.welcome.description')}{" "}
        </p>
        <Button style={{ marginTop: "40px" }} text={t('index.welcome.learnMore')} />
      </div>
    </article>
  );
};

export default WelcomeContent;
