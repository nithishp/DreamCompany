import React from "react";
import favicon from "../persnalAsset/logo-wbg.png";
import { navLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container flex items-center justify-center">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-center">
          <a href="/">
            <img
              src={favicon}
              height={70}
              width={70}
              className="size-32 object-cover"
            />
          </a>
          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white transition text-xl hover:text-white/75"
                >
                  {item.label}
                </a>
              </li>
            ))}

       
          </ul>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            &copy; DreamCompany 2024. All rights reserved.
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  onClick={() => window.open(icon.href)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
