import { t } from "astro-i18n";

const WelcomeSeizContent = () => {
  return (
    <article className="grid lg:grid-cols-2 items-center lg:h-[85vh] h-[956px] lg:p-0 p-8">
      <div className="flex flex-col gap-4">
        <img className="w-[105px] h-[30px] lg:w-[161px] lg:h-[42.393px]" src="../../logos/logo-seiz-white.svg" alt="logo" />
        <h1 className="font-integralCF text-white text-[40px] lg:leading-[140%] leading-[120%]">
          {t("seiz.welcome.line1")}
          <span className="block text-[#B5C715]">
            {t("seiz.welcome.line2")}
          </span>
          {t("seiz.welcome.line3")}
        </h1>
        <p className="text-white lg:text-[18px] font-jakartaSansRegular lg:w-[600px]">
          {t("seiz.welcome.description")}
        </p>
      </div>
      <img
        className="lg:w-auto w-[360px]"
        src="../../images/seiz-example-hero.svg"
        alt="hero"
      />
    </article>
  );
};

export default WelcomeSeizContent;
