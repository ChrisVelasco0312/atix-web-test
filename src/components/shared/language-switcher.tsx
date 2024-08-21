import { astroI18n, l } from "astro-i18n";
import { motion } from "framer-motion";

const LanguageSwitcher = ({
  darkBackground,
  mode
}: {
  darkBackground?: boolean,
  mode: "button" | "link"
}) => {
  const currentLocale = astroI18n.locale;
  const targetLocale = currentLocale === 'en' ? 'es' : 'en';

  const handleLanguageChange = () => {
    const newPath = l(window.location.pathname, {}, { targetLocale });
    window.location.href = newPath;
  };

  const buttonClasses = darkBackground
    ? 'bg-white text-petroleo500'
    : 'bg-blue-500 text-white';

  const handleLinkClick = (targetLocaleStr: 'es' | 'en') => {
    const newPath = l(window.location.pathname, {}, { targetLocale: targetLocaleStr });
    window.location.href = newPath;
  };

  if (mode === 'button') {
    return (
      <button
        onClick={handleLanguageChange}
        className={`${buttonClasses} p-4 rounded-full font-jakartaSansBold fixed bottom-4 transition duration-300 ease-in-out right-4 transform hover:scale-105 opacity-40 hover:opacity-100 focus:outline-none`}
      >
        {targetLocale === 'en' ? 'EN' : 'ES'}
      </button>
    );
  }

  return (
    <div>
      <ul className="lg:flex select-none items-center gap-[10px] hidden">
        <motion.li
          className={`cursor-pointer ${currentLocale === 'es' ? 'text-blue-500 font-jakartaSansBold' : ''}`}
          onClick={() => handleLinkClick('es')}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: currentLocale === 'es' ? 1 : 0.6 }}
          transition={{ duration: 0.2 }}
        >
          ESP
        </motion.li>
        |
        <motion.li
          className={`cursor-pointer ${currentLocale === 'en' ? 'text-blue-500 font-jakartaSansBold' : ''}`}
          onClick={() => handleLinkClick('en')}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: currentLocale === 'en' ? 1 : 0.6 }}
          transition={{ duration: 0.2 }}
        >
          ENG
        </motion.li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;

