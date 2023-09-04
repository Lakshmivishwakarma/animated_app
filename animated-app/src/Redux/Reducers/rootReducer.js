import { combineReducers } from "redux";
import { sessionReducer } from "../Reducers/reducer";
import { userReducer, addressReducer, signInReducer, productReducer } from "../Reducers/reducer";

const rootreducers = combineReducers({
    sessionReducer, userReducer, addressReducer, signInReducer, productReducer,
});

export default rootreducers;
