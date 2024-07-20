import { useState, useEffect } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ViewportInfo {
  breakpoint: Breakpoint;
  width: number;
}

const getBreakpoint = (width: number): Breakpoint => {
  if (width < 576) return 'xs';
  if (width < 768) return 'sm';
  if (width < 992) return 'md';
  if (width < 1200) return 'lg';
  return 'xl';
};

export const useViewportInfo = (): ViewportInfo => {
  const [viewportInfo, setViewportInfo] = useState<ViewportInfo>({
    breakpoint: getBreakpoint(window.innerWidth),
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportInfo({
        breakpoint: getBreakpoint(window.innerWidth),
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewportInfo;
};
