interface Task {
  id: number;
  name: string;
  done: boolean;
}
export const initAct = (tasks: Task[], lastId: number) => ({
  type: "INIT",
  tasks,
  lastId
});
export const viewAct = (show: string) => ({ type: "CHANGE_VIEW", show });
export const removeAct = (id: number) => ({ type: "REMOVE", id });
export const checkAct = (id: number) => ({ type: "CHECK", id });
export const addTaskAct = () => ({ type: "ADD_NEW_TASK" });
export const changeNameAct = (newTask: string) => ({
  type: "CHANGE_NEW_TASK_NAME",
  newTask
});
