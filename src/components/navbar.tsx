const Navbar = () => {
  return (
    <nav className="flex justify-between py-[22px]">
      <img src="logos/logo-atix.svg" alt="logo" />
      <ul className="flex gap-4 text-white">
        <li>
          <a className="text-white" href="#">
            Products
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
