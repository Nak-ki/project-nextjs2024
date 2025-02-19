import {urls} from "@/constants/constants";
import {IUserWithTokens} from "@/interfaces/IUserWithTokens";
import {setCookie} from "cookies-next";


const accessTokenKey = "access"
const refreshTokenKey = "refresh"


const authService = {
   login: async (user: {username:string, password:string, expiresInMins:number}):Promise<IUserWithTokens> => {
     const data: IUserWithTokens = await fetch(urls.auth.login, {
         headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json',
           },
         method: 'POST',
         body: JSON.stringify(user),
       }).then(res => res.json())

       await setCookie(accessTokenKey, data.accessToken)
       await setCookie(refreshTokenKey, data.refreshToken)

       return data;

   },
    async me(accessToken: string):Promise<IUserWithTokens> {
        return await fetch(urls.auth.me, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            method: 'GET',
            next: {revalidate:0}
        } ).then(res => res.json())
    },
}

export {
    authService
}