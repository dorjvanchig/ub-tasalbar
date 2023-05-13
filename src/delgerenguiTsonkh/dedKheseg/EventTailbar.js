import React from 'react'
import { Divider } from 'antd'
import { DelgerenguiCtx } from '../DelgerenguiContext'
const EventTailbar = () => {
  const {songosonTasalbar} = React.useContext(DelgerenguiCtx)
  return (
    <div className='w-full md:w-2/3 px-5 bg-white rounded-[4px] shadow-md py-4'>
        <div className="text-md flex flex-col"> 
            <Divider plain orientation='left'><p className='font-bold text-[1.4rem] text-slate-700'>Дэлгэрэнгүй</p></Divider>
            <div className='break-words text-sm text-slate-600' dangerouslySetInnerHTML={{__html: songosonTasalbar.delgerenguiMedeelel}}/>
        </div>
    </div>
  )
}
 export default EventTailbar