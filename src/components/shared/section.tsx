interface SectionProps {
  background: string;
  backgroundColor?: string;
  heightMode: "h-auto" | "h-screen" | "h-fit";
  contentHeight: string;
  children: React.ReactNode;
}

const Section = ({
  background,
  heightMode = "h-auto",
  contentHeight = "100%",
  children,
  backgroundColor = "none",
}: SectionProps) => {
  return (
    <section
      className={`w-full ${heightMode} min-w-[1340px] flex flex-col items-center`}
      style={{
        backgroundImage: background && `url(${background})`,
        backgroundSize: "cover",
        backgroundColor,
      }}
    >
      <div className={`w-[1340px] h-[${contentHeight}]`}>{children}</div>
    </section>
  );
};

export default Section;
