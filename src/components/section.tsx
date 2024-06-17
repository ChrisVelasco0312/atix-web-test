interface SectionProps {
  background: string;
  heightMode: "h-auto" | "h-screen" | "h-fit";
  contentHeight: string;
  children: React.ReactNode;
}

const Section = ({
  background,
  heightMode = "h-auto",
  contentHeight = "100%",
  children,
}: SectionProps) => {
  return (
    <section
      className={`w-full ${heightMode} min-w-[1340px] flex flex-col items-center`}
      style={{
        backgroundImage: background && `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className={`w-[1340px] h-[${contentHeight}]`}>{children}</div>
    </section>
  );
};

export default Section;
