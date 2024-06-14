import Button from "./button";

const WelcomeContent = () => {
  return (
    <article className="grid grid-cols-2 w-full">
      <div />
      <div className="mt-[176px]">
        <h6 className="text-white mb-[10px] tracking-[2.8px]">
          WELCOME TO ATIX
        </h6>
        <h1 className="font-integralCF text-white text-[76px] leading-[98%]">
          SMART BUSINESS SOLUTIONS
        </h1>
        <p className="text-white text-[18px] mt-[26px] leading-[150%] w-[449px]">
          We digitize & automate administrative processes with modern
          technologies, to help you enhance the effectiveness of your
          organization{" "}
        </p>
        <Button
          style={{ marginTop: "40px" }}
          onClick={() => {}}
          text="Learn more"
        />
      </div>
    </article>
  );
};

export default WelcomeContent;
