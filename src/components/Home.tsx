import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Encabezado */}
      <header className="home-header">
        <div className="logo">
          
          <h1>Task Pro</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#features">Características</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Sección principal */}
      <section className="hero-section">
        <h2>Organiza tus Tareas de Manera Eficaz</h2>
        <p>Con Task Pro, tendrás todo bajo control, ¡sin estrés!</p>
        <Link to="/tareas">
            <button className="cta-button">Comienza Ahora</button>
        </Link>
      </section>

    
      {/* Características */}
      <section id="features" className="features-section">
        <h3>Características</h3>
        <div className="feature-cards">
          <div className="feature-card">
            <h4>Organización</h4>
            <p>Agrega, edita y organiza tus tareas fácilmente.</p>
          </div>
          <div className="feature-card">
            <h4>Recordatorios</h4>
            <p>Recibe notificaciones para que nunca olvides tus tareas.</p>
          </div>
          <div className="feature-card">
            <h4>Estadísticas</h4>
            <p>Visualiza tu progreso con gráficos claros y concisos.</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonials" className="testimonials-section">
        <h3>Lo que dicen nuestros usuarios</h3>
        <div className="testimonials">
          <blockquote>
            <p>¡Me encanta Task Pro! Me ayuda a mantenerme enfocado y organizado.</p>
            <footer>- Juan Pérez</footer>
          </blockquote>
          <blockquote>
            <p>La funcionalidad de recordatorios me ha cambiado la vida.</p>
            <footer>- María López</footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <p>&copy; 2025 Task Pro. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
