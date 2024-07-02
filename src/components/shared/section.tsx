import type React from "react";

interface SectionProps {
  background: string;
  additionalBg?: string;
  additionalStyles?: React.CSSProperties;
  backgroundColor?: string;
  heightMode: "h-auto" | "h-screen" | "h-fit";
  contentHeight: string;
  children: React.ReactNode;
}

const Section = ({
  background,
  additionalBg = "",
  additionalStyles = {},
  heightMode = "h-auto",
  contentHeight = "100%",
  children,
  backgroundColor = "none",
}: SectionProps) => {

  const container = (content: React.ReactNode) => (
    <section
      className={`w-full ${heightMode} min-w-[1440px] flex flex-col items-center`}
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
    <div className={`w-[1440px] h-[${contentHeight}]`}>{children}</div>
  );

  if (additionalBg.length > 0) {
    return container(
      <div
        className={`w-full ${heightMode} min-w-[1440px] flex flex-col items-center`}
        style={{
          backgroundImage: `url(${additionalBg})`,
          backgroundSize: "contain",
          backgroundColor,
          ...additionalStyles
        }}>
        {content}
      </div>
    );
  };

  return container(content);
};

export default Section;
