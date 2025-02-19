'use client'

import {SubmitHandler, useForm} from "react-hook-form";
import {authService} from "@/services/authService";

import {useRouter} from "next/navigation";
import css from './Login.module.css'


const LogIn = () => {
    const router = useRouter()

    const {register, handleSubmit} = useForm<{username:string, password:string}>()

    const toLogin:SubmitHandler<{username:string, password:string}> = async (user) => {
        await authService.login({...user, expiresInMins:30})
       router.push('/')
    }
    return (
        <div>
            <form className={css.login} onSubmit={handleSubmit(toLogin)}>
                <input className={css.input1} type="text" placeholder={'Username'} {...register('username')}/>
                <input className={css.input2} type="text" placeholder={'Password'} {...register('password')}/>
                <button className={css.btn}>Login</button>
            </form>
        </div>
    );
};

export {LogIn};