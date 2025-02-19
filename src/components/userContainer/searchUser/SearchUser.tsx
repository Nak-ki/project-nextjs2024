'use client'

import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import css from './SearchUser.module.css'




const SearchUser = () => {

    const router = useRouter()
    const {register, handleSubmit} = useForm<{username: string}>()

    const search:SubmitHandler<{username: string}> = async ({username}) => {
        router.push(`users/?q=${username}`)
    }



    return (
        <div className={css.mainForm}>
            <form className={css.form} onSubmit={handleSubmit(search)}>
                <input className={css.search} type="text" placeholder={'username'} {...register('username')}/>
                <button className={css.button}>Search</button>
            </form>
        </div>
    );
};

export {SearchUser};