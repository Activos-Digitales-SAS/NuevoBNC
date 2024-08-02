import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importa las imágenes desde el directorio assets
import servicio1 from '../assets/servicio1.jpeg';
import servicio2 from '../assets/servicio2.jpeg';
import servicio3 from '../assets/servicio3.jpeg';
import servicio4 from '../assets/servicio4.jpeg';
import servicio5 from '../assets/servicio5.jpeg';
import servicio6 from '../assets/servicio6.jpeg';

const services = [
  {
    title: 'AWS ElastiCache',
    description: 'Ofrecemos servicios avanzados de AWS ElastiCache para optimizar el rendimiento de sus aplicaciones.',
    image: servicio1,
  },
  {
    title: 'BaaS',
    description: 'Nuestros servicios de BaaS garantizan la seguridad y disponibilidad de sus datos, como la de sus clientes.',
    image: servicio2,
  },
  {
    title: 'AI y ML',
    description: 'Implementamos soluciones de AI y ML para ayudar a su empresa a aprovechar el poder de la inteligencia artificial.',
    image: servicio3,
  },
  {
    title: 'SECaaS',
    description: 'Nuestros servicios de Seguridad como Servicio (SECaaS) protegen su infraestructura contra amenazas avanzadas.',
    image: servicio4,
  },
  {
    title: 'RPA',
    description: 'Automatizamos procesos empresariales utilizando tecnologías avanzadas de RPA.',
    image: servicio5,
  },
  {
    title: 'IoT',
    description: 'Conectamos y controlamos dispositivos inteligentes para mejorar la eficiencia y la innovación.',
    image: servicio6,
  },
];

const CardDeal = () => {
  const [slidePercentage, setSlidePercentage] = useState(100);

  useEffect(() => {
    const updateSlidePercentage = () => {
      setSlidePercentage(window.innerWidth > 768 ? 33.33 : 100);
    };

    window.addEventListener('resize', updateSlidePercentage);
    updateSlidePercentage();

    return () => window.removeEventListener('resize', updateSlidePercentage);
  }, []);

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open('https://wa.link/irfqq9', '_blank');
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-32">
      <div className="text-center mb-8 space-y-6 pb-28">
        <h2 className="font-bold text-4xl md:text-5xl text-black">Descubre Nuestras Soluciones</h2>
        <a
          href="https://wa.link/irfqq9"
          className="inline-block px-6 py-2 bg-[#6b6f7c] text-white rounded-lg shadow-lg hover:bg-[#5a5d69] transition duration-300 ease-in-out text-lg"
          onClick={handleWhatsAppClick}
        >
          Comprar por WhatsApp
        </a>
      </div>
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={3000}
        showStatus={false}
        showIndicators={true}
        centerMode={true}
        centerSlidePercentage={slidePercentage}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between h-full transition transform hover:scale-105 mx-2"
          >
            <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-lg text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CardDeal;
