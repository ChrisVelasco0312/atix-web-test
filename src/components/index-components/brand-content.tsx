const brandContent = () => {

  const imgList = [
    {
      src: "logos/finesa-logo.png",
      alt: "finesa-logo",
    },
    {
      src: "logos/bayport-logo.png",
      alt: "bayport-logo",
    },
    {
      src: "logos/reval-logo.png",
      alt: "reval-logo",
    },
    {
      src: "logos/brinks-logo.png",
      alt: "brinks-logo",
    },
    {
      src: "logos/banco-w-logo.png",
      alt: "banco-w-logo",
    }
  ];

  return (
    <article className="h-[272px] lg:w-auto relative flex flex-wrap lg:grid lg:grid-flow-col lg:gap-8 gap-x-4 items-center justify-center">
      {imgList.map((img) => (
        <img
          className="lg:w-[200px] w-[90px] h-auto"
          src={img.src}
          alt={img.alt}
        />
      ))}
    </article>
  );
};

export default brandContent;
