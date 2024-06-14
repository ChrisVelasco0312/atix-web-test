import ChevronsRight from "./icons/chevrons-right";

interface ButtonProps {
  onClick: () => void;
  text: string;
  style?: React.CSSProperties;
}

const Button = ({ onClick, text, style = {} }: ButtonProps) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className="inline-flex text-white justify-center items-center gap-5 rounded-[24px] px-6 py-3 bg-purple500"
    >
      {text}
      <div>
        <ChevronsRight color="white" />
      </div>
    </button>
  );
};

export default Button;
