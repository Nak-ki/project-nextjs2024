'use client'

import {useSearchParams} from 'next/navigation';

export const usePagination = () => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)

    const skip = searchParams.get('skip') || '0'

    return{
        // prev: () => params.set('skip', (+skip - 30).toString()),
        prev: () => {
            let skip = searchParams.get('skip') || '0'
            if (skip <= "0") {
            skip = '0'
            }
            else {
               skip = (+skip - 30).toString()
            }
            return params.set('skip', skip)
        },
        next: () => {
            let skip = searchParams.get('skip') || '0'
            if (skip <= "0") {
                skip = '0'
            } else {
                skip = (+skip + 30).toString()
            }
            return params.set('skip', skip)},
        skip: skip ? skip : '0'
    }
}