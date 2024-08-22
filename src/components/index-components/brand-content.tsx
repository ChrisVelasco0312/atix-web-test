const brandContent = () => {

  const imgList = [
    {
      src: "../../logos/finesa-logo.png",
      alt: "finesa-logo",
      dimensions: "w-[85px] h-[28px] lg:w-[138px] lg:h-[44px]"
    },
    {
      src: "../../logos/bayport-logo.png",
      alt: "bayport-logo",
      dimensions: "w-[94px] h-[24px] lg:w-[152px] lg:h-[40px]"
    },
    {
      src: "../../logos/reval-logo.png",
      alt: "reval-logo",
      dimensions: "w-[72px] h-[30px] lg:w-[117px] lg:h-[47px]"
    },
    {
      src: "../../logos/brinks-logo.png",
      alt: "brinks-logo",
      dimensions: "w-[101px] h-[18px] lg:w-[180px] lg:h-[31px]"
    },
    {
      src: "../../logos/banco-w-logo.png",
      alt: "banco-w-logo",
      dimensions: "w-[107px] h-[40px] lg:w-[151px] lg:h-[56px]"
    }
  ];

  return (
    <article className="h-[272px] lg:w-auto relative flex flex-wrap lg:grid lg:grid-flow-col lg:gap-12 gap-x-4 items-center justify-center content-center gap-y-8">
      {imgList.map((img) => (
        <img
          className={img.dimensions}
          src={img.src}
          alt={img.alt}
        />
      ))}
    </article>
  );
};

export default brandContent;
