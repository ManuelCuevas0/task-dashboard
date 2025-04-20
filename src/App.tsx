import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CalendarioTareas from './pages/ConfiguracionPage'; 
import EstadisticasPage from './pages/EstadisticasPage'; 
import TareasPage from './pages/TareasPage'; 
import HomePage from './pages/HomePage'; 

function App() {
  return (
    <Router>
      <Navbar /> {/* Barra lateral */}
      <div className="content">
        <Routes>
        <Route path="/home" element={<HomePage />} />
          <Route path="/tareas" element={<TareasPage />} />
          <Route path="/estadisticas" element={<EstadisticasPage />} />
          <Route path="/calendario" element={<CalendarioTareas />} />
          <Route path="/" element={<HomePage />} /> {/* Ruta predeterminada */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
