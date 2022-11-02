import { Action, StateInter } from "../actions/action";
import { ActionType } from "../action-types/actiontypes";
const initialState = {
  noOfTasks: 1,
  data: [
    {
      id: 1,
      description: "Hello wolrd",
    },
  ],
};

const TodoReducer = (state: StateInter = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_LIST:
      return {
        noOfTasks: state.noOfTasks + 1,
        data: [
          ...state.data,
          {
            id: state.data.length + 1,
            description: action.description,
          },
        ],
      };
    case ActionType.REMOVE_LIST:
      const list = state.data.filter(function (x) {
        return x.id !== state.noOfTasks;
      });

      return {
        noOfTasks: state.noOfTasks - 1,
        data: list,
      };
    default:
      return state;
  }
};

export default TodoReducer;
