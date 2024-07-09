import SectionTitle from "../shared/section-title";

const WhoWeAreContent = () => {
  return (
    <div id="whoweare" className="relative h-[593px] grid grid-cols-2 items-center content-center">
      <SectionTitle title="WHO WE ARE" iconColor="#00B1C6" topDistance="70px" />
      <img className="relative ml-[100px]" src="logos/logo-atix-dark.svg" width={239} height={99} alt="logo" />
      <div className="grid gap-4 text-[20px]">
        <p>
          Atix Digital is a technology company dedicated to <br />
          transforming processes through <span className="font-jakartaSansBold text-[#9ADD19]">digital automation</span> <br />
          <span className="font-jakartaSansBold text-[#9ADD19]">and modern technologies.</span>
        </p>
        <p>
          We empower organizations to achieve <span className="font-jakartaSansBold text-[#25255C]">greater</span> <br />
          <span className="font-jakartaSansBold text-[#25255C]">efficiency and productivity</span> by reimagining workflows <br />
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
