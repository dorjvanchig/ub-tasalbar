import React from 'react'
import { DursZuragch, SButton, SInput } from '../components'

export default function NevtrekhKhuudas(props) {
  return (
    <div className='bg-[rgb(244,245,249)] w-full h-full'>
    <div className='pb-[110px] pt-[110px] '> 
      <div className='container mx-auto'>
         <div className='flex justify-center'>
          <div className='sm:flex-[0_0_94%] md:flex-[0_0_94%] lg:flex-[0_0_35%] 2xl:flex-[0_0_35%]'>
            <div className='bg-white p-[30px] rounded overflow-hidden shadow-[0px_0px_40px_0px_#0000000d]'>
                <div className="heading_s1">
                      <h3 className="mb-[30px] text-[#152035]">Нэвтрэх</h3>
                  </div>
                  <div className='mb-[1rem]'>
                      <SInput 
                        placeholder='И-мэйл хаяг эсвэл гар утасны дугаар'
                      />
                  </div>
                  <div className='mb-[1rem]'>
                      <SInput 
                        placeholder='Нууц үг'
                      /> 
                  </div>
                  <SButton>Үргэлжлүүлэх</SButton>         
                  <div className="my-[15px] text-center relative divider-text-center">
                    <span className='bg-white relative uppercase p-[0px_15px] text-xs'>Бусад</span>
                  </div> 
                  <div className='grid grid-cols-2 items-center justify-center'>
                    <div className='flex items-center justify-end px-1'>
                      <SButton size= "large" className = "!bg-[#3b5998] !border-[#3b5998] w-[75%] flex items-center justify-center">
                        <DursZuragch icon = "uil:facebook-f"/>
                        <span className='capitalize ml-2'>facebook</span>
                      </SButton>
                    </div>
                    <div className='flex items-center justify-start px-1 '>
                      <SButton size= "large" className = "!bg-[#d85040] !border-[#d85040] w-[75%] flex items-center justify-center">
                        <DursZuragch icon = "entypo-social:google"/>
                        <span className='capitalize ml-2'>Google</span>
                      </SButton>
                    </div>
                  </div> 
            </div>
          </div>
         </div>
      </div>
    </div>
    </div>
  )
}
