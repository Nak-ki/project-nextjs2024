
import {urls} from "@/constants/constants";
import {cookies} from "next/headers";
import {IUser, IUserList} from "@/interfaces/IUser";


export const userService = {
    getUsers: async (skip:number): Promise<IUserList> => {
        const cookiesStore = await cookies()
        const accessToken = cookiesStore.get('access')
        return await fetch(urls.users.getUsers(+skip), {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken.value}`
            },
            method: 'GET',
        } ).then(res => res.json())

    },
    getById: async (id: number): Promise<IUser> =>{
        const cookiesStore = await cookies()
        const accessToken = cookiesStore.get('access')
        return await fetch(urls.users.getById(id), {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken.value}`
            },
            method: 'GET',
        } ).then(res => res.json())

    },
    searchUser: async (query: string | string[]): Promise<IUserList> => {
        const cookiesStore = await cookies()
        const accessToken = cookiesStore.get('access')
        return await fetch(urls.users.searchUser(query), {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken.value}`
            },
            method: 'GET',
        } ).then(res => res.json())

    },
}