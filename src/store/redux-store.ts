import { profileReducer } from "./profileReducer";
import { dialoguesReducer } from "./dialoguesReducer";
import { sidebarReducer } from "./sidebarReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./auth-reducer";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { appReducer } from "store/app-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer
});

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;

