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
      className={`${bgClassName}  ${heightMode}`}
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
    <div className={`2xl:w-[1440px] md:w-full h-[${contentHeight}] m-auto px-[20px]`}>{children}</div>
  );

  if (additionalBg.length > 0) {
    return container(
      <div
        className={`${additionalBgClassName} w-full ${heightMode} m-auto`}
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
