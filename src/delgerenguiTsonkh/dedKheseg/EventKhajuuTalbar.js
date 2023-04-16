import { Divider } from 'antd'
import React from 'react'
import { DelgerenguiCtx } from '../DelgerenguiContext'
const EventKhajuuTalbar = () => {
    const {setOpen} = React.useContext(DelgerenguiCtx)
  return (
    <div className='w-full md:w-1/3 p-3 bg-white rounded-[4px] shadow-md px-4 flex flex-col'>
        <Divider orientation='left' plain><p className='font-bold text-lg'>Тасалбар захиалах</p></Divider>
        <div className='w-full flex flex-col gap-3'>
            <button ClassName="px-5 py-2 relative rounded group  text-white font-medium inline-block">
                <span ClassName="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span ClassName="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span ClassName="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span ClassName="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <div className='flex flex-row items-center relative'>
                    <div className='flex flex-row gap-2 items-center'><span>Огноо:</span> <span>2023-04-11</span></div>
                    <Divider type='vertical'/>
                    <div className='flex flex-row gap-2 items-center'><span>Цаг:</span> <span>18:00</span></div>
                </div>
            </button>
            <button ClassName="px-5 py-2 relative rounded group  text-white font-medium inline-block" onClick={() => setOpen(true)}>
                <span ClassName="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span ClassName="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span ClassName="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span ClassName="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <div className='flex flex-row items-center relative'>
                    <div className='flex flex-row gap-2 items-center'><span>Огноо:</span> <span>2023-04-11</span></div>
                    <Divider type='vertical'/>
                    <div className='flex flex-row gap-2 items-center'><span>Цаг:</span> <span>18:00</span></div>
                </div>
            </button>
        </div>
    </div>

  )
}

export default EventKhajuuTalbar