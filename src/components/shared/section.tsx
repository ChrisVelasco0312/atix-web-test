import type React from "react";
// import { useEffect } from "react";
// import type { ViewportInfo } from "../../utils/viewportInfo";

interface SectionProps {
  background: string;
  additionalBg?: string;
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
  additionalStyles = {},
  additionalBgClassName = "",
  heightMode = "h-auto",
  contentHeight = "100%",
  children,
  backgroundColor = "transparent",
}: SectionProps) => {

  // useEffect(() => {
  //   const wrapper = document.querySelector("#viewport-wrapper") as HTMLElement;
  //   if (wrapper) {
  //     const handleViewportChange = (event: Event) => {
  //       const customEvent = event as CustomEvent<ViewportInfo>;
  //       console.log("customEvent", customEvent.detail);
  //     };
  //
  //     wrapper.addEventListener("viewport-change", handleViewportChange);
  //
  //     return () => {
  //       wrapper.removeEventListener("viewport-change", handleViewportChange);
  //     }
  //   }
  // }, []);
  //
  const container = (content: React.ReactNode) => (
    <section
      className={`w-full ${heightMode} lg:min-w-[1440px] flex flex-col items-center`}
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
        className={`${additionalBgClassName} w-full ${heightMode}  flex flex-col items-center`}
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
