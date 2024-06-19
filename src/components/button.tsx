import ChevronsRightSolid from "./icons/chevrons-right-solid";
interface ButtonProps {
  onClick: () => void;
  text: string;
  style?: React.CSSProperties;
  styleType?: "dark" | "outline-white";
}

const Button = ({
  onClick,
  text,
  style = {},
  styleType = "dark",
}: ButtonProps) => {
  const darkStyle = "text-white bg-purple500";
  const outlineWhiteStyle = "text-white border border-white bg-transparent";
  const selectedStyle = styleType === "dark" ? darkStyle : outlineWhiteStyle;

  return (
    <button
      style={style}
      onClick={onClick}
      className={`inline-flex justify-center items-center gap-5 rounded-[24px] px-6 py-3 ${selectedStyle}`}
    >
      {text}
      <div>
        <ChevronsRightSolid />
      </div>
    </button>
  );
};

export default Button;
