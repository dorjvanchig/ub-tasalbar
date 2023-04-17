import React from 'react';
import Image from 'next/image';
import EventTailbar from './dedKheseg/EventTailbar';
import EventKhajuuTalbar from './dedKheseg/EventKhajuuTalbar';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Divider } from 'antd';
import { DursZuragch } from '../components';
import { DelgerenguiCtx } from './DelgerenguiContext';
import ProgressTimer from './ProgressTimer';
const UndsenTsonkh = () => { 
    
    const {songosonTasalbar} = React.useContext(DelgerenguiCtx)
    return (
        <section className='w-full h-fit'>
            <div className='w-full h-[350px] relative p-4 flex justify-center items-center' style={{backgroundImage: 'url("https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='absolute w-full h-full top-0 left-0 bg-[#000000aa] backdrop-blur-sm z-0'></div>
                <div className='w-5/6 h-[300px] flex md:flex-row flex-col z-10 items-center gap-4'>
                    <div className='h-fit w-fit rounded-[4px] overflow-hidden shadow-sm shadow-sky-50'>
                        <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='flex flex-col w-full text-sky-50 gap-5'>
                        <div className='w-full text-center md:text-start text-[1.6rem] font-bold'>
                            <h2>{songosonTasalbar?.ner}</h2>
                        </div>
                        <div className='block line-clamp-2'>
                            <div className='flex'>
                                <div className='w-[25%] text-sm text-slate-200 font-normal'>Хаана:</div>    
                                <div>Улсын Драмын Эрдмийн Театр</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[25%] text-sm text-slate-200 font-normal'>Хэзээ:</div>    
                                <div className='truncate'>2023.04.20, 04.21, 04.22, 04.23</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[25%] text-sm text-slate-200 font-normal'>Зохион байгуулагч:</div>    
                                <div className='truncate'>Улсын Драмын Эрдмийн Театр</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[25%] text-sm text-slate-200 font-normal'>Тоглолтын төрөл:</div>    
                                <div className='truncate'>Жүжиг</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[25%] text-sm text-slate-200 font-normal'>Үргэлжлэх хугацаа:</div>    
                                <div className='truncate'>150 минут</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[25%] text-sm text-slate-200 font-normal'>Насны ангилал:</div>    
                                <div className='truncate'>15+</div>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-3 bg-[#f4f5f9] pt-5'>
                <div className='container flex flex-col gap-3'>
                    <Divider plain></Divider>
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:mb-16"> 
                        {
                            [1,2,3].map((ugugdul, muriinDugaar)=> {
                                return (<section className="relative bg-white rounded transition-all border-b shadow p-5 hover:bg-blue-50">
                                            <div className="flex items-center justify-between mb-5">
                                                <span className="uppercase text-c1 font-semibold">05 / 06 <br/>
                                                    <span className="text-gray-400">Бямба</span>
                                                </span>
                                                <div className="flex rounded px-2 py-1 text-c1 shadow font-bold items-center space-x-2">
                                                    <span className="flex items-center space-x-2">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="21" width="21" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                                                            <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
                                                        </svg>
                                                        <span>17:00</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <a className="uppercase text-center block bg-[#003399] px-3 py-1 mb-4 rounded text-white font-semibold text-sm" href="/events/63dc94cb8899f6194c2b0630/order/643520c97680e21ca189d01a">
                                                Тасалбар авах
                                            </a>
                                            <ProgressTimer targetDate={new Date("2023-04-27 19:30")} progressValue={0}></ProgressTimer>
                                            {/* <section className="flex justify-between">
                                                <section className="flex flex-col space-y-[2px] items-center">
                                                    <span className="text-red-500 font-bold">18</span>
                                                    <span className="text-xs capitalize opacity-50">өдөр</span>
                                                </section>
                                                <span className="animate-pulse2 text-red-500">:</span>
                                                <section className="flex flex-col space-y-[2px] items-center">
                                                    <span className="text-red-500 font-bold">18</span>
                                                    <span className="text-xs capitalize opacity-50">цаг</span>
                                                </section>
                                                <span className="animate-pulse2 text-red-500">:</span>
                                                <section className="flex flex-col space-y-[2px] items-center">
                                                    <span className="text-red-500 font-bold">30</span>
                                                    <span className="text-xs capitalize opacity-50">минут</span>
                                                </section>
                                                <span className="animate-pulse2 text-red-500">:</span>
                                                <section className="flex flex-col space-y-[2px] items-center">
                                                    <span className="text-red-500 font-bold">04</span>
                                                    <span className="text-xs capitalize opacity-50">секунд</span>
                                                </section>
                                            </section> */}
                                    </section>
                                )
                            })
                        }
                     </div>
                    <div className='w-full flex flex-col md:flex-row relative gap-3 md:gap-0'>
                        <EventTailbar/>
                        <div className='hidden md:block mx-3 border-l' />
                        <EventKhajuuTalbar/>
                    </div>
                    {/* <div className='w-full h-[1000px]'></div> */}
                </div>
            </div>
        </section>
    );
}

export default UndsenTsonkh;
