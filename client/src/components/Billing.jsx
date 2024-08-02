import React from 'react';
import { motion } from 'framer-motion';
import sagrilaft from "../assets/sagrilaft.png";
import styles, { layout } from "../style";
import Swal from 'sweetalert2';

const Billing = () => {

  const handleLegalAlert = () => {
    Swal.fire({
      title: 'Compromiso SAGRILAFT',
      imageUrl: sagrilaft,
      imageWidth: window.innerWidth > 768 ? 400 : 200,
      imageAlt: 'Compromiso SAGRILAFT',
      html: `
      <p>En la <strong>Organización BNC GROUP</strong>, estamos comprometidos con la puesta en marcha de acciones que permitan tener operaciones comerciales de venta, compra, intermediación y/o custodia de Activos Virtuales, disminuyendo los riesgos frente al Lavado de Activos y/o Financiación del Terrorismo LA/FT.</p>
      <p>Esta necesidad responde a que, en la actualidad, en nuestro país es necesario establecer algunos procedimientos, controles y reportes en las Personas naturales y/o Jurídicas que realicen actividades comerciales con Activos Virtuales (AV), para la prevención de actividades delictivas.</p>
      <p>Ante la amenaza que sobre ellos alza la delincuencia internacional en cualquiera de sus expresiones: terrorismo, lavado de activos, corrupción administrativa, etc., que obliga a que cada vez más numerosos los entes obligados a adoptar medidas de prevención, detección y control del lavado de activos.</p>
      <p>El uso de activos virtuales (AV) en la economía representa un desafío para la prevención y el combate al lavado de activos (LA) y el financiamiento del terrorismo (FT). Colombia no cuenta con una legislación que regule explícitamente los AV. Sin embargo, existen normas generales, como la Ley de Financiamiento (Ley 1943 de 2018), que otorgan beneficios fiscales a las empresas que participan en el desarrollo de valor agregado tecnológico.</p>
      <p>Por su parte, la Unidad de Información y Análisis Financiero (UIAF) emitió la Resolución 314 de 2021, del 15 de diciembre de 2021. Con esta Resolución, la UIAF implementó la obligación de reporte a los proveedores de servicios de activos virtuales. La resolución 314 se aplica a las personas naturales o jurídicas que realicen por cuenta propia o por cuenta de otra persona natural o jurídica actividades u operaciones, cualquiera que sea su cuantía, relacionadas con: 
      <ul>
        <li><strong>a)</strong> Intercambio entre AV y monedas fiduciarias e intercambio de monedas fiduciarias a activos virtuales;</li>
        <li><strong>b)</strong> Intercambio entre una o más formas de AV;</li>
        <li><strong>c)</strong> Transferencias de AV;</li>
        <li><strong>d)</strong> Custodia o administración de AV o instrumentos que permitan el control de AV;</li>
        <li><strong>e)</strong> Participación y provisión de servicios financieros relacionados con la oferta o venta de un AV; por parte de un emisor;</li>
        <li><strong>f)</strong> En general, los servicios relacionados con AV.</li>
      </ul>
      </p>`,
      confirmButtonText: 'Entendido',
      width: '90%',
      customClass: {
        popup: 'formatted-text'
      }
    });
  };

  return (
    <section 
      id="product" 
      className={`${layout.sectionReverse} bg-white rounded-lg p-8 mt-20`}
    >
      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <img src={sagrilaft} alt="SAGRILAFT" className="w-[80%] mx-auto" />
      </motion.div>

      <motion.div 
        className="flex-1 text-left flex flex-col justify-center" // Asegura el centrado vertical
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        style={{ paddingLeft: '40px' }} // Ajusta el padding a la izquierda para mayor separación
      >
        <h2 className="text-5xl font-bold text-black">
          Protección Jurídica en <br className="sm:block hidden" /> Cada Operación de Activos Virtuales
        </h2>
        <p className="text-lg text-gray-700 my-6 max-w-[470px]">
          Cumplimos con las normativas SAGRILAFT para asegurar la integridad y seguridad de tus transacciones de activos virtuales. Protegemos tu inversión con los más altos estándares de seguridad del sector.
        </p>
        <div className="flex items-center space-x-4">
          <a 
            href="#more-info" 
            className="text-lg font-semibold text-gray-700 underline underline-offset-4 hover:text-gray-800"
            onClick={handleLegalAlert}
          >
            Conozca más &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Billing;
