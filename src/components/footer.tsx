const Footer = () => {
  return (
    <footer className="flex justify-center bg-petroleo500">
      <div className="grid items-center content-center gap-5 bg-base-300 text-base-content h-[480px] w-[1440px]">
        <div className="flex justify-between bg-petroleo500 text-white p-4 bg-base-300 text-base-content">
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
            <div className="flex gap-x-4">
              <a href="https://www.facebook.com/">
                <div
                  style={{
                    backgroundImage: "url('icons/Facebook.svg')",
                    backgroundPositionX: "50%",
                    backgroundPositionY: "6%",
                  }}
                  className="h-[40px] w-[40px]"
                ></div>
              </a>
              <a href="https://twitter.com/">
                <div
                  style={{
                    backgroundImage: "url('icons/Twitter.svg')",
                    backgroundPositionX: "50%",
                    backgroundPositionY: "6%",
                  }}
                  className="h-[40px] w-[40px]"
                ></div>
              </a>
              <a href="https://www.instagram.com/">
                <div
                  style={{
                    backgroundImage: "url('icons/Instagram.svg')",
                    backgroundPositionX: "50%",
                    backgroundPositionY: "6%",
                  }}
                  className="h-[40px] w-[40px]"
                ></div>
              </a>
            </div>
          </div>
          <div className="flex gap-[90px]">
            <div className="flex flex-col gap-y-8">
              <h1 className="font-jakartaSansBold text-[20px]">Products</h1>
              <ul className="grid gap-y-8">
                <li>SEIZ</li>
                <li>Notery</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-8">
              <h1 className="font-jakartaSansBold text-[20px]">About</h1>
              <ul className="grid gap-y-8">
                <li>Quienes somos</li>
                <li>Por qué lo hacemos</li>
                <li>Meet our team</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-[100%]">
          <div className="h-full bg-white w-[100%]" />
        </div>
        <div className="flex justify-between text-[14px]">
          <p className="text-white p-4 bg-petroleo500">
            © 2022 Atix. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <p className="text-white p-4 bg-petroleo500">Privacy Policy</p>
            <p className="text-white p-4 bg-petroleo500">
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
