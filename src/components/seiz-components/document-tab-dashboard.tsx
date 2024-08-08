import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { motion, AnimatePresence } from 'framer-motion';
import { t } from "astro-i18n";

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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabs: string[] = ['Finance', 'Government', 'Insurance'];

  const contentData: ContentData = {
    Finance: {
      image: "../images/seiz_finance.png",
      title: t("seiz.document.finance.title"),
      points: [
        t("seiz.document.finance.points.1"),
        t("seiz.document.finance.points.2")
      ]
    },
    Government: {
      image: "../images/seiz_government.png",
      title: t("seiz.document.government.title"),
      points: [
        t("seiz.document.government.points.1")
      ]
    },
    Insurance: {
      image: "../images/seiz_insurance.png",
      title: t("seiz.document.insurance.title"),
      points: [
        t("seiz.document.insurance.points.1"),
        t("seiz.document.insurance.points.2"),
      ]
    }
  };

  useEffect(() => {
    setActiveIndex(tabs.indexOf(activeTab));
  }, [activeTab]);

  const tabWidth = 100 / tabs.length;
  const springProps = useSpring({
    left: `${activeIndex * tabWidth}%`,
    width: `${tabWidth}%`,
  });

  const renderContent = (): React.JSX.Element => {
    const content = contentData[activeTab];
    return (
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 gap-[51px] content-center items-center h-full px-[47px]"
      >
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
                <img src="../icons/check-icon.svg" alt="check-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="container w-[1155px] h-[591px] grid grid-rows-[72px_1fr] shadow-[2px_4px_20px_0px_rgba(181,199,21,0.15)]">
      <div className="grid grid-cols-3 h-[72px] mb-4 w-full relative">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`py-2 px-4 font-jakartaSansBold text-[20px] relative z-10 transition-colors duration-300 ${index === tabs.length - 1 ? 'bg-[#B5C71512]' : 'bg-[#B5C71520]'
              } ${activeTab === tab ? 'text-white' : 'text-gray-700'}`}
            onClick={() => setActiveTab(tab)}
          >
            {t(`seiz.document.${tab.toLowerCase()}.tabTitle`)}
          </button>
        ))}
        <animated.div
          className="absolute top-0 h-full bg-green600 z-0"
          style={{
            ...springProps,
            zIndex: 5,
          }}
        />
      </div>
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </div>
  );
};

export default DocumentTabDashboard;
