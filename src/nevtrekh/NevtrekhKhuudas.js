import React, { useContext, useState } from 'react'
import { DursZuragch, SButton, SInput, uilchilgeeDuudagch, medeeKharuulakh, isNullOrUndefined } from '../components'
import { Drawer } from 'antd';
import Burtguulekh from './Burtguulekh';
import { UndsenCtx } from '../udnsenZagvar/UndsenZagvar';

export default function NevtrekhKhuudas(props) 
{
  const undsenCtx = useContext(UndsenCtx)
  const [burtgekhEsekh, setBurtgekhEsekh] = useState(false);

  const [khereglegch, setKhereglegch] = useState({
    email:'',
    password:'' 
  })
  const burtguulekhDarakh = () => {
    setBurtgekhEsekh(true);
  };
  const burtgekhTsonkhKhaakh = () => {
    setBurtgekhEsekh(false);
  };

  function utgaSolikh(utga, turul) {
    khereglegch[turul] = utga
    setKhereglegch({...khereglegch})
  }
  function urgeljlvvlekh() {
    undsenCtx.nevtrekh(khereglegch).then(khariu =>{ 
      if (!isNullOrUndefined(khariu) && !isNullOrUndefined(khariu.message))
        medeeKharuulakh('warning', "Анхааруулга", khariu.message) 
    })
  }

  return (
    <div className='bg-[rgb(244,245,249)] w-full h-full'>
      <div className='pb-[110px] pt-[110px] '> 
        <div className='container mx-auto'>
          <div className='flex justify-center' >
            <div className='sm:flex-[0_0_94%] md:flex-[0_0_94%] lg:flex-[0_0_35%] 2xl:flex-[0_0_35%]'>
              <div className='bg-white p-[30px] rounded shadow-[0px_0px_40px_0px_#0000000d] relative overflow-hidden text-center'>
                  <div className="heading_s1">
                        <h3 className="mb-[30px] text-[#152035]">Нэвтрэх</h3>
                    </div>
                    <div className='mb-[1rem]'>
                        <SInput 
                          placeholder='И-мэйл хаяг эсвэл гар утасны дугаар'
                          value = {khereglegch.email}    
                          onChange = {(e)=> utgaSolikh(e.target.value,'email')}
                        />
                    </div>
                    <div className='mb-[1rem]'>
                        <SInput 
                         value = {khereglegch.password}    
                         onChange = {(e)=> utgaSolikh(e.target.value,'password')}
                          placeholder='Нууц үг'
                        /> 
                    </div>
                    <SButton onClick = {()=> urgeljlvvlekh()}>Үргэлжлүүлэх</SButton>         
                    <div className="my-[15px] text-center relative divider-text-center">
                      <span className='bg-white relative uppercase p-[0px_15px] text-xs'>эсвэл</span>
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
                    <div className='p-3 mt-3 text-right flex items-center justify-end'>
                      <span className='text-slate-500 text-sm'>шинэ хэрэглэгч болох</span> <div onClick={()=> burtguulekhDarakh()} className='text-blue-500 underline hover:cursor-pointer hover:text-red-500 hover:font-bold ml-2 text-base'>Бүртгүүлэх</div>
                    </div>
                    <Drawer
                        contentWrapperStyle={{width:'100%'}}
                        title="Шинэ хэрэглэгч болох"
                        placement="right"
                        closable={false}
                        onClose={burtgekhTsonkhKhaakh}
                        open={burtgekhEsekh}
                        getContainer={false}
                      >
                        {burtgekhEsekh && <Burtguulekh  burtgekhEsekh = {burtgekhEsekh} setBurtgekhEsekh = {setBurtgekhEsekh} />}
                    </Drawer>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}
