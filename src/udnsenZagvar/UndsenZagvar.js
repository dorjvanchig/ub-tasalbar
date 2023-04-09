import React from 'react'
import TolgoiTses from './TolgoiTses'
import UndsenZagvarKhul from './UndsenZagvarKhul' 

export default function UndsenZagvar({children }) 
{  
  return (<div className='block'>
            <TolgoiTses />
            {children}
            <UndsenZagvarKhul />
        </div>)
}
