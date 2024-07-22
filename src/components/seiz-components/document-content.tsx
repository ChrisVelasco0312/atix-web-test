import { useViewportInfo } from "../hooks/useViewportInfo";
import DocumentDashboardMobile from "./document-dashboard-mobile";
import DocumentTabDashboard from "./document-tab-dashboard";

const DocumentContent = () => {
  const { width } = useViewportInfo();
  return <article className="lg:h-[934px] grid gap-12 items-center content-center justify-items-center">
    <div className="lg:grid hidden gap-4">
      <h1 className="font-integralCF text-center text-[40px]">
        Document automation <span className="text-[#B5C715]">tailored to your needs</span>
      </h1>
      <p className="text-[20px] text-center">
        Use SEIZ for document workflow automation. <br /> Discover our use cases across multiple industries.
      </p>
    </div>
    {
      width > 440 ? <DocumentTabDashboard /> : <DocumentDashboardMobile />
    }
  </article >;
};

export default DocumentContent;
