const IntroContent = () => {
  return (
    <article
      className="relative h-[830px] w-full grid grid-cols-2 content-center items-center justify-center"
    >
      <div className="grid gap-4">
        <img src="logos/logo-notery-white.svg" alt="Notery Logo" />
        <div className="grid gap-4 text-white">
          <h1 className="font-integralCF text-[40px]">
            <span className="text-purple600">the hero</span> who reads <br />
            and makes up to <span className="text-purple600">200</span> <br />
            <span className="text-purple600">DECISIONS</span> PeR MINUTe
          </h1>
          <p className="text-[18px] w-[465px]">
            Conquer the document chaos and achieve maximum efficiency
            with a digital administrative assistant by your side!
          </p>
        </div>
      </div>
      {/*
      <img className="absolute right-[-150px]" src="images/notery-intro.png" alt="Notery Hero" />
      */}
    </article>
  );
};

export default IntroContent;
