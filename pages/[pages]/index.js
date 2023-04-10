import React from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

export default function index() {
    const router = useRouter()
    const {pages} = router.query
    const Tsonkh = dynamic(() => import('@/src/' + pages), {ssr: false,})

    console.log(pages, Tsonkh)
  return (
    <Tsonkh/>
  )
}
