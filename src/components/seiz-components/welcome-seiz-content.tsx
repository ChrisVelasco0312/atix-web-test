const WelcomeSeizContent = () => {
  return (
    <article className="grid grid-cols-2 items-center h-[85vh]">
      <div className="flex flex-col gap-4">
        <img className="w-[161px] h-[42.393px]" src="logos/logo-seiz-white.svg" alt="logo" />
        <h1 className="font-integralCF text-white text-[40px] leading-[140%]">
          easily automate
          <span className="block text-[#B5C715]">
            any document
          </span>
          processing workflow
        </h1>
        <p className="text-white text-[18px] font-jakartaSansRegular w-[600px]">
          Boost efficiencies, unlock savings, and streamline operations with
          seamless AI-powered document workflow automation.
        </p>
      </div>
      <img src="images/seiz-example-hero.svg" alt="hero" />
    </article>
  );
};

export default WelcomeSeizContent;
