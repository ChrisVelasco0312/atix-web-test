import { useViewportInfo } from "../hooks/useViewportInfo";
import DocumentDashboardMobile from "./document-dashboard-mobile";
import DocumentTabDashboard from "./document-tab-dashboard";
import { t } from "astro-i18n";

const DocumentContent = () => {
  const { width } = useViewportInfo();
  return <article className="lg:h-[934px] grid gap-12 items-center content-center justify-items-center">
    <div className="lg:grid hidden gap-4">
      <h1 className="font-integralCF text-center text-[40px]">
        {t("seiz.document.title1")} <span className="text-[#B5C715]">{t("seiz.document.title2")}</span>
      </h1>
      <p className="text-[20px] text-center">
        {t("seiz.document.description1")} <br />
        {t("seiz.document.description2")}
      </p>
    </div>
    {
      width > 1024 ? <DocumentTabDashboard /> : <DocumentDashboardMobile />
    }
  </article >;
};

export default DocumentContent;
