import ProductCard from "./product-card";
import SectionTitle from "../shared/section-title";
import { astroI18n, t } from "astro-i18n";

const ProductsContent = () => {
  const locale = astroI18n.locale === "es" ? "/es" : "";

  return (
    <article id="products" className="relative grid">
      <SectionTitle
        title={t("index.products.sectionText")}
        iconColor="#1C7FC1"
        topDistance="54px"
      />
      <div />
      <div className="grid gap-4 justify-items-center text-center mt-[168px] mb-[71px]">
        <h1 className="font-integralCF text-purple500 lg:text-[40px] text-[28px] lg:w-auto w-[300px] leading-[98%]">
          {t("index.products.title")}
        </h1>
        <p className="lg:w-[676px] w-[300px] lg:text-[20px] text-[14px] text-purple500">
          {t("index.products.description")}
        </p>
      </div>
      <div className="lg:flex grid gap-8 justify-center pb-[118px]">
        <ProductCard
          logoSrc="../../logos/logo-seiz.svg"
          title={t('index.products.card1.title')}
          description={t('index.products.card1.description')}
          exampleSrc="images/seiz-example.png"
          goTo={`${locale}/seiz`}
        />
        <ProductCard
          logoSrc="../../logos/logo-notery.svg"
          title={t('index.products.card2.title')}
          description={t('index.products.card2.description')}
          exampleSrc="images/notery-example.png"
          goTo={`${locale}/notery`}
        />
      </div>
    </article>
  );
};

export default ProductsContent;
