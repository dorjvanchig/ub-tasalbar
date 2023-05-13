import React from 'react'
import UndsenZagvar from '@/src/admin/undsenZagvar/UndsenZagvar'
import { useRouter } from 'next/router'
import ZakhialgaContext from '@/src/zakhialgaUdirdlaga/zakhialgaContext'
import { isNullOrUndefined } from '@/src/components'
export default function Pages() {
  const router = useRouter()
  const [togloltId, setToglolId] = React.useState(undefined)
  

  React.useEffect(() => {
    if(router.isReady) {
      const {pages} = router.query
      setToglolId(pages)
    }
  }, [router.isReady])

  return (<>
    {
      !isNullOrUndefined(togloltId) && <ZakhialgaContext id={togloltId}/>
    }
  </>)
}
