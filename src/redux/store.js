import { legacy_createStore as createStore } from "redux";
// reducers
import addReducer from "./reducers";
export default createStore(addReducer);
