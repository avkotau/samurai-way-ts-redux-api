import axios from "axios";
import { ProfileResponseType } from "../redux/profileReducer";
import { AuthUserDataType } from "../components/Header/HeaderContainer";

type ResponseUserType<T = []> = {
    items: T
    error: null | string
    totalCount: number
}

type ResponseSubscriberType<T = []> = {
    data: T
    resultCode: number
    messages: []
}

type ResponseAuthType = {
    data: AuthUserDataType
    fieldsErrors: []
    messages: []
    resultCode: number
}

export type ResponseStatusType = {
    resultCode: number
    messages: []
    data: {}
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,

})

export const getUsersAPI = (currentPage: number, pageSize: number) => {
    return instance.get<ResponseUserType>(`users?page=${currentPage}&count=${pageSize}`)
        .then(res => res.data)
}

export const unFollowAPI = (id: number) => {
    return instance.delete<ResponseSubscriberType>(`follow/${id}`)
}

export const followAPI = (id: number) => {
    return instance.post<ResponseSubscriberType>(`follow/${id}`, {})
}

export const profileUserAPI = (userId: number) => {
    return instance.get<ProfileResponseType>(`profile/${userId}`)
}

export const authAPI = () => {
    return instance.get<ResponseAuthType>(`auth/me`)
}

export const getUserStatusAPI = (userId: number) => {
    return instance.get<string>(`/profile/status/${userId}`)
}

export const updateUserStatusAPI = (status: string) => {
    return instance.put<ResponseStatusType>(`/profile/status`, {status})
}
