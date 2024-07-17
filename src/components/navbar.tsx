const Navbar = ({
  mode = "dark"
}: { mode?: "light" | "dark" }) => {
  const textColor = mode === "dark" ? "text-white" : "text-purple500";
  return (
    <nav className="flex justify-between py-[22px] lg:px-0 px-[30px]">
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
    </nav>
  );
};

export default Navbar;
