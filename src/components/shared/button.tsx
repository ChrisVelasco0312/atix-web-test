import React from "react";
import ChevronsRightSolid from "../icons/chevrons-right-solid";

interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
  styleType?: "dark" | "outline-white";
  goTo?: string;
}

const Button = ({
  text,
  style = {},
  styleType = "dark",
  goTo = "",
}: ButtonProps) => {
  const darkStyle = "text-white bg-purple500";
  const outlineWhiteStyle = "text-white border border-white bg-transparent";
  const selectedStyle = styleType === "dark" ? darkStyle : outlineWhiteStyle;

  return (
    <a href={goTo}>
      <button
        style={style}
        className={`inline-flex justify-center items-center gap-5 rounded-[24px] px-6 py-3 ${selectedStyle}`}
      >
        {text}
        <div>
          <ChevronsRightSolid />
        </div>
      </button>
    </a>
  );
};

export default Button;
