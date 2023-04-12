import React, { createContext, useState } from 'react'
import TolgoiTses from './TolgoiTses'
import UndsenKhailt from './UndsenKhailt'
import UndsenZagvarKhul from './UndsenZagvarKhul' 
import { uilchilgeeDuudagch, medeeKharuulakh, isNullOrUndefined } from '../components'
import { useRouter } from 'next/router';
export const UndsenCtx = createContext({})
export default function UndsenZagvar({children }) 
{  
  const router = useRouter()
  const [undsenState, setUndsenState] = useState({
    nevtersenKhereglegch:{}
  })
  function undsenKhuudasruuShiljikh() {
    router.push('/')
  }

  function nevtrekh(khereglegch) {
     undsenState.nevtersenKhereglegch = khereglegch
    uilchilgeeDuudagch('nevtrekh', khereglegch).then((khariu)=>{
      if (!isNullOrUndefined(khariu))
        // medeeKharuulakh('warning', "Анхааруулга", khariu)
        khuudasSergeekh()
    })
  }

  function khuudasSergeekh() {
    setUndsenState({...undsenState})
  }

  return (
    <UndsenCtx.Provider 
      value={{
        undsenKhuudasruuShiljikh,
        khuudasSergeekh, 
        nevtrekh
      }}>
      <div className='block'>
            <TolgoiTses />
            {/* <UndsenKhailt /> */}
            {children}
            <UndsenZagvarKhul />
        </div>
    </UndsenCtx.Provider>)
}
