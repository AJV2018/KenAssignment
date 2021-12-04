import { combineReducers } from "redux";
import albumReducer from "./albumReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    albums: albumReducer
});

export default rootReducer;