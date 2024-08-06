import SectionTitle from "../shared/section-title";
import { useRef, useEffect } from "react";
import { t } from "astro-i18n";

interface TeamCardProps {
  iconSrc: string;
  title: string;
  role: string;
}

const TeamCard = ({
  iconSrc,
  title,
  role
}: TeamCardProps) => {
  return (
    <div className="w-[436px] grid gap-4 items-center justify-items-center">
      <img src={iconSrc} alt="icon" />
      <div className="text-center text-[#697077]">
        <h3 className="text-[18px] font-integralCF">{title}</h3>
        <p className="text-[18px]">{role}</p>
      </div>
    </div>
  );
};

const TeamContent = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  const teamCards: TeamCardProps[] = [
    {
      iconSrc: "../team/Tomas.png",
      title: "Tomas Velasco",
      role: "Innovation Manager & Co-founder"
    },
    {
      iconSrc: "../team/Camilo.png",
      title: "Camilo Medina",
      role: "CEO  & Co-founder"
    },
    {
      iconSrc: "../team/Anyi.png",
      title: "Anyi Ramirez",
      role: "COO"
    },
    {
      iconSrc: "../team/Laura.png",
      title: "Laura Duran",
      role: "Product Designer"
    },
    {
      iconSrc: "../team/Juan-Carlos.png",
      title: "Juan carlos PERDOMO",
      role: "CRO"
    }
  ];



  useEffect(() => {
    const teamContainer = teamRef.current;

    const carouselInner = teamContainer?.querySelector(".team-cards-items");

    const carouselContent = Array.from(carouselInner?.children || []);

    carouselContent.forEach((card) => {
      const duplicateCard = card.cloneNode(true);
      carouselInner?.appendChild(duplicateCard);
    });

  }, [teamRef]);

  return (
    <article id="team" className="relative grid h-[740px]">
      <SectionTitle
        title={t("about.team.sectionText")}
        iconColor="#9ADD19"
        topDistance="70px"
      />
      <div
        ref={teamRef}
        className="grid content-center w-full overflow-hidden items-center justify-items-center mask-gradient origin-center">
        <div
          className="team-cards-items animate-scroll flex gap-8 h-[461px]" >
          {
            teamCards.map((card, index) => (
              <TeamCard
                key={index}
                iconSrc={card.iconSrc}
                title={card.title}
                role={card.role}
              />
            ))
          }
        </div>
      </div>
    </article>
  );
};

export default TeamContent;
