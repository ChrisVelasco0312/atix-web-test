const Stepper = () => {
  return (
    <div className="relative text-white grid gap-4">
      <div className="absolute left-[20px] z-1 h-full w-[1px] bg-white"></div>
      <div className="flex gap-8 relative z-2 items-center">
        <div className="w-[40px] h-[40px] bg-[#B5C715] font-jakartaSansBold rounded-full flex justify-center items-center">
          1
        </div>
        <p>Scan</p>
      </div>
      <div className="flex gap-8">
        <div className="w-[40px] h-[40px] bg-[#B5C715] font-jakartaSansBold rounded-full flex justify-center items-center">
          1
        </div>
        <p>Scan</p>
      </div>
    </div>
  );
};

const HowitworksContent = () => {
  return (
    <article className="h-[829px] flex">
      <img height={800} src="/images/seiz-howitworks.png" alt="howitworks" />
      <div className="grid gap-4 content-center">
        <h4 className="text-[14px] text-white tracking-[2.8px]">HOW IT WORKS</h4>
        <h1 className="font-integralCF text-[40px] text-white">Forget about manual document processing</h1>
        <Stepper />
      </div>
    </article>
  );
};

export default HowitworksContent;
