import { useState } from 'react';

const DocumentTabDashboard = () => {
  const [activeTab, setActiveTab] = useState('Finance');

  const tabs = ['Finance', 'Government', 'Insurance'];

  const renderContent = () => {
    if (activeTab === 'Finance') {
      return (
        <div className="flex">
          <div className="w-1/2 pr-4">
            <img src="images/seiz_finance.png" alt="Financial dashboard" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-2xl font-bold mb-4">HOW SEIZ HELPS COMPANIES IN THE FINANCIAL INDUSTRY</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Before, 100 decisions take 220 minutes. Now, with SEIZ, 100 decisions are made in just 1 minute!</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Over 1.5 billion documents processed, improving the banking liabilities process by 80%.</span>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    // Add content for other tabs as needed
    return <div>Content for {activeTab}</div>;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 h-[72px] mb-4 w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 font-semibold ${activeTab === tab
              ? 'bg-green500 text-white'
              : 'bg-green200 text-gray-700'
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 p-6 rounded-lg">
        {renderContent()}
      </div>
    </div>
  );
};

export default DocumentTabDashboard;
