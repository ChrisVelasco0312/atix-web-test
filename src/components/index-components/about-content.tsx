import Button from "../shared/button";
import SectionTitle from "../shared/section-title";

const AboutContent = () => {
  return (
    <article className="relative grid lg:grid-cols-2 content-center w-full lg:h-[420px] h-[636px]">
      <SectionTitle
        title="ABOUT ATIX DIGITAL"
        iconColor="#1C7FC1"
        topDistance="54px"
      />
      <div />
      <div className="w-[341px] lg:w-[606px] lg:h-[147px]">
        <h1 className="font-integralCF text-purple500 lg:text-[40px] text-[28px] lg:leading-[98%] leading-[115%]">
          We are proud to be solution-oriented, problem-oriented
        </h1>
        <Button style={{ marginTop: "40px" }} text="Get to know us" />
      </div>
    </article>
  );
};

export default AboutContent;
