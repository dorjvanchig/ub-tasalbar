import React from 'react'
//import admin from '../../../styles/Admin.module.css'
import { DursZuragch, useBodyUndurOlyo } from '@/src/components'
import Image from 'next/image'
import Toglolt from '../../../public/zurag/bieKhun.png'
import { TogloltCtx } from './TogloltContext'
export default function UndsenTsonkh() {
    const { togloltOruulya, tolgoltState } = React.useContext(TogloltCtx)
    let undur = useBodyUndurOlyo(0)
  return (
    <div className='w-full flex flex-col relative gap-2 h-full rounded-[3px] p-3'>
            <div className='w-full flex justify-end'>
                <button class="px-5 py-1 relative rounded group font-medium text-white inline-block" onClick={togloltOruulya}>
                    <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <div className='flex flex-row items-center relative'>
                        Нэмэх1
                    </div>
                </button>
            </div>
            <div className='w-full' style={{height:undur -171}}>
                {
                    tolgoltState?.jagsaaltKharuulakh.map((ugugdul, muriinDugaar) =>{
                        return(<div key={muriinDugaar} 
                            className='w-full drop-shadow-sm hover:drop-shadow-lg hover:cursor-pointer bg-white border border-slate-200 hover:border hover:border-indigo-500 rounded-md mt-2 flex flex-row p-2 items-center'>
                              <Image 
                                    alt = "zurag1"
                                    className='h-[137px] w-[30%] rounded-md bg-origin-content'
                                    src={Toglolt}
                              />
                            <div className='px-3 py-1 w-[70%]'>
                                <div className='flex flex-row items-center justify-between'>
                                    <div className='text-lg font-semibold'>{ugugdul.ner}</div> 
                                    <div className='flex flex-row items-center'>
                                        <button className='outline-0 border border-slate-200 hover:bg-slate-200 items-center justify-center flex p-1 rounded-lg'>
                                            <DursZuragch icon = "ph:note-pencil-duotone" className = "h-[18px] w-[18px] text-[#faad14]"/>
                                        </button>
                                        <button className='outline-0 border border-slate-200 hover:bg-slate-200 items-center justify-center flex p-1 ml-1 rounded-lg'>
                                            <DursZuragch icon = "ic:round-delete-forever" className = "h-[18px] w-[18px] text-red-500"/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='flex flex-row items-center'>
                                        <div className='text-xs text-slate-400'>Зохин байгуулагч:</div>
                                        <span className='text-sm text-slate-700 ml-2'>{ugugdul.zokhionBaiguulagch}</span>
                                    </div>
                                    <div className='flex flex-row items-center ml-3'>
                                        <div className='text-xs text-slate-400'>Хаана:</div>
                                        <span className='text-sm text-slate-700 ml-2'>{ugugdul.zokhionBaiguulagch}</span>
                                    </div>
                                </div>
                                <div className='text-sm text-slate-600 py-1 w-[100%] h-[52px] truncate'>{ugugdul.delgerenguiMedeelel}</div>
                                <div className='flex flex-row'>
                                    <div className='flex flex-row items-center bg-slate-200 px-1 py-1'> 
                                        <div className='text-xs'>Танхим:</div>
                                        <div className='text-sm ml-1'>{ugugdul.tankhim}</div>
                                    </div>
                                    <div className='flex flex-row ml-1 items-center bg-slate-200 px-1 py-1'> 
                                        <DursZuragch icon = "ic:baseline-access-time" className = "h-[12px] w-[12px] mr-1"/>
                                        <span className='text-slate-500 text-xs truncate'>{ugugdul.urgeljlekhKhugatsaa} минут</span>
                                    </div>
                                    <div className='flex flex-row ml-1 items-center bg-slate-200 px-1 py-1'> 
                                        <DursZuragch icon = "simple-icons:musicbrainz" className = "h-[12px] w-[12px] mr-1"/>
                                        <span className='text-slate-500 text-xs truncate'>{ugugdul.turul}</span>
                                    </div>
                                    <div className='flex flex-row ml-1 items-center bg-slate-200 px-1 py-1'> 
                                        <DursZuragch icon = "ic:round-group-add" className = "h-[12px] w-[12px] mr-1"/>
                                        <span className='text-slate-500 text-xs truncate'>{ugugdul.nasniiAngilal} +</span>
                                    </div> 
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
  )
}
