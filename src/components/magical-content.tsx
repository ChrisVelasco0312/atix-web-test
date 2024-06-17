import Button from "./button";

const MagicalContent = () => {
  return (
    <div className="h-[409px] grid grid-flow-col items-center">
      <div className="grid font-integralCF text-[64px] leading-[1.2em]">
        <h1 className="p-0 m-0 text-white">READY TO GO</h1>
        <h1 className="pl-[118px] m-0 text-white">FROM MANUAL</h1>
        <h1
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            background:
              "linear-gradient(90deg, #FFF 23.8%, #B5C715 34.98%, #11AADF 80.26%, #242459 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="pl-[336px]"
        >
          TO MAGICAL ?
        </h1>
      </div>
      <Button
        style={{ width: "200px" }}
        text="Drop us a line"
        onClick={() => {}}
        styleType="outline-white"
      />
    </div>
  );
};

export default MagicalContent;
