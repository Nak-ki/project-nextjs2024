import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title:'RecipeIdLayout metadata'
}
type Props = { children: React.ReactNode }
const RecipeIdLayout =({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
}
export default RecipeIdLayout;