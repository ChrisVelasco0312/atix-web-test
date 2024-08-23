import { t, astroI18n } from "astro-i18n";
import { useViewportInfo } from "../hooks/useViewportInfo";

const WelcomeSeizContent = () => {
  const locale = astroI18n.locale;
  const { width } = useViewportInfo();
  const isMobile = width < 1024;

  return (
    <article className="grid lg:grid-cols-2 items-center lg:h-[85vh] h-[956px] lg:p-0 p-8">
      <div className="flex flex-col gap-4 lg:mt-0 mt-[42px]">
        <img
          className="w-[105px] h-[30px] lg:w-[161px] lg:h-[42.393px]"
          src="../../logos/logo-seiz-white.svg"
          alt="logo"
        />
        <h1
          style={{ fontSize: isMobile ? "clamp(36px, 8vw, 40px)" : "40px" }}
          className="font-integralCF text-white lg:leading-[140%] leading-[120%]">
          {t("seiz.welcome.line1")}
          <span className="lg:block inline text-[#B5C715]">
            {" "}{t("seiz.welcome.line2")}
          </span>
          {" "}{locale !== "es" ? t("seiz.welcome.line3") : ""}
        </h1>
        <p className="text-white lg:text-[18px] font-jakartaSansRegular lg:w-[600px]">
          {t("seiz.welcome.description")}
        </p>
      </div>
      <img
        className="lg:w-auto lg:scale-100 scale-[1.2]"
        src="../../images/seiz-example-hero.svg"
        alt="hero"
      />
    </article>
  );
};

export default WelcomeSeizContent;
