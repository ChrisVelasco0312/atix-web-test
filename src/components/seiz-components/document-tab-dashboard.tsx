import React, { useState } from 'react';

interface TabContent {
  image: string;
  title: string;
  points: string[];
}

interface ContentData {
  [key: string]: TabContent;
}

const DocumentTabDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Finance');
  const tabs: string[] = ['Finance', 'Government', 'Insurance'];

  const contentData: ContentData = {
    Finance: {
      image: "images/seiz_finance.png",
      title: "HOW SEIZ HELPS COMPANIES IN THE FINANCIAL INDUSTRY",
      points: [
        "Before, 100 decisions take 220 minutes. Now, with SEIZ, 100 decisions are made in just 1 minute!",
        "Over 1.5 billion documents processed, improving the banking liabilities process by 80%."
      ]
    },
    Government: {
      image: "images/seiz_government.png",
      title: "HOW SEIZ HELPS COMPANIES IN THE GOVERNMENT INDUSTRY",
      points: [
        "Generated over 200,000 payment orders for tax collection, impacting a portfolio worth 100 billion pesos"
      ]
    },
    Insurance: {
      image: "images/seiz_insurance.png",
      title: "HOW SEIZ HELPS COMPANIES IN THE INSURANCE INDUSTRY",
      points: [
        "521,000 transactions processed per month.",
        "Extracted and classified 8 million data fields from insurance policies, increasing placement rates by 60% for the commercial sector."
      ]
    }
  };

  const renderContent = (): React.JSX.Element => {
    const content = contentData[activeTab];
    return (
      <div className="grid grid-cols-2 gap-[51px] content-center items-center h-full px-[47px]">
        <img
          src={content.image}
          alt={`${activeTab} dashboard`}
          className="rounded-lg shadow-lg w-[543.09px] h-[335.21px]"
        />
        <div className="flex flex-col gap-6 h-[250px]">
          <div className="flex flex-col gap-4">
            <h2 className="font-integralCF text-[28px] w-[460px] h-fit leading-[100%]">
              {content.title}
            </h2>
            <div className="w-[182px] h-[5px] bg-green600" />
          </div>
          <ul className="grid gap-4 w-[420px]">
            {content.points.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <img src="icons/check-icon.svg" alt="check-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="container w-[1155px] h-[591px] grid grid-rows-[72px_1fr] shadow-[2px_4px_20px_0px_rgba(181,199,21,0.15)]">
      <div className="grid grid-cols-3 h-[72px] mb-4 w-full">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`py-2 px-4 font-jakartaSansBold text-[20px] ${activeTab === tab
              ? 'bg-green600 text-white'
              : `${index === tabs.length - 1 ? 'bg-[#B5C71512]' : 'bg-[#B5C71520]'} text-gray-700`
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};

export default DocumentTabDashboard;
