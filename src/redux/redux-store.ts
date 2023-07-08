import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialoguesReducer } from "./dialoguesReducer";
import { sidebarReducer } from "./sidebarReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    sidebar: sidebarReducer
});

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);
