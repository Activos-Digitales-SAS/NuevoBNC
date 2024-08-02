import React from 'react';
import { FaAws, FaDatabase, FaBrain, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    title: 'AWS ElastiCache',
    description: 'Ofrecemos servicios avanzados de AWS ElastiCache para optimizar el rendimiento de sus aplicaciones.',
    icon: <FaAws className="text-yellow-500" size={40} />
  },
  {
    title: 'BaaS',
    description: 'Nuestros servicios de BaaS (Backup as a Service) garantizan la seguridad y disponibilidad de sus datos.',
    icon: <FaDatabase className="text-blue-400" size={40} />
  },
  {
    title: 'AI y ML',
    description: 'Implementamos soluciones de AI y ML para ayudar a su empresa a aprovechar el poder de la inteligencia artificial.',
    icon: <FaBrain className="text-purple-700" size={40} />
  },
  {
    title: 'SECaaS',
    description: 'Nuestros servicios de Seguridad como Servicio (SECaaS) protegen su infraestructura contra amenazas avanzadas.',
    icon: <FaShieldAlt className="text-green-500" size={40} />
  },
];

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-semibold text-gray-900 mb-2">
      {title}
    </h4>
    <p className="text-gray-600 text-sm">
      {description}
    </p>
  </div>
);

const Business = () => (
  <section id="features" className="py-16 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">
        Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <FeatureCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default Business;
