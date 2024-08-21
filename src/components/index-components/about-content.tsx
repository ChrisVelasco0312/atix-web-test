import Button from "../shared/button";
import SectionTitle from "../shared/section-title";
import { t } from "astro-i18n";

const AboutContent = () => {
  return (
    <article className="relative grid lg:grid-cols-2 content-center w-full lg:h-[420px] h-[555px]">
      <SectionTitle
        title={t("index.about.sectionText")}
        iconColor="#1C7FC1"
        topDistance="54px"
      />
      <div />
      <div className="relative top-[38px] w-[330px] lg:w-[606px] lg:h-[147px]">
        <h1 className="font-integralCF text-purple500 lg:text-[40px] text-[28px] lg:leading-[98%] leading-[115%]">
          {t("index.about.title")}
        </h1>
        <Button style={{ marginTop: "40px" }} text={t("index.about.button")} />
      </div>
    </article>
  );
};

export default AboutContent;
