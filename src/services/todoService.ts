import axios from "axios";

const API_URL = "https://dummyjson.com/todos";

export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.todos;
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    return [];
  }
};