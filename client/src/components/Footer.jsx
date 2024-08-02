import React from 'react';
import logo from "../assets/logo.png";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className="bg-white text-black py-10 flex flex-col items-center">
    <div className="w-full max-w-6xl mb-8 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
      
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <ul className="list-none space-y-4">
          <li className="flex items-center justify-center md:justify-start">
            <span className="font-semibold mr-2">Municipio:</span> Cúcuta
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="font-semibold mr-2">Correo:</span> bncgroupsas@gmail.com
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="font-semibold mr-2">Teléfono:</span> 3011376175
          </li>
        </ul>
      </div>


      {/* Columna 1: Logo y descripción a la derecha */}
     
      {/* Columna 2: Encabezado y primera mitad de la información de contacto */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h4 className="font-bold text-[18px] leading-[27px] mb-4">
          ¿Tienes Preguntas? Escríbelas a continuación y te contactaremos
        </h4>
        <ul className="list-none space-y-4">
          <li className="flex items-center justify-center md:justify-start">
            <span className="font-semibold mr-2">Dirección:</span> CL 5 Nro. 13 - 19 - Colsag
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="font-semibold mr-2">País:</span> Colombia
          </li>
        </ul>
      </div>

      {/* Columna 3: Segunda mitad de la información de contacto */}
      <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
        <img
          src={logo}
          alt="logo de la empresa"
          className="w-[200px] h-[72.14px] object-contain mb-4"
        />
        <p className="text-gray-700 max-w-[312px]">
          Conectando el presente con el futuro financiero. Tu puente hacia la innovación en activos digitales.
        </p>
      </div>

    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-gray-300">
      <p className="text-center text-[16px] text-gray-700">
        Copyright Ⓒ 2024 BNC GROUP. Todos los Derechos Reservados.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
