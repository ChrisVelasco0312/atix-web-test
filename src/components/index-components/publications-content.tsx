import SectionTitle from "../shared/section-title";
import { t } from "astro-i18n";

const PublicationsContent = () => (
  <div className="relative lg:h-[481px] h-[718px] grid justify-center content-center">
    <SectionTitle title={t("index.publications.sectionText")} iconColor="#1C7FC1" topDistance="54px" />
    <div className="grid lg:grid-flow-col gap-x-[130px] place-items-center">
      <div
        style={{
          gridTemplateRows: "200px 1fr",
        }}
        className="grid justify-center w-[351px] gap-4 justify-items-center"
      >
        <img
          className="w-[351px] h-[126px] self-center"
          src="logos/cience-direct-logo.png"
          alt="cience-direct-logo"
        />
        <a
          href="https://www.sciencedirect.com/science/article/abs/pii/S095070512030589X?dgcid=author"
          className="text-center text-[#545A7C] underline lg:w-auto w-[270px]"
        >
          “Incremental learning model inspired in Rehearsal for deep
          convolutional networks”
        </a>
      </div>
      <div
        style={{
          gridTemplateRows: "200px 1fr",
        }}
        className="grid justify-center w-[351px] gap-4 justify-items-center"
      >
        <img
          className="w-[344px] h-[99px] self-center relative top-[15px]"
          src="logos/springer-link-logo.png"
          alt="springer-link-logo"
        />
        <a
          href="https://link.springer.com/chapter/10.1007/978-3-319-92898-2_10"
          className="text-center text-[#545A7C] underline lg:w-auto w-[270px]"
        >
          “Document Management System Based on a Private Blockchain for the
          Support of the Judicial Embargoes Process in Colombia”
        </a>
      </div>
    </div>
  </div>
);

export default PublicationsContent;
