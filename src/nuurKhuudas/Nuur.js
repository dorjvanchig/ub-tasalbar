import React, { Children, useEffect, useState } from 'react'
import { Carousel, Spin, Button } from 'antd';
import Image from 'next/image'
import Toglolt from '../../public/zurag/bieKhun.png'
import Toglolt1 from '../../public/zurag/playoff.png'
import Toglolt2 from '../../public/zurag/hevtee.png'
import Toglolt3 from '../../public/zurag/rahmaninoff.png'
import Toglolt4 from '../../public/zurag/winter.png'
import { DursZuragch } from '../components';
import { useRouter } from 'next/router';
export default function Nuur(props) {
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(()=>{
        setTimeout(() => { setLoading (false) }, 2000)
    }, [])
    let bannerJagsaalt = [
        {
            garchig:'WINTER WELODY ардын урлаг, өв соёлын тоглолт',
            delgerengui:'Цагаан лавай чуулгын "WINTER MELODY" ардын урлаг, өв соёлын тоглолтоо долоо хоног бүрийн ЛХАГВА, БААСАН, НЯМ гаригт 18.00 цагт тоглож байна.',
            zurag:Toglolt
        },
        {
            garchig:'WINTER WELODY ардын урлаг, өв соёлын тоглолт',
            delgerengui:'Цагаан лавай чуулгын "WINTER MELODY" ардын урлаг, өв соёлын тоглолтоо долоо хоног бүрийн ЛХАГВА, БААСАН, НЯМ гаригт 18.00 цагт тоглож байна.',
            zurag:Toglolt1
        },
        {
            garchig:'WINTER WELODY ардын урлаг, өв соёлын тоглолт',
            delgerengui:'Цагаан лавай чуулгын "WINTER MELODY" ардын урлаг, өв соёлын тоглолтоо долоо хоног бүрийн ЛХАГВА, БААСАН, НЯМ гаригт 18.00 цагт тоглож байна.',
            zurag:Toglolt2
        },
        {
            garchig:'WINTER WELODY ардын урлаг, өв соёлын тоглолт',
            delgerengui:'Цагаан лавай чуулгын "WINTER MELODY" ардын урлаг, өв соёлын тоглолтоо долоо хоног бүрийн ЛХАГВА, БААСАН, НЯМ гаригт 18.00 цагт тоглож байна.',
            zurag:Toglolt3
        },
        {
            garchig:'WINTER WELODY ардын урлаг, өв соёлын тоглолт',
            delgerengui:'Цагаан лавай чуулгын "WINTER MELODY" ардын урлаг, өв соёлын тоглолтоо долоо хоног бүрийн ЛХАГВА, БААСАН, НЯМ гаригт 18.00 цагт тоглож байна.',
            zurag:Toglolt4
        }
    ]

    let jagsaalt = [
        {
            ner:'Плей-Офф 04/10 (Үндэсний Дээд лиг)',
            ognoo:'2023 он 04 сар 10 өдөр',
            bairshil:'UG ARENA',
            zurag: Toglolt,
        },
        {
            ner:'Плей-Офф 04/10 (Үндэсний Дээд лиг)',
            ognoo:'2023 он 04 сар 10 өдөр',
            bairshil:'UG ARENA',
            zurag: Toglolt1,
        },
        {
            ner:'Плей-Офф 04/10 (Үндэсний Дээд лиг)',
            ognoo:'2023 он 04 сар 10 өдөр',
            bairshil:'UG ARENA',
            zurag: Toglolt2,
        },
        {
            ner:'Плей-Офф 04/10 (Үндэсний Дээд лиг)',
            ognoo:'2023 он 04 сар 10 өдөр',
            bairshil:'UG ARENA',
            zurag: Toglolt3,
        },
        {
            ner:'Плей-Офф 04/10 (Үндэсний Дээд лиг)',
            ognoo:'2023 он 04 сар 10 өдөр',
            bairshil:'UG ARENA',
            zurag: Toglolt4,
        }
    ]

    const routeKhiiye = (zam) => {
        router.push('event/' + zam)
    }
  return (
    <div>
      <main className='bg-[#f4f5f9] py-[30px] relative'>
            <div className='container mx-auto'>
                <div className='banner h-[330px] w-full shadow-md bg-white rounded-lg p-2'>
                <Carousel autoplay>
                    {
                        loading ? (
                            <div className="text-center mt-16">
                                <Spin size="large" />
                            </div>
                            ) : (
                            bannerJagsaalt.map((ugugdul, muriinDugaar)=>{
                                return (<div className='!grid grid-cols-2' key={muriinDugaar}>
                                <div className=' p-8'>
                                    <div className='text-center break-words capitalize text-[1.5rem] mb-[.5rem] font-semibold font-sans text-style !text-[#152035]'>
                                        {ugugdul.garchig}
                                    </div>
                                    <div className='flex items-center py-1 w-full justify-end'>
                                        <div className='flex items-center text-[#889097] px-1 w-[40%]'>
                                            <DursZuragch icon = "clarity:date-line" className = "h-[12px] w-[12px] mr-1"/>
                                            <span className='text-slate-500 text-xs truncate'>2023 оны 4-р сарын 22-нд</span>
                                        </div>
                                        <div className='flex items-center text-[#889097] px-1 w-[17%]'>
                                            <DursZuragch icon = "ic:baseline-access-time" className = "h-[12px] w-[12px] mr-1"/>
                                            <span className='text-slate-500 text-xs truncate'>60 минут</span>
                                        </div>
                                        <div className='flex items-center text-[#889097] px-1 w-[22%]'>
                                            <DursZuragch icon = "simple-icons:musicbrainz" className = "h-[12px] w-[12px] mr-1"/>
                                            <span className='text-slate-500 text-xs truncate'>Концерт</span>
                                        </div>
                                        <div className='flex items-center text-[#889097] px-1 w-[25%] '>
                                            <div className='mr-1 truncate'> Ангилал:</div>
                                            <span className='text-slate-500 text-xs truncate'>8 +</span>
                                        </div>
                                    </div>
                                    <div className='indent-8 py-[18px] font-normal text-[#506172] h-[114px]'>
                                        {ugugdul.delgerengui}
                                    </div>
                                    <div className='border-t border-t-slate-200 border-dashed x-2 py-2 grid grid-cols-3'>
                                        <div className='grid border-r px-2 border-r-slate-200 border-dashed'>
                                            <span className='text-xs text-slate-400'>Хаана</span>
                                            <span className='text-base font-normal truncate'>Төв цэнгэлдэх хүрээлэн</span>
                                        </div>
                                        <div className='grid px-2'>
                                            <span className='text-xs text-slate-400'>Зохион байгуулагч</span>
                                            <span className='text-base font-normal truncate'>Хурд хамтлаг</span>
                                        </div>
                                        <div 
                                            className='flex items-end justify-center border-l border-l-slate-200 border-dashed px-2' >
                                            <Button 
                                                type="primary" 
                                                danger
                                                onClick={()=> alert('a')}>
                                                Захиалах
                                            </Button>
                                        </div>
                                    </div>
                                </div> 
                                <div>
                                    <Image 
                                        src={ugugdul.zurag}
                                        className='w-full h-[310px] rounded-md'
                                    />
                                </div>
                            </div>)
                            }) 
                            )
                    } 
                </Carousel>
                </div>
            </div>
        </main>
        <section className='container mx-auto  pt-12 pb-12 mt-12'>
            <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-4 mb-[40px]">
            {
            jagsaalt.map((x, i)=>{
                return (
                <widget type="ticket">
                    <div className="top ">
                        <Image 
                            className='h-[177px] w-full rounded-t-md bg-origin-content'
                            src={x.zurag}
                        />
                        <div className="deetz">
                            <div className="event ">
                                <span className='text-[#242424] text-sm font-semibold mb-1'>{x.ner}</span>
                            </div>
                            <div className='grid grid-cols-2 mt-2'>
                                <div className='flex items-center'>
                                    <DursZuragch icon = "material-symbols:date-range" className = "text-sm mr-2 text-slate-400"/>
                                    <div className='text-xs'>{x.ognoo}</div>
                                </div>
                                <div className='flex items-center justify-end'>
                                    <DursZuragch icon = "material-symbols:location-on" className = "text-sm mr-2 text-slate-400"/>
                                    <div className='text-xs'>{x.bairshil}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rip"></div>
                    <div className="bottom ">
                        <a className="buy bg-slate-100 text-slate-400 hover:bg-red-500 hover:text-white px-1 py-1 rounded-sm hover:cursor-pointer"
                            onClick={()=> routeKhiiye('a')}>
                            Тасалбар авах
                        </a>
                    </div>
                    </widget>)
            })}
            </div>
        </section>
    </div>
  )
}
