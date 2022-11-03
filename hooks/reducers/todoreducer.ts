import { Action, StateInter } from "../actions/action";
import { ActionType } from "../action-types/actiontypes";
const initialState = {
  noOfTasks: 1,
  data: ["Hello world"],
};

const TodoReducer = (state: StateInter = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_LIST:
      return {
        noOfTasks: state.noOfTasks + 1,
        data: [...state.data, action.description],
      };
    case ActionType.REMOVE_LIST:
      state.data.splice(action.index, 1);
      return {
        noOfTasks: state.noOfTasks == 0 ? 0 : state.noOfTasks - 1,
        data: state.data,
      };
    default:
      return state;
  }
};

export default TodoReducer;
