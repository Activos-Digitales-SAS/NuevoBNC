import { motion } from 'framer-motion';
import folderIcon from "../assets/robot2.webp"; // Asegúrate de reemplazar esto con la imagen adecuada

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } }
};

const buttonVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75, delay: 0.5 } },
  hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } }
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
          >
            Comience Ahora
          </motion.button>
          <motion.button 
            className="border border-[#6b6f7c] text-[#6b6f7c] px-6 py-2 rounded-lg shadow-lg hover:bg-[#6b6f7c] hover:text-white transition duration-300 ease-in-out"  // Añadir sombra y efecto hover
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Solicite una Demostración
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
