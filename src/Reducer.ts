import { Action } from "./Actions";
interface Task {
  id: number;
  name: string;
  done: boolean;
}

interface State {
  tasks: Task[];
  newTask: string;
  lastId: number;
  show: string;
}

export const init = {
  tasks: [],
  newTask: "",
  lastId: 0,
  show: "all"
};
export const reducer = (state: State = init, action: Action) => {
  switch (action.type) {
    case "INIT":
      return { ...state, tasks: action.tasks, lastId: action.lastId };
    case "CHANGE_NEW_TASK_NAME":
      return { ...state, newTask: action.newTask };
    case "CHECK":
      return {
        ...state,
        tasks: state.tasks.map(x => ({
          ...x,
          done: x.id === action.id ? !x.done : x.done
        }))
      };
    case "REMOVE":
      return { ...state, tasks: state.tasks.filter(x => x.id !== action.id) };
    case "CHANGE_VIEW":
      return { ...state, show: action.show };
    case "ADD_NEW_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: state.lastId, name: state.newTask, done: false }
        ],
        lastId: state.lastId + 1,
        newTask: ""
      };
    default:
      return { ...state };
  }
};
