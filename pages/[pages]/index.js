import React from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

export default function Index(props) {
    const router = useRouter()
    const {pages} = router.query
    const Tsonkh = dynamic(() => import('@/src/' + pages), {ssr: false,}) 
  return (
    <Tsonkh {...props}/>
  )
}
