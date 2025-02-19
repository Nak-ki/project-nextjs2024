const baseURL = 'https://dummyjson.com'

const auth = '/auth'
const users = '/users'
const recipes ='/recipes'

const urls = {
    auth: {
        login: baseURL + `${auth}/login`,
        me: baseURL + `${auth}/me`
    },
    users: {
        getUsers: (skip: number): string => baseURL + `${auth}${users}?skip=${skip}`,
        getById: (id:number): string => baseURL + `${auth}${users}/${id}`,
        searchUser: (query: string | string[]): string => baseURL + `${auth}${users}/search?q=${query}`
    },
    recipes: {
        getRecipes: (skip: number): string => baseURL + `${auth}${recipes}?skip=${skip}`,
        getById: (id:number): string => baseURL + `${auth}${recipes}/${id}`,
        searchRecipes: (query: string | string[]): string => baseURL + `${auth}${recipes}/search?q=${query}`,
        searchByTag: (tag: string | string[]): string => baseURL + `${auth}${recipes}/tag/${tag}`,
    }

}



export {
    urls
}