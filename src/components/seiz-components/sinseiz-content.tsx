const SinseizContent = () => {
  return (
    <article
      className="relative h-[870px] bg-[url('backgrounds/x-seiz.svg')] bg-no-repeat bg-[600px]">
      <div className="absolute left-[101px] top-[76px] h-[870px]">
        <div className="absolute top-[20px] left-[-90px]">
          <h1 className="w-[567px] font-integralCF text-[40px] text-[#0E2B3D]">
            Wasting valuable
            <span className="text-green400 block leading-[100%]"> 5 to 15 minutes </span>
            extracting data from
            ONE single document?
          </h1>
        </div>
        <div className="absolute left-[90px] flex w-[1198px] h-[718px]">
          <img className="absolute top-[284px] left-[5px]" src="images/sinseiz-graph-1.svg" alt="graph-1" />
          <img className="absolute right-[128px] top-[0px]" src="images/sinseiz-graph-2.png" alt="graph-2" />
          <img className="absolute right-[0px] bottom-[0px]" src="images/sinseiz-graph-3.svg" alt="graph-3" />
        </div>
      </div>
    </article>
  );
};

export default SinseizContent;
