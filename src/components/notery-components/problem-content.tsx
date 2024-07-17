const ProblemCard = ({
  iconSrc,
  title,
  description
}: {
  iconSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="grid content-center gap-4 bg-white pl-[36px] pr-[24px] filter drop-shadow-[0_12.385px_39.632px_rgba(39,36,67,0.15)] rounded-[16px] w-[348px] h-[280px]">
      <img src={iconSrc} alt="icon" />
      <div>
        <h1 className="font-jakartaSansBold text-[18px] text-[#3A393F]">{title}</h1>
        <p className="text-[16px] leading-[150%] text-[#7D7D7D]">{description}</p>
      </div>
    </div>
  );
};


const ProblemContent = () => {
  const problems = [
    {
      iconSrc: "../icons/problem-icon-1.svg",
      title: "A person can only review between 40 and 50 documents.",
      description: "Business Intelligence Associates (BIA)"
    },
    {
      iconSrc: "../icons/problem-icon-2.svg",
      title: "Companies invest millions in hiring people",
      description: "Specifically for document review tasks"
    }
  ];

  return (
    <article className="h-[847px] grid grid-cols-2 content-center items-center justify-items-center">
      <img src="../images/notery-problem.png" alt="Notery Problem" />
      <div className="grid gap-8">
        <div>
          <div className="relative top-[10px]">
            <h1 className="relative top-[30px] font-integralCF text-[40px] text-purple500">
              REVIEWING DOCUMENTS
            </h1>
            <h1 className="font-integralCF text-[76px] text-purple300">
              ONE BY ONE
            </h1>
            <h1 className="relative bottom-[20px] font-integralCF text-[40px] text-purple500 text-nowrap">
              is a waste of time & resources
            </h1>
          </div>
          <p className="text-[20px] max-w-[545px]">
            Free yourself from tedious and costly tasks, and save time and money with Notery
          </p>
        </div>
        <div className="flex gap-4">
          {problems.map((problem) => (
            <ProblemCard
              key={problem.title}
              iconSrc={problem.iconSrc}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
      </div>

    </article>
  );
};

export default ProblemContent;
