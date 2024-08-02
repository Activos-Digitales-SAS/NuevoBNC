import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { close, menu } from "../assets";
import logo2 from "../assets/logo.png";
import uiafIcon from "../assets/sagrilaft.png"; // Asegúrate de que la ruta a la imagen sea correcta
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const linkRoutes = {
    "Home": { path: "/", external: false },
    "Contacto": { path: "https://wa.link/irfqq9", external: true },
    "KYC": { path: "/kyc", external: false },
    "SAGRILAFT": { path: "/sagrilaft", external: false }
  };

  const handleLinkClick = (title, linkInfo) => {
    setActive(title);
    if (!linkInfo.external) {
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between py-6 px-8 bg-gradient-to-r from-white via-gray-100 to-white shadow-lg">
      <div className="flex items-center">
        <img src={logo2} alt="Logo 2" className="w-8 h-8 mr-2" />
        <span className="text-black font-semibold text-lg">BNC GROUP</span>
      </div>
      <ul className="hidden sm:flex flex-1 justify-center items-center space-x-10">
        {Object.entries(linkRoutes).map(([title, { path, external }], index) => (
          title !== "SAGRILAFT" && (
            <li
              key={index}
              className={`text-sm font-medium cursor-pointer ${
                active === title ? "text-[#6b6f7c] glow" : "text-black"
              } hover:text-[#6b6f7c] hover:glow transition-all duration-300`}
              onClick={() => handleLinkClick(title, linkRoutes[title])}
            >
              {external ? (
                <a href={path} className="relative" target="_blank" rel="noopener noreferrer">
                  <span
                    className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#6b6f7c] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${
                      active === title ? "after:scale-x-100 after:origin-left" : ""
                    }`}
                  >
                    {title}
                  </span>
                </a>
              ) : (
                <Link to={path} className="relative">
                  <span
                    className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#6b6f7c] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${
                      active === title ? "after:scale-x-100 after:origin-left" : ""
                    }`}
                  >
                    {title}
                  </span>
                </Link>
              )}
            </li>
          )
        ))}
      </ul>
      <div>
        <Link
          to={linkRoutes["SAGRILAFT"].path}
          className="text-white bg-gradient-to-r from-[#4a4f5d] to-[#3a3f4d] px-8 py-4 rounded-full text-lg shadow-lg hover:from-[#5a5f6d] hover:to-[#4a4f5d] hover:shadow-xl hover:glow transition-all duration-300 flex items-center space-x-3"
        >
          <div className="flex items-center">
            <img src={uiafIcon} alt="UIAF Icon" className="w-8 h-8 rounded-full border-2 border-white" />
            <span className="ml-3 text-white text-lg font-bold">SAGRILAFT</span>
          </div>
        </Link>
      </div>
      <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-6 h-6 object-contain"
          onClick={() => setToggle(!toggle)}
          style={{ filter: 'invert(1)' }} // Fuerza que el ícono sea oscuro
        />
      </div>
      <div
        className={`${!toggle ? "hidden" : "flex"} p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar shadow-2xl`}
      >
        <ul className="list-none flex flex-col justify-end items-start flex-1">
          {Object.entries(linkRoutes).map(([title, { path, external }], index) => (
            <li
              key={index}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === title ? "text-[#6b6f7c] glow" : "text-black"
              } hover:text-[#6b6f7c] hover:glow transition-all duration-300 ${
                index === Object.keys(linkRoutes).length - 1 ? "mb-0" : "mb-4"
              }`}
              onClick={() => handleLinkClick(title, linkRoutes[title])}
            >
              {external ? (
                <a href={path} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              ) : (
                <Link to={path}>{title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
