import DocumentTabDashboard from "./document-tab-dashboard";

const DocumentContent = () => {
  return <article className="h-[934px] grid gap-4 items-center content-center">
    <div className="grid gap-4">
      <h1 className="font-integralCF text-center text-[40px]">Document automation <span className="text-[#B5C715]">tailored to your needs</span></h1>
      <p className="text-[20px] text-center">Use SEIZ for document workflow automation. <br /> Discover our use cases across multiple industries.</p>
    </div>
    <DocumentTabDashboard />
  </article >;
};

export default DocumentContent;
