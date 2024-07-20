import type React from "react";

interface SectionProps {
  background: string;
  additionalBg?: string;
  bgClassName?: string;
  additionalStyles?: React.CSSProperties;
  additionalBgClassName?: string;
  backgroundColor?: string;
  heightMode: "h-auto" | "h-screen" | "h-fit";
  contentHeight: string;
  children: React.ReactNode;
}

const Section = ({
  background,
  additionalBg = "",
  bgClassName = "",
  additionalBgClassName = "",
  heightMode = "h-auto",
  contentHeight = "100%",
  children,
  backgroundColor = "transparent",
}: SectionProps) => {

  const container = (content: React.ReactNode) => (
    <section
      className={`${bgClassName} w-full ${heightMode} lg:min-w-[1440px] flex flex-col items-center`}
      style={{
        backgroundImage: background && `url(${background})`,
        backgroundSize: "cover",
        backgroundColor,
      }}
    >
      {content}
    </section>
  );

  const content = (
    <div className={`lg:w-[1440px] h-[${contentHeight}]`}>{children}</div>
  );

  if (additionalBg.length > 0) {
    return container(
      <div
        className={`${additionalBgClassName} w-full ${heightMode} flex flex-col items-center`}
        style={{
          backgroundImage: `url(${additionalBg})`,
          backgroundSize: "contain",
          backgroundColor,
        }}>
        {content}
      </div>
    );
  };

  return container(content);
};

export default Section;
