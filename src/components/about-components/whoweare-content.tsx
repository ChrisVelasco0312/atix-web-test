import SectionTitle from "../shared/section-title";

const WhoWeAreContent = () => {
  return (
    <div id="whoweare" className="relative lg:h-[593px] h-[568px] grid lg:grid-cols-2 lg:gap-0 gap-4 items-center content-center justify-items-center">
      <SectionTitle title="WHO WE ARE" iconColor="#00B1C6" topDistance="70px" />
      <img
        className="relative lg:ml-[100px] lg:w-[239px] lg:h-[99px]"
        src="../logos/logo-atix-dark.svg"
        alt="logo"
      />
      <div className="grid gap-4 lg:text-[20px] lg:text-left text-center ">
        <p>
          Atix Digital is a technology company dedicated to
          transforming processes through <span className="font-jakartaSansBold text-[#9ADD19]">digital automation</span>
          <span className="font-jakartaSansBold text-[#9ADD19]">and modern technologies.</span>
        </p>
        <p>
          We empower organizations to achieve <span className="font-jakartaSansBold text-[#25255C]">greater</span>
          <span className="font-jakartaSansBold text-[#25255C]">efficiency and productivity</span> by reimagining workflows
          and implementing intelligent solutions.
        </p>
        <p>
          We are committed to <span className="font-jakartaSansBold text-[#00B1C6]">driving innovation and</span> <br />
          <span className="font-jakartaSansBold text-turquesa500">excellence</span>, helping businesses navigate the <br />
          complexities of digital transformation.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAreContent;
