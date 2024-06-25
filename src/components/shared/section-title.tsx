import ChevronsRight from "../icons/chevrons-right";

const SectionTitle = ({
  title,
  iconColor,
  topDistance = "0",
}: {
  title: string;
  iconColor: string;
  topDistance?: string;
}) => {
  return (
    <div
      style={{ top: topDistance }}
      className="absolute flex gap-2 items-center select-none"
    >
      <ChevronsRight color={iconColor} />
      <h1 className="text-petroleo500 text-[14px] leading-[2.8px]">{title}</h1>
    </div>
  );
};

export default SectionTitle;
