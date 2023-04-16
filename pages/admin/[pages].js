import React from 'react'
import UndsenZagvar from '@/src/admin/undsenZagvar/UndsenZagvar'
import { useRouter } from 'next/router'

export default function Pages() {
  const router = useRouter()
  const {pages} = router.query

  return (<UndsenZagvar tsonkh = {pages}/>)
}
