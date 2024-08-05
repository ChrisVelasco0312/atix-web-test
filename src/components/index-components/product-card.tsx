import Button from "../shared/button";
import { t } from "astro-i18n";

interface ProductCardProps {
  title: string;
  description: string;
  exampleSrc: string;
  logoSrc: string;
  goTo?: string;
}

const ProductCard = ({
  title,
  description,
  exampleSrc,
  logoSrc,
  goTo = "",
}: ProductCardProps) => {
  return (
    <div className="grid gap-[24px] lg:w-[515px] w-[308px] h-auto shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[16px] lg:py-[47px] lg:px-[48px] p-[30px]">
      <img src={logoSrc} alt="product-logo" />
      <h1 className="font-integralCF text-petroleo500 text-[28px] leading-normal">
        {title}
      </h1>
      <p className="text-petroleo500 text-[16px] leading-[150%]">
        {description}
      </p>
      <Button style={{ width: "180px" }} goTo={goTo} text={t("index.products.cardButton")} />
      <img src={exampleSrc} alt="example-image" />
    </div>
  );
};

export default ProductCard;
