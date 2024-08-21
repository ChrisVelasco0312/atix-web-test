import { useViewportInfo } from "../hooks/useViewportInfo";
import Button from "../shared/button";
import { t } from "astro-i18n";

const MagicalContent = () => {
  const { width } = useViewportInfo();
  return (
    <div className="h-[409px] lg:px-[100px] grid lg:grid-flow-col items-center justify-items-center lg:justify-items-start content-center lg:gap-0 gap-[45px]">
      <div className="grid font-integralCF lg:text-[64px] text-[40px] leading-[1.2em] xs:items-center">
        <h1 className="p-0 m-0 text-white">
          {t("index.magical.line1")}
        </h1>
        <h1 className="lg:pl-[118px] m-0 text-white">
          {t("index.magical.line2")}
        </h1>
        <h1
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            background: width < 768 ?
              "linear-gradient(90deg, #FFF 0%, #B5C715 34.98%, #11AADF 100.26%, #242459 90%)" :
              "linear-gradient(90deg, #FFF 23.8%, #B5C715 34.98%, #11AADF 100.26%, #242459 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="lg:pl-[336px]"
        >
          {t("index.magical.line3")}
        </h1>
      </div>
      <Button
        style={{ width: "200px" }}
        text="Drop us a line"
        styleType="outline-white"
        goTo="/contact"
      />
    </div>
  );
};

export default MagicalContent;
