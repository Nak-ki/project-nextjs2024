'use server'

import Link from "next/link";
import {cookies} from "next/headers";
import {authService} from "@/services/authService";
import {IUserWithTokens} from "@/interfaces/IUserWithTokens";
import css from './Menu.module.css'



const Menu = async () => {
    const cookiesStore = await cookies()


    const access = cookiesStore.get('access')
    let  currentUser: IUserWithTokens

    if (access) {
        currentUser = await authService.me(access.value)
    }



    return (
        <div  className={css.mainMenu}>
            {!currentUser || currentUser.message ?
        <div className={css.log}>
            <Link href={'/login'}>Login</Link>
        </div>
                :
                <div className={css.menu}>
                    <img src={currentUser.image} alt={currentUser.username}></img>
                    <div className={css.links}>
                        <Link className={css.link1} href={'/'}>Home</Link>
                        <Link className={css.link2} href={'/users'}>Users</Link>
                        <Link className={css.link3} href={'/recipes'}>Recipes</Link>
                    </div>
                </div>
            }
        </div>
    );
};

export {Menu};