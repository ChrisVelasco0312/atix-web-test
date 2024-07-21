const WelcomeSeizContent = () => {
  return (
    <article className="grid lg:grid-cols-2 items-center lg:h-[85vh] lg:p-0 p-8">
      <div className="flex flex-col gap-4">
        <img className="w-[161px] lg:h-[42.393px]" src="../logos/logo-seiz-white.svg" alt="logo" />
        <h1 className="font-integralCF text-white text-[40px] leading-[140%]">
          easily automate
          <span className="block text-[#B5C715]">
            any document
          </span>
          processing workflow
        </h1>
        <p className="text-white lg:text-[18px] font-jakartaSansRegular lg:w-[600px]">
          Boost efficiencies, unlock savings, and streamline operations with
          seamless AI-powered document workflow automation.
        </p>
      </div>
      <img
        className="lg:w-auto w-[360px]"
        src="../images/seiz-example-hero.svg"
        alt="hero"
      />
    </article>
  );
};

export default WelcomeSeizContent;
