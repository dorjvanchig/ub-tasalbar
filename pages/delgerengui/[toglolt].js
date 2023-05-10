import React from 'react'
import UndsenZagvar from '@/src/admin/undsenZagvar/UndsenZagvar'
import DelgerenguiContext from '@/src/delgerenguiTsonkh/DelgerenguiContext'
import { useRouter } from 'next/router'

export default function Toglolt() {
  const router = useRouter()
  const {toglolt} = router.query
  return (<DelgerenguiContext tsonkh = {toglolt}/>)
}
