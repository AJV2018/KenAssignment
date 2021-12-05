import { combineReducers } from "redux";
import albumReducer from "./albumReducer";
import authReducer from "./authReducer";
import trackReducer from "./trackReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    albums: albumReducer,
    tracks: trackReducer,
});

export default rootReducer;