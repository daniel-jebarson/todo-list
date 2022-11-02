import { combineReducers } from "redux";
import TodoReducer from "./todoreducer";
const Reducers = combineReducers({
  todo: TodoReducer,
});

export default Reducers;
export type State = ReturnType<typeof Reducers>;
