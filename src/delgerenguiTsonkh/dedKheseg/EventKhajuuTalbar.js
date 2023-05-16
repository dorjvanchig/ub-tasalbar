import { Divider } from 'antd'
import React from 'react'
import { DelgerenguiCtx } from '../DelgerenguiContext'
import { DursZuragch, formatOgnoo, isNullOrUndefined } from '@/src/components'
import dayjs from 'dayjs'
const EventKhajuuTalbar = () => {
    const {setOpen, songosonTasalbar, tomState, tsagSongyo, routeKhiiye} = React.useContext(DelgerenguiCtx)
    return (
        <div className='w-full md:w-1/3 p-3 rounded-[4px] px-4 flex flex-col'>
            <Divider orientation='left' plain><p className='font-bold text-lg'>Тасалбарын үнэ</p></Divider>
            <div className='w-full flex flex-col gap-3'>
            {songosonTasalbar?.tsagiinMedeelel?.map((ugugdul, index)=>{
                return <div key={index} className={`flex items-center border border-slate-200 px-3 py-2 rounded-md shadow-sm hover:bg-slate-200 ${dayjs(ugugdul.khezee).format('YYYY-MM-DD 00:00:00') === tomState.songosonTsag && 'bg-slate-200'} hover:cursor-pointer`} onClick={() => {tsagSongyo(dayjs(ugugdul.khezee).format('YYYY-MM-DD 00:00:00'))}}>
                        <div className='flex items-center w-full'>
                            <div className='w-7 h-7 flex items-center justify-center rounded-full p-1 bg-slate-200'>
                                <DursZuragch icon = "ion:ticket" className = "text-blue-300"/>
                            </div>
                            <div className='ml-3 text-slate-500 truncate'>{dayjs(ugugdul.khezee).format('YYYY-MM-DD 00:00:00')}</div>
                        </div>
                        {/* <div className='flex items-center w-1/2 justify-end text-slate-500 font-semibold'>
                            {ugugdul.une}
                        </div> */}
                    </div>
            })}
            <div className='flex w-full flex-row'>
                <button className={`w-full justify-center flex flex-row rounded-[4px] py-1 text-[1rem] font-bold ${!isNullOrUndefined(tomState.songosonTsag) ? 'bg-emerald-200 border border-emerald-900 text-emerald-900 cursor-pointer' : 'bg-gray-200 border border-gray-900 text-gray-900 cursor-not-allowed'}`}
                    onClick={() => routeKhiiye()}
                    disabled={isNullOrUndefined(tomState.songosonTsag)}
                >
                    Захиалах
                </button>
            </div>
            </div>
        </div>
    )
}

export default EventKhajuuTalbar