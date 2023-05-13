import React from 'react'
import { DursZuragch } from '@/src/components'
import { ZakhialgaCtx } from '../ZakhialgaContext'
export default function KhajuuTalbar() {
    const { tomState, suudalKhasya } = React.useContext(ZakhialgaCtx)
    return (
        <>
            <div className='flex md:hidden w-full h-[60px] border-t-2 fixed bottom-[40px] justify-between items-center px-3 bg-white' onClick={() => setKhajuugiinTalbar(true)}>
                <div className='flex flex-row gap-2'>
                    <span className='text-lg text-gray-800'>Нийт:</span>
                    <span className='text-xl font-bold text-gray-800'>
                    250,000.00₮
                    </span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <span className='text-xl font-bold'>
                    3
                    </span>
                    <DursZuragch icon='material-symbols:left-panel-close-outline-sharp'/>
                </div>
                </div>
                <div className='flex md:hidden w-full h-[40px] fixed bottom-0 justify-center items-center px-3 bg-white'>
                    <button className='flex w-full h-[40px] bg-emerald-600 justify-center items-center rounded-[4px] mt-[-10px]'>
                        <span className='text-white font-bold'>Захиалах</span>
                    </button>
                </div>
                <div className='w-full h-full lg:flex lg:w-3/12 bg-white relative z-50 overflow-hidden border border-gray-300 hidden flex-col items-baseline justify-between'>
                    <div className='flex flex-col justify-start h-[calc(100%-200px)] w-full px-2 py-3 overflow-auto bg-gray-100 gap-2, relative'>
                        {
                            tomState.songogdsonSuudal.map((x, i)=> {
                                return <div key={i} className='h-[70px] flex flex-row w-full border rounded-[3px]'>
                                <div className='w-[80%] h-full bg-white border-r-2 border-dashed shadow-md rounded-l-md py-2 px-3 flex flex-col gap-2'>
                                    <div className='flex flex-row w-full justify-between items-center'>
                                        <span>{x.buleg}</span>
                                        <span>Үнэ: {`${x.une}₮`}</span>
                                    </div>
                                    <div className='flex flex-row gap-3'>
                                    <div className='bg-sky-100 px-1 rounded-sm flex flex-row gap-2 w-fit text-[0.8rem] border border-sky-300 h-fit'>
                                        <span>Эгнээ:</span>
                                        <span>{x.egnee}</span>
                                    </div>
                                    <div className='bg-sky-100 px-1 rounded-sm flex flex-row gap-2 w-fit text-[0.8rem] border border-sky-300 h-fit'>
                                        <span>суудал:</span>
                                        <span>{x.suudal}</span>
                                    </div>
                                    </div>
                                </div>
                                <div className='w-[20%] h-full relative bg-white p-2 after:content-[""] after:absolute after:bg-gray-100 after:w-[10px] after:h-[10px] after:bottom-[-5px] after:left-[-5px] after:rounded-full before:content-[""] before:absolute before:bg-gray-100 before:w-[10px] before:h-[10px] before:top-[-5px] before:left-[-5px] before:rounded-full shadow-md rounded-r-md'>
                                    <button className='w-full h-full bg-rose-600 flex flex-col justify-center items-center rounded-md' onClick={() => {suudalKhasya(x.id)}}>
                                        <DursZuragch icon='solar:trash-bin-minimalistic-2-bold' style={{color: 'white'}}/>
                                        <span className='text-sm text-white'>Хасах</span>
                                    </button>
                                </div>
                                </div>
                            })
                        }
                        {
                            tomState.songogdsonSuudal.length > 0 && <div className='sticky bottom-0 w-full left-0 px-5 py-1 bg-white flex-col flex mt-2 rounded-[4px] shadow-md'>
                                <div className='flex flex-row w-full justify-between'>
                                    <span className='whitespace-nowrap'>
                                        Тасалбарын тоо: {tomState.songogdsonSuudal.length}
                                    </span>
                                    <span className='whitespace-nowrap'>
                                        Нийт: {tomState.songogdsonSuudal.reduce((x, y) => x += y.une, 0)}
                                    </span>
                                </div>
                                <button className='flex w-full h-[40px] bg-emerald-600 justify-center items-center rounded-[4px]'>
                                    <span className='text-white font-bold'>Захиалах</span>
                                </button>
                            </div>
                        }
                        
                    </div>
                    <div className='bg-[#2980b910] flex flex-col px-3 py-5 w-full max-h-[200px] min-h-[200px] rounded-t-md gap-3 border-t-2'>
                        {
                            tomState.togloltiinMedeelel?.uniinMedeelel.map((x, i) => {
                                return <div key={i} className='flex flex-row border-b-2 py-2 px-2 gap-3 justify-between'>
                                <div className='flex flex-row gap-2'>
                                    <div className='w-[20px] h-[20px] rounded-full' style={{
                                    background: x.ungu
                                    }}/>
                                    <span className='w-auto'>
                                    {x.buleg}
                                    </span>
                                </div>
                                <span className='w-auto'>
                                    {x.une}
                                </span>
                                </div>
                            })
                        }
                    </div>
                </div>
        </>
    )
}
