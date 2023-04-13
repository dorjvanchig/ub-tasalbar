import React, { createContext, useState, use } from 'react'
import TolgoiTses from './TolgoiTses'
import UndsenKhailt from './UndsenKhailt'
import UndsenZagvarKhul from './UndsenZagvarKhul' 
import { uilchilgeeDuudagch, medeeKharuulakh, isNullOrUndefined } from '../components'
import { useRouter } from 'next/router';
import { khereglegchMedeelelKhadgalakh } from '../components/KholboltUusgekh'
export const UndsenCtx = createContext({})
export default function UndsenZagvar({children }) 
{  
  const router = useRouter()
  const [undsenState, setUndsenState] = useState({
    nevtersenKhereglegch:{},
    token:{}
  })
  function undsenKhuudasruuShiljikh() {
    router.push('/')
  }

  function khereglegchBurtguulakh(state) { 
    return new Promise(resolve => {
        uilchilgeeDuudagch('khereglegchBurtgekh', state).then((khariu)=>{
          resolve(khariu)
      })
    }) 
  }

  function nevtrekh(khereglegch) { 
    return new Promise(resolve => {
      uilchilgeeDuudagch('nevtrekh', khereglegch).then((khariu)=>{
        if (!isNullOrUndefined(khariu) && khariu.success == true)
        {
          let medeelel ={
            khereglegch: khariu.khereglegch,
            token: khariu.token
          }
          khereglegchMedeelelKhadgalakh(medeelel) 
          undsenKhuudasruuShiljikh()
          medeeKharuulakh('success', 'Амжилттай', "Та амжилттай нэвтэрлээ")
          resolve(null)
        }else {
          resolve(khariu)
        }
      })
    }) 
  }

  function togloltiinJagsaalt() {
    return new Promise(resolve => {
      uilchilgeeDuudagch('togloltiinJagsaaltAvya').then((khariu)=>{ 
          resolve(khariu)
      })
    }) 
  }

  function khuudasSergeekh() {
    setUndsenState({...undsenState})
  }

  return (
    <UndsenCtx.Provider 
      value={{
        undsenState,
        undsenKhuudasruuShiljikh,
        khereglegchBurtguulakh,
        khuudasSergeekh, 
        nevtrekh,
        togloltiinJagsaalt
      }}>
      <div className='block'>
            <TolgoiTses />
            {/* <UndsenKhailt /> */}
            {children}
            <UndsenZagvarKhul />
        </div>
    </UndsenCtx.Provider>)
}
