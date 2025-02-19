'use client'

import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import css from "./SearchRecipe.module.css";





const SearchRecipe = () => {

    const router = useRouter()
    const {register, handleSubmit} = useForm<{recipe: string}>()

    const search:SubmitHandler<{recipe: string}> = async ({recipe}) => {
        router.push(`recipes/?q=${recipe}`)
    }



    return (
        <div className={css.mainForm}>
            <form className={css.form}  onSubmit={handleSubmit(search)}>
                <input className={css.search}  type="text" placeholder={'recipe'} {...register('recipe')}/>
                <button  className={css.button}>Search</button>
            </form>
        </div>
    );
};

export {SearchRecipe};