import React from 'react'
import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const {pid} = router.query 

    return <section className='px-10 py-4'>Ene bol {pid}</section>
}

export default Post