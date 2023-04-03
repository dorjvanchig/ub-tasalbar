import React from 'react'
import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const {pid} = router.query 

    return <test>Ene bol {pid}</test>
}

export default Post