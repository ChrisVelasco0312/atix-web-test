import Button from "./button";
import SectionTitle from "./section-title";

const AboutContent = () => {
  return (
    <article className="relative grid grid-cols-2 w-full">
      <SectionTitle
        title="ABOUT ATIX DIGITAL"
        iconColor="#1C7FC1"
        topDistance="54px"
      />
      <div />
      <div className="py-[119px]">
        <h1 className="font-integralCF text-purple500 text-[40px] leading-[98%]">
          We are proud to be solution oriented not problem oriented
        </h1>
        <Button
          style={{ marginTop: "40px" }}
          onClick={() => {}}
          text="Get to know us"
        />
      </div>
    </article>
  );
};

export default AboutContent;
