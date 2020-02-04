interface Task {
  id: number;
  name: string;
  done: boolean;
}

export type InitActionType = "INIT";
export type ChangeViewActionType = "CHANGE_VIEW";
export type RemoveActionType = "REMOVE";
export type CheckActionType = "CHECK";
export type AddNewActionType = "ADD_NEW_TASK";
export type ChangeTaskNameActionType = "CHANGE_NEW_TASK_NAME";
export type ActionType =
  | InitActionType
  | ChangeViewActionType
  | RemoveActionType
  | CheckActionType
  | AddNewActionType
  | ChangeTaskNameActionType;

interface InitAction {
  type: InitActionType;
  tasks: Task[];
  lastId: number;
}
interface ChangeViewAction {
  type: ChangeViewActionType;
  show: string;
}
interface RemoveAction {
  type: RemoveActionType;
  id: number;
}
interface CheckAction {
  type: CheckActionType;
  id: number;
}
interface AddNewAction {
  type: AddNewActionType;
}
interface ChangeTaskNameAction {
  type: ChangeTaskNameActionType;
  newTask: string;
}

export type Action =
  | InitAction
  | ChangeViewAction
  | RemoveAction
  | CheckAction
  | AddNewAction
  | ChangeTaskNameAction;

export const initAct: (arg0: Task[], arg1: number) => InitAction = (
  tasks,
  lastId
) => ({
  type: "INIT",
  tasks,
  lastId
});
export const viewAct: (arg0: string) => ChangeViewAction = (show: string) => ({
  type: "CHANGE_VIEW",
  show
});
export const removeAct: (arg0: number) => RemoveAction = (id: number) => ({
  type: "REMOVE",
  id
});
export const checkAct: (arg0: number) => CheckAction = (id: number) => ({
  type: "CHECK",
  id
});
export const addTaskAct: () => AddNewAction = () => ({ type: "ADD_NEW_TASK" });
export const changeNameAct: (
  arg0: string
) => ChangeTaskNameAction = newTask => ({
  type: "CHANGE_NEW_TASK_NAME",
  newTask
});
