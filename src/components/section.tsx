interface SectionProps {
  background: string;
  heightMode: "auto" | "screen" | "fit";
  contentHeight: string;
  children: React.ReactNode;
}

const Section = ({
  background,
  heightMode = "auto",
  contentHeight = "100%",
  children,
}: SectionProps) => {
  return (
    <section
      className={`w-full h-${heightMode} min-w-[1340px] flex flex-col items-center`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className={`w-[1340px] h-[${contentHeight}]`}>{children}</div>
    </section>
  );
};

export default Section;
