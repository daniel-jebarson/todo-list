import { ActionType } from "../action-types/actiontypes";
import { Dispatch } from "redux";
import { Action } from "../actions/action";
export const ADDTODO = (desc: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_LIST,
      description: desc,
    });
  };
};

export const REMOVETODO = (x:number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_LIST,
      index:x
    });
  };
};
