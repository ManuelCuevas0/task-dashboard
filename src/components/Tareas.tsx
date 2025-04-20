import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../styles/tareasPage.css";  
function TareasPage() {
  const { state, dispatch } = useContext(TaskContext);
  

  const isSidebarCollapsed = false; 

  const handleBuscar = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "FILTER_TAREAS", payload: e.target.value });
  };

  const marcarCompletado = (id: number) => {
    const nuevas = state.filtradas.map((tarea) =>
      tarea.id === id ? { ...tarea, completed: true } : tarea
    );
    dispatch({ type: "SET_TAREAS", payload: nuevas });
  };

  const marcarNoCompletado = (id: number) => {
    const nuevas = state.filtradas.map((tarea) =>
      tarea.id === id ? { ...tarea, completed: false } : tarea
    );
    dispatch({ type: "SET_TAREAS", payload: nuevas });
  };

  return (
    <div className={`tareas-page-container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <h2>Tareas</h2>
      <input
        className="buscador-tareas"
        type="text"
        placeholder="Buscar tarea..."
        onChange={handleBuscar}
      />

      <ul className="tareas-lista">
        {state.filtradas.map((tarea) => (
          <li key={tarea.id} className="tarea-item">
            <span
              className={`texto-tarea ${tarea.completed ? "completada" : "no-completada"}`}
            >
              {tarea.todo}
            </span>

            <div className="botones-estado">
              <button
                className="boton-estado verde"
                onClick={() => marcarCompletado(tarea.id)}
              >
                ✅ Completado
              </button>

              <button
                className="boton-estado rojo"
                onClick={() => marcarNoCompletado(tarea.id)}
              >
                ❌ No Completado
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TareasPage;
