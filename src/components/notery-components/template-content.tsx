const TemplateContent = () => {
  return (
    <article className="h-[316px] grid text-white grid-cols-2 items-center justify-items-center">
      <div className="grid gap-6">
        <h1 className="font-integralCF text-[40px]">COLLABORATIVE TEMPLATES</h1>
        <p className="text-[20px]">Enhance team efficiency</p>
        <div className="flex gap-2">
          <img className="inline-block" src="images/notery-template-avatars.png" alt="Notery Template Avatars" />
          <p className="relative bottom-[15px] inline-block self-end">+15 others...</p>
        </div>
      </div>
      <div>
        <img src="images/notery-template.png" alt="Notery Template" />
      </div>
    </article>
  );
};

export default TemplateContent;
