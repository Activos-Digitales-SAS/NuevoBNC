import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Asegúrate de haber instalado SweetAlert2
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
    if (title === "SAGRILAFT") {
      showSagrilaftAlert();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const showSagrilaftAlert = () => {
    Swal.fire({
      title: 'Normativa de Prevención de LA/FT',
      imageUrl: uiafIcon, // Reemplaza el ícono con la imagen
      imageWidth: 50,
      imageHeight: 50,
      imageAlt: 'SAGRILAFT',
      html: `
        <p>En la Organización BNC GROUP, estamos comprometidos con la puesta en marcha de acciones que permitan tener operaciones comerciales de venta, compra, intermediación y/o custodia de Activos Virtuales, disminuyendo los riesgos frente al Lavado de Activos y/o Financiación del Terrorismo LA/FT.</p>
        <p>Esta necesidad responde a que, en la actualidad, en nuestro país es necesario establecer algunos procedimientos, controles y reportes en las Personas naturales y/o Jurídicas que realicen actividades comerciales con Activos Virtuales (AV), para la prevención de actividades delictivas.</p>
        <p>Ante la amenaza que sobre ellos alza la delincuencia internacional en cualquiera de sus expresiones: terrorismo, lavado de activos, corrupción administrativa, etc., que obliga a que cada vez más numerosos los entes obligados a adoptar medidas de prevención, detección y control del lavado de activos.</p>
        <p>El uso de activos virtuales (AV) en la economía representa un desafío para la prevención y el combate al lavado de activos (LA) y el financiamiento del terrorismo (FT). Colombia no cuenta con una legislación que regule explícitamente los AV. Sin embargo, existen normas generales, como la Ley de Financiamiento (Ley 1943 de 2018), que otorgan beneficios fiscales a las empresas que participan en el desarrollo de valor agregado tecnológico.</p>
        <p>Por su parte, la Unidad de Información y Análisis Financiero (UIAF) emitió la Resolución 314 de 2021, del 15 de diciembre de 2021. Con esta Resolución, la UIAF implementó la obligación de reporte a los proveedores de servicios de activos virtuales. La resolución 314 se aplica a las personas naturales o jurídicas que realicen por cuenta propia o por cuenta de otra persona natural o jurídica actividades u operaciones, cualquiera que sea su cuantía, relacionadas con:</p>
        <ul>
          <li>Intercambio entre AV y monedas fiduciarias e intercambio de monedas fiduciarias a activos virtuales;</li>
          <li>Intercambio entre una o más formas de AV;</li>
          <li>Transferencias de AV;</li>
          <li>Custodia o administración de AV o instrumentos que permitan el control de AV;</li>
          <li>Participación y provisión de servicios financieros relacionados con la oferta o venta de un AV; por parte de un emisor;</li>
          <li>En general, los servicios relacionados con AV.</li>
        </ul>
        <p>De este modo, la Organización BNC GROUP, establecida como PROVEEDOR DE SERVICIOS DE ACTIVOS VIRTUALES – PSAV ante la Unidad de Información y Análisis Financiero – UIAF e integrante de un sector de economía transaccional formal de nivel nacional e internacional, cuya misión es la de adherirse al compromiso de Colombia con el GAFILAT - Grupo de Acción Financiera de Latinoamérica, para mitigar los riesgos de LA/FT que se presentan en virtud de las operaciones con AV y las actividades que realizamos los PSAV, destacando la importancia de contar con mecanismos de detección, seguimiento, monitoreo y control mediante la puesta en marcha de un SISTEMA DE AUTOCONTROL Y GESTIÓN DEL RIESGO INTEGRAL DE LAVADO DE ACTIVOS, FINANCIACIÓN DEL TERRORISMO Y FINANCIAMIENTO DE LA PROLIFERACIÓN DE ARMAS DE DESTRUCCIÓN MASIVA - SAGRILAFT LA/FT/FPADM.</p>
        <p>Por lo anterior y con ocasión de su naturaleza (PSAV); la Organización BNC GROUP, aunque NO está obligada a la implementación de un SISTEMA DE AUTOCONTROL Y GESTIÓN DEL RIESGO INTEGRAL DE LAVADO DE ACTIVOS, FINANCIACIÓN DEL TERRORISMO Y FINANCIAMIENTO DE LA PROLIFERACIÓN DE ARMAS DE DESTRUCCIÓN MASIVA - SAGRILAFT LA/FT/FPADM, ha decidido de manera voluntaria implementar dicho sistema, que le permita dar cumplimiento a lo establecido en la Resolución 314 de 2021, del 15 de diciembre de 2021 emanada por la Unidad de Información y Análisis Financiero – UIAF y la Circular 100-000016 de 24 de diciembre de 2020 de la Superintendencia de Sociedades.</p>
      `,
      icon: 'info',
      confirmButtonText: 'Aceptar',
      width: '800px',
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
        <button
          onClick={() => handleLinkClick("SAGRILAFT", linkRoutes["SAGRILAFT"])}
          className="text-white bg-gradient-to-r from-[#4a4f5d] to-[#3a3f4d] px-8 py-4 sm:px-6 sm:py-3 rounded-full text-lg shadow-lg hover:from-[#5a5f6d] hover:to-[#4a4f5d] hover:shadow-xl hover:glow transition-all duration-300 flex items-center space-x-3"
        >
          <div className="flex items-center">
            <img src={uiafIcon} alt="UIAF Icon" className="w-8 h-8 rounded-full border-2 border-white" />
            <span className="ml-3 text-white text-lg font-bold">SAGRILAFT</span>
          </div>
        </button>
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
