/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textStroke: {
        green: '1px #B5C715'
      }
    },
    colors: {
      whiteBone: "#FCFCFC",
      white: "#FFFFFF",
      gray500: "#6B7280",
      gray400: "#9CA3AF",
      gray300: "#D1D5DB",
      gray200: "#E5E7EB",
      gray100: "#F3F4F6",
      petroleo500: "#17172E",
      petroleo400: "#5A5A6A",
      petroleo300: "#868691",
      petroleo200: "#BEBEC4",
      petroleo100: "#D3D3D7",
      purple500: "#25255C",
      purple400: "#64648A",
      purple300: "#8D8DA8",
      purple200: "#C1C1CF",
      purple100: "#D6D6DE",
      blue500: "#1C7FC1",
      blue400: "#5EA3D1",
      blue300: "#88BADB",
      blue200: "#BFD8E8",
      blue100: "#D4E3ED",
      turquesa500: "#00B1C6",
      turquesa400: "#4AC6D5",
      turquesa300: "#7AD3DD",
      turquesa200: "#B8E4EA",
      turquesa100: "#D0EBEE",
      green600: "#B5C715",
      green500: "#9ADD19",
      green400: "#B6E55C",
      green300: "#C7E987",
      green200: "#DFEFBE",
      green100: "#E7F1D4",
    },
    fontFamily: {
      integralCF: ["IntegralCF", "sans-serif"],
      jakartaSansRegular: ["Plus Jakarta Sans Regular", "sans-serif"],
      jakartaSansBold: ["Plus Jakarta Sans Bold", "sans-serif"],
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-green': {
          '-webkit-text-stroke': '1px #B5C715',
          'text-stroke': '1px #B5C715',
          'color': 'transparent',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
