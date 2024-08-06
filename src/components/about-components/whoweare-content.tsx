import SectionTitle from "../shared/section-title";
import { t } from "astro-i18n";

const WhoWeAreContent = () => {
  return (
    <div id="whoweare" className="relative lg:h-[593px] h-[568px] grid lg:grid-cols-2 lg:gap-0 gap-4 items-center content-center justify-items-center">
      <SectionTitle title={t("about.whoweare.sectionText")} iconColor="#00B1C6" topDistance="70px" />
      <img
        className="relative lg:ml-[100px] lg:w-[239px] lg:h-[99px]"
        src="../logos/logo-atix-dark.svg"
        alt="logo"
      />
      <div className="grid gap-4 lg:text-[20px] lg:text-left text-center ">
        <p>
          {t("about.whoweare.paragraph1.line1")}
          <span className="font-jakartaSansBold text-[#9ADD19]">
            {" "}{t("about.whoweare.paragraph1.spanLine1")}
          </span>
        </p>
        <p>
          {t("about.whoweare.paragraph2.line1")}
          <span className="font-jakartaSansBold text-[#25255C]">
            {" "}{t("about.whoweare.paragraph2.spanLine1")}
          </span>
          {" "}{t("about.whoweare.paragraph2.line2")}
        </p>
        <p>
          {t("about.whoweare.paragraph3.line1")}
          <span className="font-jakartaSansBold text-[#00B1C6]">
            {" "}{t("about.whoweare.paragraph3.spanLine1")}
          </span>,
          {" "}{t("about.whoweare.paragraph3.line2")}
        </p>
      </div>
    </div>
  );
};

export default WhoWeAreContent;
