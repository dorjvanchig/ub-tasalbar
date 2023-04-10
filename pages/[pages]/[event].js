import React from 'react'
import DelgerenguiContext from '@/src/delgerenguiTsonkh/DelgerenguiContext'
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const event = (props) => {
  const router = useRouter();
  const { pages, event } = router.query;
  const Khuudas = dynamic(import(`@/src/${pages}/${event}`))
  return (
    <DelgerenguiContext/>
  )
}

export default event