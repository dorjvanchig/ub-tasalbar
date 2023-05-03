import React from 'react'
import dynamic from 'next/dynamic'
export const TogloltCtx = React.createContext()
import UndsenTsonkh from './UndsenTsonkh'

export default function TogloltContext(props) {
  const [tomState, setTomState] = React.useState()

  function setleye() {
    return new Promise(resolve => {
      setTomState({...tomState})
      return resolve(true)
    })
  }

  const { talbarSolbiyo } = props
  const TogloltOruulakh = dynamic(() => import('./dedKheseg/TogloltOruulakh'), {ssr: false})

  const togloltOruulya = () => {
      talbarSolbiyo({
          kharakhEsekh: true,
          component: TogloltOruulakh,
          componentProps: {'test': 'test'}
      })
  }

  return (
    <TogloltCtx.Provider value={{ togloltOruulya, setleye }}>
        <UndsenTsonkh {...props}/>
    </TogloltCtx.Provider>
  )
}
