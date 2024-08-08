const TemplateContent = () => {
  return (
    <article className="lg:h-[351px] pt-[58px] pb-[45px] lg:p-0 grid text-white lg:grid-cols-2 items-center justify-items-center lg:gap-0 gap-8">
      <div className="grid lg:gap-6 gap-4">
        <h1 className="font-integralCF lg:text-[40px] text-[28px] leading-[125%] lg:leading-normal">
          COLLABORATIVE TEMPLATES
        </h1>
        <p className="lg:text-[20px] text-[16px]">
          Enhance team efficiency
        </p>
        <div className="flex gap-2">
          <img className="inline-block" src="../images/notery-template-avatars.png" alt="Notery Template Avatars" />
          <p className="relative bottom-[15px] inline-block self-end">+15 others...</p>
        </div>
      </div>
      <div>
        <img src="../images/notery-template.png" alt="Notery Template" />
      </div>
    </article>
  );
};

export default TemplateContent;
