import SectionTitle from "../shared/section-title";

const InitialContent = () => {
  return (
    <article className="">
      <div className="relative grid gap-6 mt-[252px]">
        <div>
          <h1 className="inline-block text-[76px] font-integralCF text-white">
            ABOUT
          </h1>
          <h1 className="inline-block text-[76px] font-integralCF text-white">
            &nbsp;ATIX DIGITAL
          </h1>
          <h1 className="absolute left-[283px] top-[-3px] inline-block text-[76px] font-integralCF text-white text-stroke-white opacity-10">
            &nbsp;ATIX DIGITAL
          </h1>
        </div>
        <p className="text-[24px] text-white w-[812px]">
          We are a dynamic team that combines expertise in process automation,
          digital transformation, and innovative technology solutions.
        </p>
      </div>
      <div className="relative h-[593px] mt-[93px] grid grid-cols-2 items-center content-center">
        <SectionTitle title="WHO WE ARE" iconColor="#00B1C6" />
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
    </article>
  );
};

export default InitialContent;
