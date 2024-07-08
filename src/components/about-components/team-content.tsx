import SectionTitle from "../shared/section-title";

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
  const teamCards: TeamCardProps[] = [
    {
      iconSrc: "team/Tomas.png",
      title: "Tomas Velasco",
      role: "Innovation Manager & Co-founder"
    },
    {
      iconSrc: "team/Camilo.png",
      title: "Camilo Medina",
      role: "CEO  & Co-founder"
    },
    {
      iconSrc: "team/Anyi.png",
      title: "Anyi Ramirez",
      role: "COO"
    },
    {
      iconSrc: "team/Laura.png",
      title: "Laura Duran",
      role: "Product Designer"
    }
  ];

  return (
    <article className="relative grid h-[740px]">
      <SectionTitle
        title="TEAM"
        iconColor="#9ADD19"
        topDistance="70px"
      />
      <div className="grid content-center items-center justify-items-center">
        <div className="flex gap-4 w-[1304px] h-[461px]">
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
