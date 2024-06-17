const Footer = () => {
  return (
    <footer className="flex justify-between h-[480px] px-[60px] pt-[80px] bg-petroleo500 text-white p-4 bg-base-300 text-base-content">
      <div className="flex flex-col gap-10">
        <img
          className="w-[103px] h-[42px]"
          src="logos/atix-logo-white.svg"
          alt="atix-logo"
        />
        <p className="w-[292px] leading-[150%]">
          Our mission is to to help you enhance the effectiveness of your
          organization.
        </p>
        <div className="flex">
          <img
            className="h-[63px] w-[63px]"
            src="icons/Facebook.svg"
            alt="facebook"
          />
          <img
            className="h-[63px] w-[63px]"
            src="icons/Twitter.svg"
            alt="twitter"
          />
          <img
            className="h-[63px] w-[63px]"
            src="icons/Instagram.svg"
            alt="instagram"
          />
        </div>
      </div>
      <div className="flex gap-[90px]">
        <div className="flex flex-col gap-4">
          <h1>Products</h1>
          <ul>
            <li>SEIZ</li>
            <li>Notery</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1>About</h1>
          <ul>
            <li>Quienes somos</li>
            <li>Por qué lo hacemos</li>
            <li>Meet our team</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
