interface TrustedStripCardProps {
  logoSrc: string;
  description: string;
  info: {
    name: string;
    rol: string;
    social: string;
  };
}

const TrustedStripCard = ({
  logoSrc,
  description,
  info = {
    name: "Jorge Bernal",
    rol: "Credit and Portfolio Operations Manager",
    social: "@Bayport",
  },
}: TrustedStripCardProps) => {
  return (
    <div className="grid gap-10">
      <div className="relative bg-white w-[360px] h-[411px] rounded-[16px] p-[30px] text-center">
        <div className="grid place-items-center h-[100%]">
          <img src={logoSrc} alt="logo" />
          <p className="w-[295px]">{description}</p>
        </div>
        <div
          style={{
            transform: "rotate(316deg)",
          }}
          className="absolute bottom-[-10px] left-[45%] w-10 h-10 bg-white"
        ></div>
      </div>
      <div className="grid justify-center place-items-center">
        <h1 className="font-jakartaSansBold text-[16px]">{info.name}</h1>
        <h4>{info.rol}</h4>
        <p>{info.social}</p>
      </div>
    </div>
  );
};

export default TrustedStripCard;
