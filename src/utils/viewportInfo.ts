// viewportUtils.ts
export interface ViewportInfo {
  width: number;
  height: number;
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export function getViewportInfo(): ViewportInfo {
  if (typeof window === 'undefined') {
    // Default values for SSR
    return { width: 1024, height: 768, breakpoint: 'lg' };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  let breakpoint: ViewportInfo['breakpoint'] = 'xs';

  if (width >= breakpoints.xl) breakpoint = 'xl';
  else if (width >= breakpoints.lg) breakpoint = 'lg';
  else if (width >= breakpoints.md) breakpoint = 'md';
  else if (width >= breakpoints.sm) breakpoint = 'sm';

  return { width, height, breakpoint };
}
