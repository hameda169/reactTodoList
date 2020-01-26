export const initAct = (tasks, lastId) => ({ type: "INIT", tasks, lastId });
export const viewAct = show => ({ type: "CHANGE_VIEW", show });
export const removeAct = id => ({ type: "REMOVE", id });
export const checkAct = id => ({ type: "CHECK", id });
export const addTaskAct = () => ({ type: "ADD_NEW_TASK" });
export const changeNameAct = newTask => ({
  type: "CHANGE_NEW_TASK_NAME",
  newTask
});
