'use client'

import {FC} from "react";
import {IUser} from "@/interfaces/IUser";
import {useRouter} from "next/navigation";
import css from './User.module.css'

type UserPropsType={
    user: IUser
}

const User:FC<UserPropsType> = ({user}) => {
    const router = useRouter()


    return (
        <div className={css.user} onClick={() => router.push(`users/${user.id}`)}>
            <p>Id: {user.id}</p>
            <p>Name: {user.firstName} {user.lastName}</p>
            <hr/>

        </div>
    );
};

export {User};