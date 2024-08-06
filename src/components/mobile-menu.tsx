import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  texts: string[];
  locale?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, texts = [], locale = '' }) => {
  const textColor = "text-white";
  const bgColor = "bg-[#25255CEE]";

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
          className={`fixed inset-0 z-50 ${bgColor} flex flex-col justify-center items-center overflow-hidden`}
        >
          <button onClick={onClose} className="absolute top-[25px] right-[25px]">
            <img src="../icons/Close.svg" alt="close" />
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
