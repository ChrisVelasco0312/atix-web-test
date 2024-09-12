import { useEffect, useState } from 'react';

const useElementAppearance = (selector: string) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const element = document.querySelector(selector);
          if (element && !isVisible) {
            setIsVisible(true);
            observer.disconnect();
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [selector, isVisible]);

  return isVisible;
};

export default useElementAppearance;
