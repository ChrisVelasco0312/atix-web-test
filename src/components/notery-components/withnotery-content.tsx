import { t } from "astro-i18n";

const WithNoteryContent = () => {
  return (
    <article className="h-[316px] grid content-center justify-items-center">
      <h1 className="text-white lg:text-[24px] text-[16px] text-center lg:w-[900px]">
        {t("notery.withnotery.text1")}
        <span className="ml-4">
          <img className="inline relative bottom-[10px] lg:mt-0 mt-4" src="../../logos/logo-notery-white.svg" alt="Notery Logo" />
        </span>
        <strong className="lg:text-[24px] text-[20px] lg:inline block">{t("notery.withnotery.text2")}</strong> {t('notery.withnotery.text3')}</h1>
    </article>
  );
};

export default WithNoteryContent;
