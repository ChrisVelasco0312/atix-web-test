import { useState } from 'react';
import MobileMenu from './mobile-menu';
import { astroI18n, t } from "astro-i18n";


const Navbar = ({
  mode = "dark",
}: { mode?: "light" | "dark" }) => {
  const locale = astroI18n.locale === "es" ? "/es" : "";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textColor = mode === "dark" ? "text-white" : "text-purple500";
  const navbar = {
    products: t("navbar.products"),
    about: t("navbar.about"),
    contact: t("navbar.contact")
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between lg:py-[22px] py-[30px] lg:p-0 ">
        <a href={locale}>
          <img className="lg:w-auto lg:h-auto w-[81px] h-[31px]" src={`../logos/${mode === "dark" ? "logo-atix" : "logo-atix-dark"}.svg`} alt="logo" />
        </a>
        <ul className={`lg:flex items-center gap-[23px] ${textColor} hidden`}>
          <li className="p-4">
            <a className={`${textColor}`} href={`${locale.includes("es") ? "/es#products" : "/#products"}`}>
              {navbar.products}
            </a>
          </li>
          <li className="p-4">
            <a href={`${locale}/about`}>
              {navbar.about}
            </a>
          </li>
          <li className="p-4">
            <a href={`${locale}/contact`}>
              {navbar.contact}
            </a>
          </li>
        </ul>
        <div className="flex lg:hidden">
          <button onClick={toggleMenu}>
            <img src={`../icons/${mode === "dark" ? "menu" : "menu-dark"}.svg`} alt="menu" />
          </button>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        texts={[navbar.products, navbar.about, navbar.contact]}
        locale={locale}
      />
    </>
  );
};

export default Navbar;
