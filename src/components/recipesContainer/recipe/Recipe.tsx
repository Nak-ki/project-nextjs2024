'use client'

import {FC} from "react";
import {useRouter} from "next/navigation";
import {IRecipe} from "@/interfaces/IRecipe";
import {RecipeTags} from "@/components/recipesContainer/recipeTags/RecipeTags";
import css from './Recipe.module.css'

type UserPropsType={
    recipe: IRecipe
}

const Recipe:FC<UserPropsType> = ({recipe}) => {
    const router = useRouter()


    return (
        <div className={css.recipe}>
            <p className={css.p} onClick={() => router.push(`recipes/${recipe.id}`)}>Name: {recipe.name}</p>
            <div className={css.tags}>
                {
                    recipe.tags.map((tag, index) => <RecipeTags key={index} tag={tag}/>)

                }
            </div>
            <hr/>
        </div>
    );
};

export {Recipe};