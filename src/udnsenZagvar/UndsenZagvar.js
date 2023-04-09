import React, { useEffect, useState } from 'react'
import TolgoiTses from './TolgoiTses'
import UndsenZagvarKhul from './UndsenZagvarKhul'
import { Carousel, Spin } from 'antd';
import Image from 'next/image'
import Toglolt from '../../public/zurag/bieKhun.png'
import Toglolt1 from '../../public/zurag/playoff.png'
import Toglolt2 from '../../public/zurag/hevtee.png'
import Toglolt3 from '../../public/zurag/rahmaninoff.png'
import Toglolt4 from '../../public/zurag/winter.png'
import { DursZuragch } from '../components';
import { useRouter } from 'next/router';

export default function UndsenZagvar() 
{ 
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

    const routeKhiiye = (zam) => {
        router.push('event/' + zam)
    }

  return ( <div className='block bg-[#f4f5f9]'>
            <TolgoiTses />
            <main className='bg-[#f4f5f9] pt-[40px] relative'>
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
                                    return (<div className='!grid grid-cols-2'>
                                    <div className=' p-8'>
                                        <div className='text-center break-words capitalize text-[1.5rem] mb-[.5rem] font-semibold font-sans text-style !text-[#152035]'>
                                            {ugugdul.garchig}
                                        </div>
                                        <div className='flex items-center py-1 w-full justify-between'>
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
                                        <div className='indent-8 py-[18px] font-normal text-[#506172]'>
                                            {ugugdul.delgerengui}
                                        </div>
                                        <div className='border-t border-t-slate-200 border-dashed flex items-center justify-end'>
                                            <div className='border-slate-100 border w-[80px] mt-2 p-1 rounded-md flex items-center justify-center' onClick={()=> alert('a')}>
                                                захиалах
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
            <section className='container mx-auto bg-[#F0F3F8] pt-12 pb-12 mt-12'>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-[40px]">
                {
                [1,2,3,4,5,6,7,8,1,1,1,1,11,1,1,1,1,1,1,1].map((x, i)=>{
                  return (
                    <div key={i} className='min-w-0 min-h-0 max-w-none max-h-none overflow-hidden rounded-md border border-b-[#f0f0f0] bg-[#ffffff]' onClick={() => routeKhiiye(x)}>
                        <div className='object-cover overflow-hidden aspect-{ratio}'>
                        <img 
                            className='w-full h-full object-cover'
                            src="https://cdn.cody.mn/img/164861/1200x400xwebp/hevtee.jpg?h=58ada67a5c1714748aff416ffb8a80df42604c31" alt="cody"/>
                        </div>
                        <div className='bg-[#ffffff] p-4' >
                            <h4 className="text-[#242424] text-base font-semibold mb-2">Thursday Night's Comedy</h4>
                            <div className="gap-5 flex items-center mb-0">
                            <h5>
                                <span role="img" className="anticon sc-1df5tt4-0 hdMEYd">
                                <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true" focusable="false" className=""><path d="M12.667 2.668H3.333C2.597 2.668 2 3.265 2 4.001v9.334c0 .736.597 1.333 1.333 1.333h9.334c.736 0 1.333-.597 1.333-1.333V4c0-.736-.597-1.333-1.333-1.333ZM2 6.668h12M10.668 1.332v2.667M5.332 1.332v2.667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>2023 он 04 сар 06 өдөр</h5><h5 className="location"><span role="img" className="anticon sc-1df5tt4-0 hdMEYd"><svg viewBox="0 0 10 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true" focusable="false" className="">
                                    <path d="M5 0C2.24 0 0 2.016 0 4.5c0 4 5 9.5 5 9.5s5-5.5 5-9.5C10 2.016 7.76 0 5 0Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="currentColor" color="currentColor">
                                    </path>
                                </svg>
                                </span>
                                <span className="text">
                                The Corporate Convention Centre, B1 Club, Comedy Lab
                                </span>
                            </h5>
                            </div>
                        </div>
                    </div>
                  )
                })    }
              </div>
            </section>
        <UndsenZagvarKhul />
    </div>)
}
