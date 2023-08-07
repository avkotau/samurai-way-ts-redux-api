import axios from "axios";

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
  return instance.post<ResponseSubscriberType>(`follow/${id}`,{})
}
