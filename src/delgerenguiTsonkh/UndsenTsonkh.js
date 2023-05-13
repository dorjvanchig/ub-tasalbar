import React from 'react';
import Image from 'next/image';
import EventTailbar from './dedKheseg/EventTailbar';
import EventKhajuuTalbar from './dedKheseg/EventKhajuuTalbar';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Divider } from 'antd';
import { isNullOrUndefined, formatOgnoo, khoosonObjectEsekh, khoosonJagsaaltEsekh } from '../components';
import { DelgerenguiCtx } from './DelgerenguiContext';
import ProgressTimer from './ProgressTimer';

import _ from 'lodash'
import { useRouter } from 'next/router';
const UndsenTsonkh = () => { 
    const router = useRouter()
    const { songosonTasalbar, routeKhiiye } = React.useContext(DelgerenguiCtx)

    function tsagiinMedeelel(muriinUgugdul) {
        let ognooStr = ""
        if (!isNullOrUndefined(muriinUgugdul.tsagiinMedeelel) && 
            !khoosonJagsaaltEsekh(muriinUgugdul.tsagiinMedeelel)){
            let ognoo = _.groupBy(muriinUgugdul.tsagiinMedeelel, function (ugugdul) {
                return formatOgnoo(ugugdul.ognoo, 'YYYY')
            }) 
            if (!isNullOrUndefined(ognoo) && !khoosonObjectEsekh(ognoo)){
                Object.keys(ognoo).forEach(a=>{
                    ognoo[a].forEach(b=> {
                        if (ognooStr.includes(a)){
                            ognooStr +=  formatOgnoo(b.ognoo, 'MM/DD') + "   "
                        }
                        else 
                        ognooStr += a+"."  + formatOgnoo(b.ognoo, 'MM/DD') + ","
                    })
                })
            }
        }
        return ognooStr;
    } 
    return (
        <section className='w-full h-fit'>
            <div className='w-full h-[350px] relative p-4 flex justify-center items-center' style={{backgroundImage: `url("${songosonTasalbar?.zurag}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='absolute w-full h-full top-0 left-0 bg-[#000000aa] backdrop-blur-sm z-0'></div>
                <div className='w-5/6 h-[300px] flex md:flex-row flex-col z-10 items-center gap-4'>
                    <div className='h-[300px] w-auto rounded-[4px] relative overflow-hidden'>
                        <Image 
                            src={songosonTasalbar?.zurag} 
                            style={{objectFit: 'contain'}}
                            fill
                        />
                    </div>
                    <div className='flex flex-col w-full text-sky-50 gap-5'>
                        <div className='w-full text-center md:text-start text-[1.6rem] font-bold'>
                            <h2>{songosonTasalbar?.ner}</h2>
                        </div>
                        <div className='block line-clamp-2'>
                            <div className='flex'>
                                <div className='w-[25%] text-sm text-slate-200 font-normal'>Хаана:</div>    
                                <div>{songosonTasalbar?.khaana}</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[25%] text-sm text-slate-200 font-normal'>Хэзээ:</div>    
                                <div className='truncate'>{tsagiinMedeelel(songosonTasalbar)}</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[25%] text-sm text-slate-200 font-normal'>Зохион байгуулагч:</div>    
                                <div className='truncate'>{songosonTasalbar?.zokhionBaiguulagch}</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[25%] text-sm text-slate-200 font-normal'>Тоглолтын төрөл:</div>    
                                <div className='truncate'>{songosonTasalbar?.turul}</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[25%] text-sm text-slate-200 font-normal'>Үргэлжлэх хугацаа:</div>    
                                <div className='truncate'>{songosonTasalbar?.urgeljlekhKhugatsaa} {songosonTasalbar?.urgeljlekhKhugatsaa > 60 ? "цаг" : "минут"}</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[25%] text-sm text-slate-200 font-normal'>Насны ангилал:</div>    
                                <div className='truncate'>{songosonTasalbar?.nasniiAngilal}+</div>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-3 bg-[#f4f5f9] pt-5'>
                <div className='container flex flex-col gap-3'>
                    <Divider plain></Divider>
                    {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 */}
                    <div className="container mx-auto flex flex-row gap-10 lg:mb-16 overflow-auto p-2"> 
                        {
                            songosonTasalbar?.tsagiinMedeelel?.map((ugugdul, muriinDugaar)=> {
                                return (<section className="relative min-w-[280px] w-[280px] bg-white rounded transition-all border-b shadow-sm p-5">
                                            <div className="flex items-center justify-between mb-5">
                                                <span className="uppercase text-c1 font-semibold">{new Date(ugugdul.khezee).getMonth() + 1} / {new Date(ugugdul.khezee).getDay()} <br/>
                                                    <span className="text-gray-400">Бямба</span>
                                                </span>
                                                <div className="flex rounded px-2 py-1 text-c1 shadow-sm font-bold items-center space-x-2">
                                                    <span className="flex items-center space-x-2">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="21" width="21" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                                                            <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
                                                        </svg>
                                                        <span>17:00</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <button onClick={routeKhiiye} 
                                                className="uppercase text-center block bg-[#ef3f48] px-3 py-1 mb-4 rounded text-white font-semibold text-sm cursor-pointer w-full">
                                                Тасалбар авах
                                            </button>
                                            <div className='flex items-center justify-center'>
                                                <ProgressTimer targetDate={new Date(ugugdul.khezee)} progressValue={0}></ProgressTimer>
                                            </div>
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
