import AsyncStorage from "@react-native-community/async-storage";
import { createStore, Store } from "redux";
import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from "./reducers";
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
    whitelist: [
        'auth'
    ]
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<any> = createStore(persistedReducer);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>

export default store;