
const processDescription = (description: string) => {
  const parts = description.split(/(<[^>]+>)/);
  return parts.map((part, index) => {
    if (part.startsWith('<') && part.endsWith('>')) {
      return <strong key={index}>{part.slice(1, -1)}</strong>;
    }
    return part;
  });
};

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
  const processedDescription = processDescription(description);

  return (
    <div className="grid gap-10 justify-items-center">
      <div className="relative bg-white lg:w-[360px] w-[280px] h-[411px] rounded-[16px] p-[30px] text-center">
        <img className="absolute top-[40px] left-0" src="../../icons/trusted-sign.svg" alt="trusted-sign" />
        <img className="absolute bottom-[10px] right-0 rotate-180" src="icons/trusted-sign.svg" alt="trusted-sign" />
        <div className="relative z-1 grid grid-rows-[40px_1fr] py-[40px] place-items-center content-center h-[100%]">
          <img className="self-center justify-self-center" src={logoSrc} alt="logo" />
          <p className="lg:w-[295px]">{processedDescription}</p>
        </div>
        <div
          style={{
            transform: "rotate(316deg)",
          }}
          className="absolute bottom-[-10px] left-[45%] w-10 h-10 bg-white"
        ></div>
      </div>
      <div className="grid relative z-1 justify-center place-items-center">
        <h1 className="font-jakartaSansBold text-[16px]">{info.name}</h1>
        <h4 className="text-[#25255C] text-center">{info.rol}</h4>
        <p>{info.social}</p>
      </div>
    </div>
  );
};

export default TrustedStripCard;
