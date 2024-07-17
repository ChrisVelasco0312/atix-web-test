const Navbar = ({
  mode = "dark"
}: { mode?: "light" | "dark" }) => {
  const textColor = mode === "dark" ? "text-white" : "text-purple500";
  return (
    <nav className="flex justify-between py-[22px]">
      <a href="/">
        <img src={`../logos/${mode === "dark" ? "logo-atix" : "logo-atix-dark"}.svg`} alt="logo" />
      </a>
      <ul className={`flex items-center gap-[23px] ${textColor}`}>
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
