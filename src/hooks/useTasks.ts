import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const useTasks = () => {
  const { state, dispatch } = useContext(TaskContext);
  return {
    tareas: state.tareas,
    filtradas: state.filtradas,
    dispatch,
  };
};
