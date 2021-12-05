import { combineReducers } from "redux";
import albumReducer from "./albumReducer";
import artistReducer from "./artistReducer";
import authReducer from "./authReducer";
import trackReducer from "./trackReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    albums: albumReducer,
    tracks: trackReducer,
    artists: artistReducer
});

export default rootReducer;