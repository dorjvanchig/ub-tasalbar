import { Divider } from 'antd'
import React from 'react'
import { DelgerenguiCtx } from '../DelgerenguiContext'
import { DursZuragch } from '@/src/components'
const EventKhajuuTalbar = () => {
    const {setOpen, songosonTasalbar} = React.useContext(DelgerenguiCtx)
  return (
    <div className='w-full md:w-1/3 p-3 bg-white rounded-[4px] shadow-md px-4 flex flex-col'>
        <Divider orientation='left' plain><p className='font-bold text-lg'>Тасалбарын үнэ</p></Divider>
        <div className='w-full flex flex-col gap-3'>
        {songosonTasalbar?.uniinMedeelel?.map((ugugdul)=>{
            return <div className='flex items-center border border-slate-200 px-3 py-2 rounded-md shadow-sm hover:bg-slate-200 hover:cursor-pointer'>
                    <div className='flex items-center w-1/2'>
                        <div className='w-7 h-7 flex items-center justify-center rounded-full p-1 bg-slate-200'>
                            <DursZuragch icon = "ion:ticket" className = "text-blue-300"/>
                        </div>
                        <div className='ml-3 text-slate-500 truncate'>Тасалбар1</div>
                    </div>
                    <div className='flex items-center w-1/2 justify-end text-slate-500 font-semibold'>
                        {ugugdul.une}
                    </div>
                </div>
        })}
        </div>
    </div>

  )
}

export default EventKhajuuTalbar