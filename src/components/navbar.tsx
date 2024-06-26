const Navbar = () => {
  return (
    <nav className="flex justify-between py-[22px]">
      <a href="/">
        <img src="logos/logo-atix.svg" alt="logo" />
      </a>
      <ul className="flex items-center gap-[23px] text-white">
        <li className="p-4">
          <a className="text-white" href="#products">
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
