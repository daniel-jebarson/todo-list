import { ActionType } from "../action-types/actiontypes";
export interface StateInter {
  noOfTasks: number;
  data: Array<string>;
}

interface AddAction {
  type: ActionType.ADD_LIST;
  description: string;
}

interface RemoveAction {
  type: ActionType.REMOVE_LIST;
  index: number;
}

export type Action = AddAction | RemoveAction;
