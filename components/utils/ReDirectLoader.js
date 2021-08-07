import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
export default function ReDirectLoader() {
    const router = useRouter()
    useEffect(() => {
        router.replace('/bize-katil')
    }, [])
    return (
        <div>
            <span className='redirectSpan'>Yönlendiriliyorsunuz...</span>
        </div>
    )
}
