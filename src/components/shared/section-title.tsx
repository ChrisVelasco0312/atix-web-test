import ChevronsRight from "../icons/chevrons-right";

const SectionTitle = ({
  title,
  textColor = "text-petroleo500",
  iconColor,
  topDistance = "0",
}: {
  title: string;
  textColor?: string;
  iconColor: string;
  topDistance?: string;
}) => {
  return (
    <div
      style={{ top: topDistance }}
      className="absolute flex gap-2 items-center select-none"
    >
      <ChevronsRight color={iconColor} />
      <h1 className={`${textColor} text-[14px] leading-[2.8px] tracking-[2.8px]`}>{title}</h1>
    </div>
  );
};

export default SectionTitle;
