import Button from "../shared/button";

const WelcomeContent = () => {
  return (
    <article className="grid lg:grid-cols-2 w-full content-center h-[90%]">
      <div />
      <div className="relative lg:p-0">
        <h6 className="text-white mb-[10px] tracking-[2.8px]">
          WELCOME TO ATIX
        </h6>
        {/*ADD OUTLINE*/}
        <h1
          className="absolute text-stroke-white opacity-20 lg:left-[10px] left-[5px] lg:top-[38px] font-integralCF text-white lg:text-[76px] text-[52px] leading-[98%]"
        >
          SMART <br /> BUSINESS <br /> SOLUTIONS
        </h1>
        <h1
          className="relative z-10 font-integralCF text-white lg:text-[76px] text-[52px] leading-[98%]"
        >
          SMART <br /> BUSINESS <br /> SOLUTIONS
        </h1>
        <p className="text-white text-[18px] mt-[26px] leading-[150%] lg:w-[449px] w-[350px]">
          We digitize & automate administrative processes with modern
          technologies, to help you enhance the effectiveness of your
          organization{" "}
        </p>
        <Button style={{ marginTop: "40px" }} text="Learn more" />
      </div>
    </article>
  );
};

export default WelcomeContent;
