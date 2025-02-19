import {IRecipe, IRecipesList} from "@/interfaces/IRecipe";
import {cookies} from "next/headers";
import {urls} from "@/constants/constants";


export const recipeService = {
    getRecipes: async (skip:number): Promise<IRecipesList> => {
    const cookiesStore = await cookies()
    const accessToken = cookiesStore.get('access')
    return await fetch(urls.recipes.getRecipes(+skip), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${accessToken.value}`
        },
        method: 'GET',
    } ).then(res => res.json())

},
    getById: async (id: number): Promise<IRecipe> => {
            const cookiesStore = await cookies()
            const accessToken = cookiesStore.get('access')
            return await fetch(urls.recipes.getById(id), {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken.value}`
                },
                method: 'GET',
            } ).then(res => res.json())

        },
    searchRecipes: async (query: string | string[]): Promise<IRecipesList> => {
            const cookiesStore = await cookies()
            const accessToken = cookiesStore.get('access')
            return await fetch(urls.recipes.searchRecipes(query), {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken.value}`
                },
                method: 'GET',
            } ).then(res => res.json())

        },
    searchByTag: async (tag: string | string[]): Promise<IRecipesList> =>{
            const cookiesStore = await cookies()
            const accessToken = cookiesStore.get('access')
            return await fetch(urls.recipes.searchByTag(tag), {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken.value}`
                },
                method: 'GET',
            } ).then(res => res.json())
        }
}