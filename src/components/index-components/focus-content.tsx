import FocusCard from "./focus-card";
import SectionTitle from "../shared/section-title";

const FocusContent = () => {
  return (
    <div className="relative grid grid-cols-2 px-[30px]">
      <SectionTitle title="OUR FOCUS" iconColor="#1C7FC1" topDistance="54px" />
      <div className="grid gap-20">
        <h1 className="font-integralCF text-purple500 text-[40px] leading-[98%] mt-[222px] w-[600px]">
          When Intelligent Tech Meets Business Process
        </h1>
        <div className="grid">
          <FocusCard
            open={true}
            title="MACHINE LEARNING"
            descriptionStrong="Harness the power of Data Intelligence!"
            description="Using cutting-edge machine learning algorithms, we extract valuable
            insights from your data. Empower your business to make smart and
            accurate decisions with predictive analytics.
            "
            iconSrc="icons/machine-learning-icon.svg"
          />
          <FocusCard
            open={false}
            title="USER EXPERIENCE"
            descriptionStrong=""
            description=""
            iconSrc="icons/user-experience-icon.svg"
          />
          <FocusCard
            open={false}
            title="RESEARCH"
            descriptionStrong=""
            description=""
            iconSrc="icons/research-icon.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FocusContent;
