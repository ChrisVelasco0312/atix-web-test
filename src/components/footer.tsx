import { astroI18n } from "astro-i18n";

const Footer = () => {
  const locale = astroI18n.locale === "es" ? "/es" : "";

  return (
    <footer className="flex justify-center bg-petroleo500">
      <div className="grid items-center content-center gap-10 h-[480px] w-[1440px]">
        <div className="flex lg:justify-between items-center lg:flex-row flex-col bg-petroleo500 text-white gap-y-8">
          <div className="flex flex-col gap-10 lg:items-start items-center">
            <img
              className="w-[103px] h-[42px]"
              src="../logos/atix-logo-white.svg"
              alt="atix-logo"
            />
            <p className="w-[292px] leading-[150%]">
              Our mission is to to help you enhance the effectiveness of your
              organization.
            </p>
            <div className="flex gap-x-4">
              <a href="https://www.linkedin.com/company/atix-digital" target="_blank">
                <img src="../icons/Linkedin.svg" alt="linkedin" />
              </a>
            </div>
          </div>
          <div className="flex lg:gap-[90px] gap-8 justify-items-center">
            <div className="flex flex-col gap-y-8">
              <a href={locale ? `${locale}#products` : `/#products`}>
                <h1 className="font-jakartaSansBold lg:text-[20px]">Products</h1>
              </a>
              <ul className="lg:grid hidden gap-y-8">
                <li>
                  <a href={`${locale}/seiz`}>
                    SEIZ
                  </a>
                </li>
                <li>
                  <a href="/notery">
                    Notery
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:flex flex-col gap-y-8">
              <a href={`${locale}/about`}>
                <h1 className="font-jakartaSansBold lg:text-[20px]">About</h1>
              </a>
              <ul className="lg:grid hidden gap-y-8">
                <li>
                  <a href={`${locale}/about#whoweare`}>
                    Who we are?
                  </a>
                </li>
                <li>
                  <a href={`${locale}/about#whywedoit`}>
                    Why we do it?
                  </a>
                </li>
                <li>
                  <a href={`${locale}/about#team`}>
                    Meet our team
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:hidden grid gap-y-8">
              <a href={`${locale}/contact`}>
                <h1 className="font-jakartaSansBold lg:text-[20px]">Contact</h1>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:block hidden h-[1px] w-[100%]">
          <div className="h-full bg-white w-[100%]" />
        </div>
        <div className="flex lg:justify-between justify-center text-[14px]">
          <p className="text-white bg-petroleo500">
            ©2024  ATIX DIGITAL. All rights reserved
          </p>
          <div className="hidden gap-4 ">
            <p className="text-white">Privacy Policy</p>
            <p className="text-white">Terms and Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
