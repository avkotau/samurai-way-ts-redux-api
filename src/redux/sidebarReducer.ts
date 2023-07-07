import { SidebarType } from "./index";

const initialState = {
    sidebarData: [
        {id: Math.random().toString(36).slice(2), name: 'Lena', like: 12},
        {id: Math.random().toString(36).slice(2), name: 'Kola', like: 20},
        {id: Math.random().toString(36).slice(2), name: 'Nikita', like: 6}
    ]
}
export const sidebarReducer = (state: SidebarType = initialState, action: any) => {

    return state
}
