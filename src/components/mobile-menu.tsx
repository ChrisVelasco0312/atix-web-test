import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { astroI18n, l } from "astro-i18n";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  texts: string[];
  locale?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, texts = [], locale = '' }) => {
  const currentLocale = astroI18n.locale;
  const textColor = "text-white";
  const bgColor = "bg-[#25255CEE]";

  const handleLinkClick = (targetLocaleStr: 'es' | 'en') => {
    const newPath = l(window.location.pathname, {}, { targetLocale: targetLocaleStr });
    window.location.href = newPath;
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        y: { stiffness: 1000 }
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  const listVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 50,
      transition: {
        y: { stiffness: 1000 }
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  const handleLinkTranslations = (text: string) => {
    const translationsObject = {
      "Productos": "Products",
      "Acerca de atix": "About",
      "Contacto": "Contact",
    };
    if (locale === '/es') {
      text = `${translationsObject[text as keyof typeof translationsObject]}`;
    }


    if (text === 'Products' || text === 'Productos') {
      return `${locale.includes('es') ? "/es#products" : "/#products"}`;
    } else {
      return `${locale}/${text.toLowerCase()}`;
    }
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          onClick={(e) => e.stopPropagation()}
          className={`fixed inset-0 z-[200] ${bgColor} flex flex-col justify-center items-center overflow-hidden`}
        >
          <button onClick={onClose} className="absolute top-[25px] right-[25px]">
            <img src="../../icons/Close.svg" alt="close" />
          </button>
          <motion.ul
            variants={listVariants}
            className={`flex flex-col items-center gap-[72px] font-integralCF text-[28px] ${textColor}`}
          >
            {texts.map((item) => (
              <motion.li key={item} variants={itemVariants}>
                <a
                  className={`${textColor}`}
                  href={handleLinkTranslations(item)}
                  onClick={onClose}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div className='justify-self-end grid grid-flow-col gap-2 text-white absolute bottom-[50px] tracking-widest'>
            <motion.span
              className={`cursor-pointer ${currentLocale === 'es' ? 'text-blue-500 font-jakartaSansBold' : ''}`}
              onClick={() => handleLinkClick('es')}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: currentLocale === 'es' ? 1 : 0.6 }}
              transition={{ duration: 0.2 }}
            >
              ESP
            </motion.span>
            |
            <motion.span
              className={`cursor-pointer ${currentLocale === 'en' ? 'text-blue-500 font-jakartaSansBold' : ''}`}
              onClick={() => handleLinkClick('en')}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: currentLocale === 'en' ? 1 : 0.6 }}
              transition={{ duration: 0.2 }}
            >
              ENG
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
