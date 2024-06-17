import SectionTitle from "./section-title";

const PublicationsContent = () => (
  <div className="relative h-[481px] grid justify-center">
    <SectionTitle title="PUBLICATIONS" iconColor="#1C7FC1" topDistance="54px" />
    <div className="grid grid-flow-col gap-x-10 place-items-center">
      <div className="grid justify-center w-[351px] gap-4">
        <img
          className="w-[351px] h-[126px]"
          src="logos/cience-direct-logo.png"
          alt="cience-direct-logo"
        />
        <a
          href="https://www.sciencedirect.com/science/article/abs/pii/S095070512030589X?dgcid=author"
          className="text-center text-[#545A7C] underline"
        >
          “Incremental learning model inspired in Rehearsal for deep
          convolutional networks”
        </a>
      </div>
      <div className="grid justify-center w-[351px] gap-4">
        <img
          className="w-[344px] h-[99px]"
          src="logos/springer-link-logo.png"
          alt="springer-link-logo"
        />
        <a
          href="https://link.springer.com/chapter/10.1007/978-3-319-92898-2_10"
          className="text-center text-[#545A7C] underline"
        >
          “Document Management System Based on a Private Blockchain for the
          Support of the Judicial Embargoes Process in Colombia”
        </a>
      </div>
    </div>
  </div>
);

export default PublicationsContent;
