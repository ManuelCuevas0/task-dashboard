import React, { useState } from "react";
import { FaTasks, FaChartPie, FaCalendarAlt, FaHome} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
     <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <iframe
              src="https://giphy.com/embed/bqxbgri8lBSzvMVI3Y"
              title="Task Pro Logo"
              allowFullScreen
            ></iframe>
          </div>
          <span className="site-name">Task Pro</span>
        </div>

        <div className="menu-items">
          <Link to="/home" className="menu-item">
            <FaHome size={24} />
            <span className="menu-text">Home</span>
          </Link>
          <Link to="/tareas" className="menu-item">
            <FaTasks size={24} />
            <span className="menu-text">Tareas</span>
          </Link>
          <Link to="/estadisticas" className="menu-item">
            <FaChartPie size={24} />
            <span className="menu-text">Estadísticas</span>
          </Link>
          <Link to="/calendario" className="menu-item">
            <FaCalendarAlt size={24} />
            <span className="menu-text">Calendario</span>
          </Link>
        </div>
      </div>
      
      {/*
        <button className={`toggle-sidebar-btn ${isCollapsed ? "collapsed" : ""}`} onClick={toggleSidebar}>
          {isCollapsed ? "→" : "←"}
        </button>
      */}
    </>
  );
}

export default Navbar;
