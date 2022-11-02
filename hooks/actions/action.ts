import { ActionType } from "../action-types/actiontypes";
export interface StateInter {
  noOfTasks: number;
  data: Array<{
    id: number;
    description: string;
  }>;
}

interface AddAction {
  type: ActionType.ADD_LIST;
  description: string;

}

interface RemoveAction {
  type: ActionType.REMOVE_LIST;
}

export type Action = AddAction | RemoveAction;
