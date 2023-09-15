import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialoguesReducer } from "./dialoguesReducer";
import { sidebarReducer } from "./sidebarReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./auth-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk));
