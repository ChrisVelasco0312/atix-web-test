import React, { useState } from 'react';
import MobileMenu from './mobile-menu';

const Navbar = ({
  mode = "dark"
}: { mode?: "light" | "dark" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textColor = mode === "dark" ? "text-white" : "text-purple500";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between lg:py-[22px] py-[30px] lg:p-0 ">
        <a href="/">
          <img className="lg:w-auto lg:h-auto w-[81px] h-[31px]" src={`../logos/${mode === "dark" ? "logo-atix" : "logo-atix-dark"}.svg`} alt="logo" />
        </a>
        <ul className={`lg:flex items-center gap-[23px] ${textColor} hidden`}>
          <li className="p-4">
            <a className={`${textColor}`} href="/#products">
              Products
            </a>
          </li>
          <li className="p-4">
            <a href="/about">About</a>
          </li>
          <li className="p-4">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="flex lg:hidden">
          <button onClick={toggleMenu}>
            <img src="../icons/menu.svg" alt="menu" />
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} mode={mode} />
    </>
  );
};

export default Navbar;
