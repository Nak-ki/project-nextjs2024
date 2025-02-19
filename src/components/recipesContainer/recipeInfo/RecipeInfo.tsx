'use client'

import {FC} from 'react';
import {IRecipe} from "@/interfaces/IRecipe";
import {useRouter} from "next/navigation";
import {RecipeTags} from "@/components/recipesContainer/recipeTags/RecipeTags";
import css from "./RecipeInfo.module.css";

interface IProps {
    recipe: IRecipe
}

const RecipeInfo :FC<IProps> = ({recipe}) => {
    const router = useRouter()

 return (
  <div className={css.info}>
      <img className={css.img} src={recipe.image} alt={recipe.name}/>
      <p>Id: {recipe.id}</p>
      <p>Name: {recipe.name}</p>
      <p>Rating: {recipe.rating}</p>
      <p>Time: {recipe.prepTimeMinutes}</p>
      <div className={css.tags}>
          {
              recipe.tags.map((tag, index) => <RecipeTags key={index} tag={tag}/>)
          }
      </div>
      <p className={css.p} onClick={() => router.push(`/users/${recipe.userId}`)}> User page...</p>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
  </div>
 );
};

export {RecipeInfo};