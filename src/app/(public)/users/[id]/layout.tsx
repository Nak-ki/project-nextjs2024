import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title:'UserIdLayout metadata'
}
type Props = { children: React.ReactNode }
const UserIdLayout =({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
}
export default UserIdLayout;