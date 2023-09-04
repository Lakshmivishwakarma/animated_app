import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { createStore } from "redux";
import rootreducers from "./Reducers/rootReducer";

const persistConfig = {
    key: "persist-root",
    storage,
    whitelist: ['signInReducer', 'sessionReducer']
}
const persistedReducer = persistReducer(persistConfig, rootreducers)

const store = createStore(
    persistedReducer
)

export const persistor = persistStore(store);
export default store;
