import React from 'react'
import DelgerenguiContext from '@/src/delgerenguiTsonkh/DelgerenguiContext'
import { useRouter } from 'next/router';
const event = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <DelgerenguiContext/>
  )
}

export default event