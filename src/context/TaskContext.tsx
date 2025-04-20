import { createContext, useReducer, useEffect } from "react";

// Definir el tipo de Tarea
export type Tarea = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  createdAt: string;
};

type State = {
  tareas: Tarea[];
  filtradas: Tarea[];
};

type Action =
  | { type: "SET_TAREAS"; payload: Tarea[] }
  | { type: "MIX_TAREAS" }
  | { type: "FILTER_TAREAS"; payload: string };

const initialState: State = {
  tareas: [],
  filtradas: [],
};

function taskReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_TAREAS":
      return {
        ...state,
        tareas: action.payload,
        filtradas: action.payload,
      };
    case "MIX_TAREAS":
      const mezcladas = [...state.tareas];
      for (let i = mezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mezcladas[i], mezcladas[j]] = [mezcladas[j], mezcladas[i]];
      }
      return { ...state, filtradas: mezcladas };
    case "FILTER_TAREAS":
      const texto = action.payload.toLowerCase();
      return {
        ...state,
        filtradas: state.tareas.filter((t) =>
          t.todo.toLowerCase().includes(texto)
        ),
      };
    default:
      return state;
  }
}

export const TaskContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_TAREAS", payload: data.todos }));
  }, []);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
