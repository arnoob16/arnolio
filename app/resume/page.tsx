'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()
    useEffect(() => {
        router.replace('/Arnab\'s_Resume.pdf');
    }, [router]);
    return null
}
