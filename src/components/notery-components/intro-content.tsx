const IntroContent = () => {
  return (
    <>
      <div
        className="lg:block hidden absolute top-0 bottom-0 left-0 right-0"
        style={{
          backgroundImage: "url(../images/notery-intro.png)",
          backgroundSize: "65%",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "120%",
          backgroundPositionY: "50%",
          pointerEvents: "none"
        }}
      >
      </div>
      <article
        className="relative w-full lg:h-screen h-[960px] grid lg:grid-cols-2 content-center items-center justify-center pl-[20px] lg:p-0"
      >
        <div className="grid gap-4">
          <img className="w-[170px] lg:w-auto" src="../logos/logo-notery-white.svg" alt="Notery Logo" />
          <div className="grid gap-4 text-white">
            <h1 className="font-integralCF text-[40px] lg:w-auto w-[90%]">
              <span className="text-purple600">the hero</span> who reads <br className="hidden lg:block" />
              and makes up to <span className="text-purple600">200</span> <br className="hidden lg:block" />
              <span className="text-purple600">DECISIONS</span> PeR MINUTe
            </h1>
            <p className="text-[18px] lg:w-[465px] w-[98%]">
              Conquer the document chaos and achieve maximum efficiency
              with a digital administrative assistant by your side!
            </p>
          </div>
          <img className="lg:hidden block" src="../images/notery-intro.png" alt="Notery Intro" />
        </div>
      </article>
    </>
  );
};

export default IntroContent;
