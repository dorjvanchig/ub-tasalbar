import React, { createContext, useState, use } from 'react'
import TolgoiTses from './TolgoiTses'
import UndsenKhailt from './UndsenKhailt'
import UndsenZagvarKhul from './UndsenZagvarKhul' 
import { uilchilgeeDuudagch, medeeKharuulakh, isNullOrUndefined,khereglegchMedeelelKhadgalakh, khereglegchUstgakh } from '../components'
import { useRouter } from 'next/router';
export const UndsenCtx = createContext({})
export default function UndsenZagvar({children }) 
{  
  const router = useRouter()
  const [undsenState, setUndsenState] = useState({
    nevtersenKhereglegch:{email:'Нэвтрэх'},
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

  function systemeesGarakh() {
    khereglegchUstgakh()
    router.reload()
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
          if(khariu.khereglegch.role === 'admin') {
            router.push('admin/adminNuur')
          } else {
            undsenKhuudasruuShiljikh()
          }
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
        togloltiinJagsaalt,
        systemeesGarakh
      }}>
      <div className='block'>
            <TolgoiTses />
            {/* <UndsenKhailt /> */}
            {children}
            <UndsenZagvarKhul />
        </div>
    </UndsenCtx.Provider>)
}
