interface focusMobileCard {
  title: string
  descriptionStrong: string
  iconSrc: string
}

const FocusMobileCard = ({
  title,
  descriptionStrong,
  iconSrc
}: focusMobileCard) => {

  return (
    <div className="flex gap-4 w-[316px] px-[20px] py-[30px] shadow-lg shadow-black/5 drop-shadow-xl">
      <img className="mt-[5px] self-start" src={iconSrc} alt="icon" />
      <div className="grid gap-2">
        <h1 className="font-jakartaSansBold text-[20px]">{title}</h1>
        <div>
          <h4 className="text-[16px]">
            {descriptionStrong}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FocusMobileCard;
