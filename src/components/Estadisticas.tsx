import { useTasks } from "../hooks/useTasks";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip, Legend as BarLegend, ResponsiveContainer as BarResponsiveContainer } from "recharts";
import dayjs from 'dayjs'; 
import "../styles/estadisticas.css"; 

const COLORS = ["#00C49F", "#FF4C4C"]; // Verde y rojo

function EstadisticasPage() {
  const { tareas } = useTasks();

  const completadas = tareas.filter((t) => t.completed);
  const noCompletadas = tareas.filter((t) => !t.completed);

  const data = [
    { name: "Completadas", value: completadas.length },
    { name: "No completadas", value: noCompletadas.length },
  ];

  // Agrupar tareas completadas por fecha
  const tareasPorFecha = completadas.reduce((acc: { [key: string]: number }, tarea) => {
    const fecha = dayjs(tarea.createdAt).format('YYYY-MM-DD'); // Formato de fecha: año-mes-día
    acc[fecha] = acc[fecha] ? acc[fecha] + 1 : 1; // Aumentamos el contador de tareas completadas para cada fecha
    return acc;
  }, {});

  // Convertir el objeto a un array para usarlo en el gráfico
  const tareasPorFechaArray = Object.keys(tareasPorFecha).map((fecha) => ({
    fecha,
    tareasCompletadas: tareasPorFecha[fecha],
  }));

  return (
    <div className="estadisticas-container">
      <h2>Estadísticas de Tareas</h2>

      {/* Contenedor para los gráficos en columnas */}
      <div className="chart-columns">
        {/* Gráfico de Pastel */}
        <div className="chart-wrapper">
          <h3>Distribución de Tareas Completadas y No Completadas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Barras - Tareas Completadas por Fecha */}
        <div className="chart-wrapper">
          <h3>Tareas Completadas Hoy</h3>
          <BarResponsiveContainer width="100%" height={300}>
            <BarChart data={tareasPorFechaArray}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fecha" />
              <YAxis />
              <BarTooltip />
              <BarLegend />
              <Bar dataKey="tareasCompletadas" fill="#8884d8" />
            </BarChart>
          </BarResponsiveContainer>
        </div>
      </div>

      {/* Listas de tareas */}
      <div className="listas-tareas">
        <div>
          <h3>✅ Tareas Completadas</h3>
          <ul>
            {completadas.map((t) => (
              <li key={t.id}>{t.todo}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>❌ Tareas No Completadas</h3>
          <ul>
            {noCompletadas.map((t) => (
              <li key={t.id}>{t.todo}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EstadisticasPage;
