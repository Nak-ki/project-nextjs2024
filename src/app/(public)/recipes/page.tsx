
import React, {FC} from "react";
import {recipeService} from "@/services/recipeService";
import {IRecipesList} from "@/interfaces/IRecipe";
import {Recipe} from "@/components/recipesContainer/recipe/Recipe";
import {SearchRecipe} from "@/components/recipesContainer/searchRecipe/SearchRecipe";
import {RecipesPagination} from "@/components/recipesContainer/recipesPagination/RecipesPagination";

type IProps = {
    searchParams: Promise<{[key:string]: string | string[] | undefined}>
}

const RecipesPage:FC<IProps> = async ({searchParams}) => {
    const params = await searchParams
    const q = params?.q ? params?.q : null
    const skip = params?.skip ? params?.skip : 0
    const tag = params?.tag ? params?.tag : null

    let result : IRecipesList
    if (q) {
        result = await recipeService.searchRecipes(q)
    } else if (tag){
        result = await recipeService.searchByTag(tag)
    }
    else {
        result = await recipeService.getRecipes(+skip)
    }
    return (
        <div>
            <SearchRecipe/>
            {
                result && result.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)
            }
            <RecipesPagination total={result.total}/>
        </div>
    );
};

export default RecipesPage;
