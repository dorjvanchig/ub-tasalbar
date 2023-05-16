import React from 'react'
import { Divider } from 'antd'
import { DelgerenguiCtx } from '../DelgerenguiContext'
import Image from 'next/image'
const EventTailbar = () => {
  const {songosonTasalbar} = React.useContext(DelgerenguiCtx)
  return (
    <div className='w-full md:w-2/3 px-5 bg-white rounded-[4px] shadow-md py-4'>
        <div className="text-md flex flex-col"> 
            <div className='overflow-hidden h-[500px] rounded-[4px]' style={{
              backgroundImage: `url(${songosonTasalbar.zurag})`,
              backgroundSize: 'cover',
              backdropFilter: 'blur(9px)',
            }}>
              <div className='absolute left-0 top-0 backdrop-blur-sm w-full h-full'/>
                <Image src={songosonTasalbar.zurag}
                  fill
                  style={{
                    objectFit: 'contain'
                  }}
                />
            </div>
            <div className='flex flex-wrap gap-2 mt-2 select-none'>
                <div className='flex flex-col px-2 py-1 bg-gray-100 rounded-[4px] cursor-pointer'>
                  <label className='text-[0.75rem]'>Насны ангилал</label>
                  <span>{songosonTasalbar.nasniiAngilal}+</span>
                </div>
                <div className='flex flex-col px-2 py-1 bg-gray-100 rounded-[4px] cursor-pointer'>
                  <label className='text-[0.75rem]'>Зохион байгуулагч</label>
                  <span>{songosonTasalbar.zokhionBaiguulagch}</span>
                </div>
                <div className='flex flex-col px-2 py-1 bg-gray-100 rounded-[4px] cursor-pointer'>
                  <label className='text-[0.75rem]'>Хугацаа</label>
                  <span>{songosonTasalbar.urgeljlekhKhugatsaa} мин</span>
                </div>
                <div className='flex flex-col px-2 py-1 bg-gray-100 rounded-[4px] cursor-pointer'>
                  <label className='text-[0.75rem]'>Хаана</label>
                  <span>{songosonTasalbar.tankhim}</span>
                </div>
                <div className='flex flex-col px-2 py-1 bg-gray-100 rounded-[4px] cursor-pointer'>
                  <label className='text-[0.75rem]'>Төрөл</label>
                  <span>{songosonTasalbar.turul}</span>
                </div>
            </div>
            <Divider plain orientation='left'><p className='font-bold text-[1.4rem] text-slate-700'>Дэлгэрэнгүй</p></Divider>
            <div className='break-words text-sm text-slate-600' dangerouslySetInnerHTML={{__html: songosonTasalbar.delgerenguiMedeelel}}/>
        </div>
    </div>
  )
}
 export default EventTailbar