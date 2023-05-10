import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import UndsenTsonkh from './UndsenTsonkh'
import { isNullOrUndefined, uilchilgeeDuudagch } from '@/src/components'
import { CLASS_PAGINATION } from '@splidejs/splide'

export const TogloltCtx = React.createContext()
export default function TogloltContext(props) {
  const [tolgoltState, setTogloltState] = React.useState({
    jagsaaltKharuulakh: []
  })

  function setleye() {
    return new Promise(resolve => {
      setTogloltState({...tolgoltState})
      return resolve(true)
    })
  }

  const { talbarSolbiyo } = props
  const TogloltOruulakh = dynamic(() => import('./dedKheseg/TogloltOruulakh'), {ssr: false})


  useEffect(()=>{
    togloltiinJagsaaltAvya()
  }, [props])

  const togloltOruulya = (id) => {
      talbarSolbiyo({
          kharakhEsekh: true,
          component: TogloltOruulakh,
          componentProps:  {...props, id }
      })
  }

  function togloltiinJagsaaltAvya() {
        uilchilgeeDuudagch('togloltiinJagsaaltAvya').then((khariu)=>
        {  
          console.log('khariu', khariu)
          if (!isNullOrUndefined(khariu))
            tolgoltState.jagsaaltKharuulakh = khariu.data
          else tolgoltState.jagsaaltKharuulakh = []
          setleye()
        })
  }

  return (
    <TogloltCtx.Provider value={{ togloltOruulya, tolgoltState, setleye }}>
        <UndsenTsonkh {...props}/>
    </TogloltCtx.Provider>
  )
}
