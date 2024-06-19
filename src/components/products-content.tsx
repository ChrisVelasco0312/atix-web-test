import ProductCard from "./product-card";
import SectionTitle from "./section-title";

const ProductsContent = () => {
  return (
    <article className="relative grid">
      <SectionTitle
        title="ATIX PRODUCTS"
        iconColor="#1C7FC1"
        topDistance="54px"
      />
      <div />
      <div className="grid gap-4 justify-items-center text-center mt-[168px] mb-[71px]">
        <h1 className="font-integralCF text-purple500 text-[40px] leading-[98%]">
          AUTOMATED DOCUMENT PROCESSING
        </h1>
        <p className="w-[676px] text-[20px] text-purple500">
          Empower your frontline workforce, minimize hiring requirements,
          maintain employee satisfaction and revolutionize customer experiences!
        </p>
      </div>
      <div className="flex gap-8 justify-center pb-[118px]">
        <ProductCard
          logoSrc="logos/logo-seiz.svg"
          title="easily automate any document processing workflow"
          description="Boost efficiencies, unlock savings, and streamline operations with seamless AI-powered document workflow automation."
          exampleSrc="images/seiz-example.png"
        />
        <ProductCard
          logoSrc="logos/logo-notery.svg"
          title="the hero who reads and makes up to 200 DECISIONS PeR MINUTe"
          description="Conquer the document chaos and achieve maximum efficiency with a digital administrative assistant by your side!"
          exampleSrc="images/notery-example.png"
        />
      </div>
    </article>
  );
};

export default ProductsContent;
