import { SidebarDataType } from "types/commonTypes";

const initialState = {
    sidebarData: [
        {id: Math.random().toString(36).slice(2), name: 'Lena', like: 12},
        {id: Math.random().toString(36).slice(2), name: 'Kola', like: 20},
        {id: Math.random().toString(36).slice(2), name: 'Nikita', like: 6}
    ] as Array<SidebarDataType>
}

type InitialStateType = typeof initialState
export const sidebarReducer = (state: InitialStateType = initialState): InitialStateType => {
    return state
}
