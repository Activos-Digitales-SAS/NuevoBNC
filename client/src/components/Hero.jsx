import React from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import folderIcon from "../assets/robot2.webp"; // Asegúrate de reemplazar esto con la imagen adecuada
import uiafIcon from "../assets/sagrilaft.png"; // Asegúrate de que la ruta a la imagen sea correcta
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } }
};

const buttonVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75, delay: 0.5 } },
  hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } }
};

const handleContactClick = () => {
  Swal.fire({
    title: 'Ingrese su número de teléfono',
    input: 'text',
    inputPlaceholder: 'Número de teléfono con indicativo del país',
    text: 'Nuestros Asesores te contactarán en minutos',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#6b6f7c',
    cancelButtonColor: '#d33',
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor ingrese un número de teléfono';
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí puedes manejar el envío del número de teléfono, por ejemplo, enviarlo a una API
      Swal.fire('¡Gracias!', 'Hemos recibido tu solicitud. Uno de nuestros asesores se pondrá en contacto contigo pronto.', 'success');
    }
  });
};

const handleReadMoreClick = () => {
  Swal.fire({
    title: 'Normativa de Prevención de LA/FT',
    imageUrl: uiafIcon, // Utiliza la imagen adecuada
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
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#6b6f7c',
    width: '800px',
  });
};

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
      {/* Left Side - Text and Buttons */}
      <div className="flex-1 flex flex-col items-start text-left space-y-6">
        <motion.h1 
          className="font-bold text-4xl md:text-5xl text-black"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          Proveedores de Activos Virtuales
          Socio Confiable en AWS y Seguridad
        </motion.h1>
        
        <motion.p 
          className="text-gray-600 max-w-md"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          Gestionamos servicios avanzados en AWS ElastiCache, BaaS, AI y ML, y SECaaS para mejorar su infraestructura tecnológica y garantizar la seguridad.
        </motion.p>
        
        <div className="flex space-x-4">
          <motion.button 
            className="bg-[#6b6f7c] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#5a5d69] transition duration-300 ease-in-out"  // Añadir sombra y efecto hover
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={handleReadMoreClick}  // Llama a la función SweetAlert para Leer Normativa
          >
            Leer Normativa
          </motion.button>
          <motion.button 
            className="border border-[#6b6f7c] text-[#6b6f7c] px-6 py-2 rounded-lg shadow-lg hover:bg-[#6b6f7c] hover:text-white transition duration-300 ease-in-out"  // Añadir sombra y efecto hover
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={handleContactClick} // Llama a la función SweetAlert para Contacto
          >
            Hablar con un Asesor
          </motion.button>
        </div>

        {/* Statistics */}
        <div className="flex space-x-8 pt-4">
          <div className="text-center">
            <p className="text-xl font-bold text-black">50+</p>
            <p className="text-sm text-gray-600">Países Alcanzados</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-black">300+</p>
            <p className="text-sm text-gray-600">Integraciones de AI y ML</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-black">10K+</p>
            <p className="text-sm text-gray-600">Activos Virtuales Gestionados</p>
          </div>
        </div>

      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        <motion.img 
          src={folderIcon} 
          alt="icono de activos virtuales" 
          className="w-80 md:w-[32rem] rounded-lg shadow-lg"  // Redondea los bordes de la imagen y añade sombra
          variants={textVariant}
          initial="hidden"
          animate="visible"
        />
      </div>
    </section>
  );
};

export default Hero;
