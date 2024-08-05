import React from 'react';
import { astroI18n, l } from "astro-i18n";

const LanguageSwitcher = ({ darkBackground }: { darkBackground?: boolean }) => {
  const currentLocale = astroI18n.locale;
  const targetLocale = currentLocale === 'en' ? 'es' : 'en';

  const handleLanguageChange = () => {
    const newPath = l(window.location.pathname, {}, { targetLocale });
    window.location.href = newPath;
  };

  const buttonClasses = darkBackground
    ? 'bg-white text-petroleo500 '
    : 'bg-blue-500 text-white';

  return (
    <button
      onClick={handleLanguageChange}
      className={`${buttonClasses} p-4 rounded-full font-jakartaSansBold  fixed bottom-4 transition duration-300 ease-in-out right-4 transform hover:scale-105 opacity-40 hover:opacity-100 focus:outline-none`}
    >
      {targetLocale === 'en' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageSwitcher;

