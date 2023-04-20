import React from 'react'
import UndsenZagvar from '@/src/admin/undsenZagvar/UndsenZagvar'
import { useRouter } from 'next/router'
import SuudalSongokh from '@/src/zakhialgaUdirdlaga/SuudalSongokh'

export default function Pages() {
  const router = useRouter()
  const {pages} = router.query

  return (<SuudalSongokh {...pages}/>)
}
