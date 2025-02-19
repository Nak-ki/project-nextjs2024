'use client'

import {FC} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import css from "./RecipesPagination.module.css";

type IProps = {
    total: number
}

const RecipesPagination:FC<IProps> = ({total}) => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const skip = searchParams.get('skip') || '0'
    const q = searchParams.get('q') || null

    const prev = () => {
        if (q) {
            router.push(`/recipes?skip=${+skip - 30}&q=${q}`)
        } else {
            router.push(`/recipes?skip=${+skip - 30}`)
        }
    }
    const next = () => {
        if (q) {
            router.push(`/recipes?skip=${+skip + 30}&q=${q}`)
        } else {
            router.push(`/recipes?skip=${+skip + 30}`)
        }
    }

    return (
        <div className={css.pagination}>
            <button className={css.prev} disabled={skip === "0"} onClick={prev}>prev</button>
            <div><p>{skip} {total}</p></div>
            <button className={css.next} disabled={+skip > (total - 30)} onClick={next}>next</button>
        </div>
    );
};

export {RecipesPagination};