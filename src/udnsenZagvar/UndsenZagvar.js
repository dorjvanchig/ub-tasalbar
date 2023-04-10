import React, { createContext } from 'react'
import TolgoiTses from './TolgoiTses'
import UndsenKhailt from './UndsenKhailt'
import UndsenZagvarKhul from './UndsenZagvarKhul' 
import { useRouter } from 'next/router';
export const UndsenCtx = createContext({})
export default function UndsenZagvar({children }) 
{  
  const router = useRouter()

  function undsenKhuudasruuShiljikh() {
    router.push('/')
  }

  return (
    <UndsenCtx.Provider 
      value={{
        undsenKhuudasruuShiljikh,
        router
      }}>
      <div className='block'>
            <TolgoiTses />
            {/* <UndsenKhailt /> */}
            {children}
            <UndsenZagvarKhul />
        </div>
    </UndsenCtx.Provider>)
}
