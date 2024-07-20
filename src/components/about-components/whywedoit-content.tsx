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
    <div className="lg:w-[436px] grid lg:gap-4 gap-2 text-white text-center items-center justify-items-center">
      <img className="lg:w-auto w-[54px]" src={iconSrc} alt="icon" />
      <h3 className="text-[18px] font-integralCF">{title}</h3>
      <p className="lg:text-[18px] text-[14px] lg:w-auto w-[305px]">{description}</p>
    </div>
  );
};

const WhyWeDoItContent = () => {
  const whyCards: WhyCardProps[] = [
    {
      iconSrc: "../logos/about-efficiency.svg",
      title: "Enhance Efficiency",
      description: "We believe that technology can simplify complex tasks and save valuable time, allowing organizations to focus on their core objectives."
    },
    {
      iconSrc: "../logos/about-productivity.svg",
      title: "Increase Productivity",
      description: "Automating administrative processes frees up resources and reduces errors, leading to a significant increase in productivity."
    },
    {
      iconSrc: "../logos/about-innovation.svg",
      title: "Drive Innovation",
      description: "We are committed to adopting cutting-edge technologies to provide innovative solutions that keep our client organizations at the forefront."
    },
    {
      iconSrc: "../logos/about-transformation.svg",
      title: "Facilitate Digital Transformation",
      description: "We help businesses navigate the complexities of digital transformation, adapting to new market demands and enhancing their competitiveness."
    }
  ];


  return (
    <article id="whywedoit" className="relative lg:h-[815px] lg:p-0 p-4">
      <SectionTitle textColor="text-white" title="WHY WE DO IT" iconColor="#00B1C6" topDistance="70px" />
      <div className="h-full mx-auto grid lg:grid-cols-2 items-center content-center lg:gap-y-20 gap-y-10 justify-items-center lg:w-[940px] lg:py-0 py-[100px]">
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
