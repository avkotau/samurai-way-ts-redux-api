import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialoguesReducer } from "./dialoguesReducer";
import { sidebarReducer } from "./sidebarReducer";
import { usersReducer } from "./usersReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
});

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);
