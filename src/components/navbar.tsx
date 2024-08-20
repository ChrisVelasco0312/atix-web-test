import { useState, useEffect } from 'react';
import MobileMenu from './mobile-menu';
import { astroI18n, t } from "astro-i18n";

const Navbar = ({
  mode = "dark",
}: { mode?: "light" | "dark" }) => {
  const locale = astroI18n.locale === "es" ? "/es" : "";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mouseTriggered, setMouseTriggered] = useState(false);
  const textColor = mode === "dark" ? "text-white" : "text-purple500";

  const navbar = {
    products: t("navbar.products"),
    about: t("navbar.about"),
    contact: t("navbar.contact")
  };

  useEffect(() => {
    let hideTimer: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setIsScrolled(true);
        setIsHidden(false); // Show navbar when scrolling
        clearTimeout(hideTimer);

        hideTimer = setTimeout(() => {
          setIsHidden(true); // Hide navbar after 2 seconds of no scroll
        }, 2000);
      } else {
        setIsScrolled(false);
        setIsHidden(false); // Keep navbar visible at the top of the page
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientY <= 50) { // If the mouse is near the top 50px of the viewport
        setIsHidden(false);
        setMouseTriggered(true);
      }
    };

    const handleMouseLeaveTop = () => {
      if (mouseTriggered && isScrolled) { // Only re-hide if the navbar was made visible by a mouse event and user has scrolled
        hideTimer = setTimeout(() => {
          setIsHidden(true);
        }, 2000); // Re-hide after 2 seconds if mouse leaves the top
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeaveTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeaveTop);
      clearTimeout(hideTimer);
    };
  }, [mouseTriggered, isScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50
    transition-opacity duration-1000 ease-in-out 
    ${isScrolled ? 'bg-white bg-opacity-90' : 'bg-transparent'}
    ${isScrolled ? 'text-purple500' : textColor}
    ${isHidden && !isHovering ? 'opacity-0 pointer-events-none' : 'opacity-100'}
  `;

  return (
    <>
      <nav
        className={`${navbarClasses} flex justify-between lg:py-[22px] py-[20px] lg:px-[50px] px-[30px]`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <a className="flex items-center" href={`${locale.includes("es") ? "/es" : "/"}`}>
          <img
            className="lg:w-auto lg:h-auto w-[81px] h-[31px]"
            src={`../../logos/${isScrolled || mode === "light" ? "logo-atix-dark" : "logo-atix"}.svg`}
            alt="logo"
          />
        </a>
        <ul className={`lg:flex items-center gap-[23px] hidden`}>
          <li className="p-4">
            <a href={`${locale.includes("es") ? "/es#products" : "/#products"}`}>
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
            <img
              src={`../../icons/${isScrolled || mode === "light" ? "menu-dark" : "menu"}.svg`}
              alt="menu"
            />
          </button>
        </div>
      </nav>
      <div className="h-[82px]"></div> {/* Spacer to prevent content from jumping when navbar becomes fixed */}
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
