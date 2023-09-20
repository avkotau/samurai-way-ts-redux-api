import { UserType } from "types/commonTypes";

export const toggleFollowStatus = (items: Array<UserType>, itemId: number, objPropName: string, newObjProps: {followed: boolean}) => {
    return items.map(u =>
            u[objPropName] === itemId ? ({...u, ...newObjProps}) : u)
}
