'use client'

import {FC} from "react";
import {useRouter} from "next/navigation";
import css from './RecipeTags.module.css'

type RecipeTagsPropsType = {
    tag: string;
}

const RecipeTags:FC<RecipeTagsPropsType> = ({tag}) => {
    const router = useRouter()


    return (
        <p className={css.tag} onClick={() => router.push(`/recipes?tag=${tag}`)}>
            {tag}
        </p>
    );
};

export {RecipeTags};