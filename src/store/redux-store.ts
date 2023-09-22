import { profileReducer } from "./profileReducer";
import { dialoguesReducer } from "./dialoguesReducer";
import { sidebarReducer } from "./sidebarReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./auth-reducer";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { appReducer } from "store/app-reducer";
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer
});

//@ts-ignored
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export type AppStateType = ReturnType<typeof rootReducer>
// export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppThunk = ThunkAction<any, AppStateType, unknown, AnyAction>;
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>;

// @ts-ignore
window.store = store;
