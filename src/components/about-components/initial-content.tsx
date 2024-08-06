import { t } from "astro-i18n";

const InitialContent = () => {
  return (
    <article className="p-4">
      <div className="relative grid lg:gap-6 gap-2 items-end content-end h-[610px] py-[100px]">
        <div className="lg:text-[76px] text-[40px] lg:leading-none leading-[110%]">
          <h1 className="inline-block font-integralCF text-white">
            {t("about.initial.title")}
          </h1>
          <h1 className="inline-block font-integralCF text-white">
            ATIX DIGITAL
          </h1>
          <h1 className="absolute left-[5px] lg:left-[298px] lg:top-[332px] inline-block font-integralCF text-white text-stroke-white lg:opacity-10 opacity-20">
            ATIX DIGITAL
          </h1>
        </div>
        <p className="lg:text-[24px] text-[16px] text-white lg:w-[70%]">
          {t("about.initial.description")}
        </p>
      </div>
    </article>
  );
};

export default InitialContent;
