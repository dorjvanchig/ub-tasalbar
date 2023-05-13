import React from 'react'
import UndsenZagvar from '@/src/admin/undsenZagvar/UndsenZagvar'
import DelgerenguiContext from '@/src/delgerenguiTsonkh/DelgerenguiContext'
import { useRouter } from 'next/router'
import { isNullOrUndefined } from '@/src/components'

export default function Toglolt() {
  const router = useRouter()
  const [togloltId, setToglolId] = React.useState(undefined)
  

  React.useEffect(() => {
    if(router.isReady) {
      const {toglolt} = router.query
      setToglolId(toglolt)
    }
  }, [router.isReady])

  return (<>
    {
      !isNullOrUndefined(togloltId) && <DelgerenguiContext id={togloltId} />
    }
  </>)
}
