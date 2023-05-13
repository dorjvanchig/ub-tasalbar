import React from 'react'
import { ZakhialgaCtx } from '../zakhialgaContext'
import Image from 'next/image'
export default function BatalgaajuulakhTalbar() {
    const { tomState } = React.useContext(ZakhialgaCtx)

    return (
        <div className='w-full flex justify-center items-center h-full bg-slate-50'>
            <div className='container h-full p-4 flex flex-row gap-3'>
                <div className='w-3/4'>
                    {tomState.songogdsonSuudal.map((x, i)=> {
                            return <div key={i} className='w-full h-[200px] border flex flex-row p-3 relative rounded-[4px] overflow-hidden' style={{
                                    backgroundImage: `url('${tomState.togloltiinMedeelel.zurag}')`
                                }}>
                                    <div className='absolute w-full h-full left-0 top-0 bg-[#000000aa] backdrop-blur-md'/>
                                    <div className='z-50 flex flex-row gap-2'>
                                        <div className='w-auto h-full'>
                                            <Image
                                                src={tomState.togloltiinMedeelel.zurag}
                                                fill
                                            />
                                        </div>
                                        <div className='text-white z-50 relative'>
                                            <h2 className='w-full text-center font-bold text-lg'>
                                                {tomState.togloltiinMedeelel.ner}
                                            </h2>
                                            <article className='text-md flex flex-col'>
                                                <div className='flex flex-row gap-2'>
                                                    <span>
                                                        Байршил:
                                                    </span>
                                                    <span>
                                                       {tomState.togloltiinMedeelel.tankhim}
                                                    </span>
                                                </div>
                                                <div className='flex flex-row gap-2'>
                                                    <span>
                                                        Эгнээ:
                                                    </span>
                                                    <span>
                                                       {x.egnee}
                                                    </span>
                                                </div>
                                                <div className='flex flex-row gap-2'>
                                                    <span>
                                                        Суудал:
                                                    </span>
                                                    <span>
                                                       {x.suudal}
                                                    </span>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                    })}
                </div>
                <div className='w-1/4'>
                    <div className='flex flex-row w-full justify-between text-2xl'>
                        <span className='text-gray-800'>
                            Нийт:
                        </span>
                        <span className='text-gray-800 font-bold'>
                            {tomState.songogdsonSuudal.reduce((x, y) => x += y.une, 0)}₮
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
