interface FocusCardProps {
  open: boolean;
  title: string;
  descriptionStrong: string;
  description: string;
  iconSrc: string;
}

const FocusCard = ({
  open = false,
  title,
  descriptionStrong,
  description,
  iconSrc,
}: FocusCardProps) => {
  if (!open) {
    return (
      <div className="grid grid-flow-col justify-start gap-4 content-center px-[36px] h-[115px] w-[590px] border-b-gray200 border-solid border-b">
        <img className="mt-[5px] self-start" src={iconSrc} alt="icon" />
        <h1 className="font-jakartaSansBold text-petroleo500 text-[16px]">
          {title}
        </h1>
      </div>
    );
  }
  return (
    <div className="flex gap-4 w-[590px] px-[36px] pt-[14px] pb-[32px] shadow-[0px_120px_100px_0px_rgba(0,0,0,0.07),0px_80px_60px_0px_rgba(0,0,0,0.06),0px_40px_32px_0px_rgba(0,0,0,0.05),0px_10px_16px_0px_rgba(0,0,0,0.08),0px_10px_8px_0px_rgba(0,0,0,0.03),0px_2px_4px_0px_rgba(0,0,0,0.02)]">
      <img className="mt-[5px] self-start" src={iconSrc} alt="icon" />
      <div className="grid gap-2">
        <h1 className="font-jakartaSansBold text-[20px]">{title}</h1>
        <div>
          <h4 className="font-jakartaSansBold text-[16px]">
            {descriptionStrong}
          </h4>
          <p className="text-petroleo500 text-[16px] leading-[150%]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FocusCard;
