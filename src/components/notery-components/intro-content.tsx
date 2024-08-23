import { t } from "astro-i18n";

const IntroContent = () => {
  return (
    <>
      <div
        className="lg:block hidden absolute top-0 bottom-0 left-0 right-0"
        style={{
          backgroundImage: "url(../../images/notery-intro.png)",
          backgroundSize: "65%",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "120%",
          backgroundPositionY: "50%",
          pointerEvents: "none"
        }}
      >
      </div>
      <article
        className="relative w-full lg:h-screen h-[960px] grid lg:grid-cols-2 content-center items-center justify-center pl-[20px] lg:p-0"
      >
        <div className="grid gap-4 lg:relative lg:bottom-[100px] 2xl:right-[30px]">
          <img className="w-[170px] lg:w-auto" src="../../logos/logo-notery-white.svg" alt="Notery Logo" />
          <div className="grid gap-4 text-white">
            <h1 className="font-integralCF text-[40px] lg:w-auto w-[90%] lg:leading-normal leading-[140%]">
              <span className="text-purple600">{t("notery.intro.title1")}</span> {t("notery.intro.title2")} <br className="hidden lg:block" />
              {t("notery.intro.title3")} <span className="text-purple600">{t("notery.intro.title4")}</span> <br className="hidden lg:block" />
              <span className="text-purple600">{t("notery.intro.title5")}</span> {t("notery.intro.title6")}
            </h1>
            <p className="lg:text-[18px] lg:w-[465px] w-[98%]">
              {t("notery.intro.description")}
            </p>
          </div>
          <img
            className="lg:hidden block relative top-[11%] scale-[1.08]"
            src="../../images/notery-intro.png"
            alt="Notery Intro"
          />
        </div>
      </article>
    </>
  );
};

export default IntroContent;
