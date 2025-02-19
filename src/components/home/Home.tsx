'use client'

import {authService} from "@/services/authService";
import {useEffect, useState} from "react";
import {IUserWithTokens} from "@/interfaces/IUserWithTokens";
import {getCookie} from "cookies-next/client";


const HomeComponent = () => {
    const accessToken = getCookie('access')
    const [currentUser, setCurrentUser] = useState<IUserWithTokens>(null)

    useEffect(() => {
        authService.me(accessToken).then(res => setCurrentUser(res))
    }, []);



    return (
        <>
            {!currentUser || currentUser.message && <p>You are not authorized, please log in.</p>}
        </>
    );
};

export {HomeComponent};