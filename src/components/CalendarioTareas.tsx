import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendario.css";
import { useTasks } from "../hooks/useTasks";
import { Tarea } from "../context/TaskContext";

export default function CalendarioTareas() {
  const { filtradas, dispatch } = useTasks(); 
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date | null>(null);
  const [busqueda, setBusqueda] = useState<string>("");

  // Función para mezclar las tareas aleatoriamente
  const mezclarTareas = () => {
    dispatch({ type: "MIX_TAREAS" })
  };

  // Manejar el cambio de fecha
  const handleFechaChange = (date: Date) => {
    setFechaSeleccionada(date);
    mezclarTareas(); 
  };

  // Filtrar las tareas cuando haya un cambio en la búsqueda
  useEffect(() => {
    dispatch({ type: "FILTER_TAREAS", payload: busqueda });
  }, [busqueda, dispatch]);

  return (
    <div className="calendario-container">
      <h2>Calendario de Tareas</h2>

      {/* Calendario */}
      <Calendar
        onClickDay={handleFechaChange} 
        value={fechaSeleccionada || new Date()} 
      />

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar tarea..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <h3>Tareas programadas:</h3>
      <ul className="lista-tareas">
        {filtradas.map((tarea: Tarea) => (
          <li key={tarea.id}>
            {tarea.todo} {tarea.completed ? "✅" : "⏳"}
          </li>
        ))}
      </ul>
    </div>
  );
}
