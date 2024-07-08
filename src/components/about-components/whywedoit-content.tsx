import SectionTitle from "../shared/section-title";

interface WhyCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const WhyCard = ({
  iconSrc,
  title,
  description
}: WhyCardProps) => {
  return (
    <div className="w-[436px] grid gap-4 text-white text-center items-center justify-items-center">
      <img src={iconSrc} alt="icon" />
      <h3 className="text-[18px] font-integralCF">{title}</h3>
      <p className="text-[18px]">{description}</p>
    </div>
  );
};

const WhyWeDoItContent = () => {
  const whyCards: WhyCardProps[] = [
    {
      iconSrc: "logos/about-efficiency.svg",
      title: "Enhance Efficiency",
      description: "We believe that technology can simplify complex tasks and save valuable time, allowing organizations to focus on their core objectives."
    },
    {
      iconSrc: "logos/about-productivity.svg",
      title: "Increase Productivity",
      description: "Automating administrative processes frees up resources and reduces errors, leading to a significant increase in productivity."
    },
    {
      iconSrc: "logos/about-innovation.svg",
      title: "Drive Innovation",
      description: "We are committed to adopting cutting-edge technologies to provide innovative solutions that keep our client organizations at the forefront."
    },
    {
      iconSrc: "logos/about-transformation.svg",
      title: "Facilitate Digital Transformation",
      description: "We help businesses navigate the complexities of digital transformation, adapting to new market demands and enhancing their competitiveness."
    }
  ];


  return (
    <article className="relative h-[815px]">
      <SectionTitle textColor="text-white" title="WHY WE DO IT" iconColor="#00B1C6" topDistance="70px" />
      <div className="h-full mx-auto grid grid-cols-2 items-center content-center gap-y-20 justify-items-center w-[940px]">
        {
          whyCards.map((card, index) => (
            <WhyCard
              key={index}
              iconSrc={card.iconSrc}
              title={card.title}
              description={card.description}
            />
          ))
        }
      </div>
    </article>
  );
};

export default WhyWeDoItContent;
