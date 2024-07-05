const BenefitsCard = ({
  iconSrc,
  title,
  description
}: {
  iconSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex bg-white place-items-center justify-center gap-[24px] shadow-[8px_8px_26.5px_-8px_rgba(181,199,21,0.30)] rounded-[16px] w-[576px] h-[161px]">
      <img className="w-[51px] h-[51px]" src={iconSrc} alt="icon" />
      <div className="w-[412px]">
        <h1 className="font-jakartaSansBold text-[24px] text-nowrap">{title}</h1>
        <p className="text-petroleo500 text-[16px] leading-[150%]">{description}</p>
      </div>
    </div>
  );
};


const BenefitsContent = () => {
  const benefits = [
    {
      iconSrc: "icons/seiz-benefits-reduce-icon.svg",
      title: "Reduce turnaround time by 60%",
      description: "Process documents in minutes, not hours!",
    },
    {
      iconSrc: "icons/seiz-benefits-save-icon.svg",
      title: "Save up to 60% in operational costs",
      description: "Say goodbye to manual data entry. Cut down operational costs through automation.",
    },
    {
      iconSrc: "icons/seiz-benefits-drive-icon.svg",
      title: "Drive efficiencies",
      description: "Empower your team to accomplish more in less time through task automation.",
    },
    {
      iconSrc: "icons/seiz-benefits-catch-icon.svg",
      title: "Catch errors & ensure compliance",
      description: "Catch errors & ensure compliance",
    }
  ];


  return (
    <article className="h-[644px] grid gap-10 pt-[81px] pb-[85px]">
      <div className="flex items-center justify-center gap-4">
        <h1 className="inline-block font-integralCF text-[64px] text-stroke-green">WITH</h1>
        <img
          className="relative top-2 inline-block w-[180px] h-[56px]"
          src="logos/logo-seiz-clean.svg"
          alt="benefits"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-[34px]">
        {benefits.map((benefit) => (
          <BenefitsCard
            key={benefit.title}
            iconSrc={benefit.iconSrc}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </article>
  );
};

export default BenefitsContent;
