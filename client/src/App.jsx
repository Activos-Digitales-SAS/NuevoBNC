import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from "./style";
import { Billing, Business, CardDeal, Footer, Navbar, Hero } from "./components";
import PreguntasFrecuentesPersonalizadas from "./components/PreguntasFrecuentesPersonalizadas";
import Aliados from "./components/Aliados";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import CEO from "./components/CEO";
import FormJuridicos from "./components/FormJuridicos/FormJuridicos";
import FormPersonas from "./components/FormPersonas/FormPersonas";
import KYC from "./components/KYC/KYC";
import AdministradorPanel from "./components/Administrador/AdministradorPanel/AdministradorPanel";
import Login from "./components/Login/Login";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <div className={` ${styles.flexStart} mb-10`}>  {/* Añadido mb-10 */}
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter} space-y-10`}> {/* Añadido space-y-10 */}
              <div className={`${styles.boxWidth}`}>
                <Business />
                <Billing />
                <CardDeal />
              </div>
            </div>
          </>
        } />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/ceo-fundador" element={<CEO />} />
        <Route path="/preguntas" element={<PreguntasFrecuentesPersonalizadas />} />
        <Route path="/aliados" element={<Aliados />} />
        <Route path="/juridicos" element={<FormJuridicos />} />
        <Route path="/personas" element={<FormPersonas />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/administrador"
          element={<ProtectedRoute component={AdministradorPanel} isAuthenticated={isAuthenticated} />}
        />
      </Routes>

      <div className={`${styles.paddingX} ${styles.flexCenter} mt-20`}>  {/* Añadido mt-20 */}
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
