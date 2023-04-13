import React, { useContext, useEffect, useState } from 'react'
import { Carousel, Spin, Button } from 'antd';
import Image from 'next/image'
import Toglolt from '../../public/zurag/bieKhun.png'
import Toglolt1 from '../../public/zurag/playoff.png'
import Toglolt2 from '../../public/zurag/hevtee.png'
import Toglolt3 from '../../public/zurag/rahmaninoff.png'
import Toglolt4 from '../../public/zurag/winter.png'
import { DursZuragch, formatOgnoo, isNullOrUndefined, khoosonJagsaaltEsekh, khoosonObjectEsekh } from '../components';
import { useRouter } from 'next/router';
import { UndsenCtx } from '../udnsenZagvar/UndsenZagvar'; 
import _ from 'lodash'
export default function Nuur(props) {
    const [loading, setLoading] = useState(true)
    const [togloltJagsaalt, setTogloltJagsaalt] = useState([])
    const router = useRouter()
    
    console.log('props', props, router)
    const { pages, event } = router.query;
    const undsenCtx = useContext(UndsenCtx) 
    useEffect(()=>{
        undsenCtx.togloltiinJagsaalt().then(khariu=>{
            if (!isNullOrUndefined(khariu) && khariu.success)
                setTogloltJagsaalt([...khariu.data ])
            else{
                setTogloltJagsaalt([])
            }
        })
        setTimeout(() => { setLoading (false) }, 2000)
    }, []) 

    const routeKhiiye = () => {
        router.push('delgerenguiTsonkh/DelgerenguiContext')
    }

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
    <div>
        <main className='bg-[#f4f5f9] py-[30px] relative hidden md:block'>
                <div className='container mx-auto '>
                    <Carousel autoplay dotPosition = "right" effect='scrollx'>
                        {
                            loading ? (
                                <div className="text-center mt-16">
                                    <Spin size="large" />
                                </div>
                                ) : (
                                _.sortBy(togloltJagsaalt, "burtgesenOgnoo").slice(0, 5).map((ugugdul, muriinDugaar)=>{
                                    return  (<div className='w-full bg-white grid-cols-2 !grid' key={muriinDugaar}>
                                    <div className='pt-8 px-8 pb-1'>
                                        <div className='  transition-all duration-300 text-center break-words capitalize text-[1.5rem] md:text-base mb-[.5rem] font-semibold font-sans text-style !text-[#152035]'>
                                            {ugugdul.ner}
                                        </div>
                                        <div className='flex flex-col md:flex-row gap-1 items-center py-1 w-full justify-end'>
                                            <div className='flex items-center text-[#889097] px-1 w-[40%]'>
                                                <DursZuragch icon = "clarity:date-line" className = "h-[12px] w-[12px] mr-1"/>
                                                <span className='text-slate-500 text-xs truncate'>2023 оны 4-р сарын 22-нд</span>
                                            </div>
                                            <div className='flex items-center text-[#889097] px-1 w-[17%]'>
                                                <DursZuragch icon = "ic:baseline-access-time" className = "h-[12px] w-[12px] mr-1"/>
                                                <span className='text-slate-500 text-xs truncate'>{ugugdul.urgeljlekhKhugatsaa} минут</span>
                                            </div>
                                            <div className='flex items-center text-[#889097] px-1 w-[22%]'>
                                                <DursZuragch icon = "simple-icons:musicbrainz" className = "h-[12px] w-[12px] mr-1"/>
                                                <span className='text-slate-500 text-xs truncate'>{ugugdul.turul}</span>
                                            </div>
                                            <div className='flex items-center text-[#889097] px-1 w-[25%] '>
                                                <div className='mr-1 truncate'> Ангилал:</div>
                                                <span className='text-slate-500 text-xs truncate'>{ugugdul.nasniiAngilal} +</span>
                                            </div>
                                        </div>
                                        <div className='indent-8 font-normal text-slate-500 h-[155px] line-clamp-4 overflow-hidden'>
                                            {ugugdul.delgerenguiMedeelel}
                                        </div>
                                        <div className='border-t border-t-slate-200 border-dashed x-2 py-2 grid grid-cols-3'>
                                            <div className='grid border-r px-2 border-r-slate-200 border-dashed'>
                                                <span className='text-xs text-slate-400'>Хаана</span>
                                                <span className='text-base font-normal truncate'>{ugugdul.khaana}</span>
                                            </div>
                                            <div className='grid px-2'>
                                                <span className='text-xs text-slate-400'>Зохион байгуулагч</span>
                                                <span className='text-base font-normal truncate'>{ugugdul.zokhionBaiguulagch}</span>
                                            </div>
                                            <div 
                                                className='flex items-end justify-center border-l border-l-slate-200 border-dashed px-2' >
                                                <Button 
                                                    type="primary" 
                                                    danger
                                                    onClick={()=> routeKhiiye(ugugdul)}>
                                                    Захиалах
                                                </Button>
                                            </div>
                                        </div>
                                    </div> 
                                    <div>
                                        <Image 
                                            src={Toglolt1}
                                            alt='zurag'
                                            className='w-full h-[310px] rounded-md'
                                        />
                                    </div>
                                </div>)
                                }) 
                                )
                        } 
                    </Carousel>  
                </div>
        </main>
        <section className='container mx-auto pb-12 mt-8'>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-[40px] px-8 md:p-0">
            {
            togloltJagsaalt.map((x, i)=>{
                
                return (
                    loading ? (
                        <div className="text-center mt-16" key={i+1}>
                            <Spin size="large" />
                        </div>
                        ) :(
                        <section type="ticket" key = {i}>
                            <div className="top ">
                                <Image 
                                    alt = "zurag1"
                                    className='h-[177px] w-full rounded-t-md bg-origin-content'
                                    src={Toglolt}
                                />
                                <div className="deetz">
                                    <div className="event ">
                                        <span className='text-[#242424] text-sm font-semibold mb-1'>{x.ner}</span>
                                    </div>
                                    <div className='grid grid-cols-1 mt-2 md:grid-cols-2'>
                                        <div className='flex items-center'>
                                            <DursZuragch icon = "material-symbols:date-range" className = "text-base mr-2 text-slate-400"/>
                                            <div className='text-xs truncate'>{tsagiinMedeelel(x)}</div>
                                        </div>
                                        <div className='flex items-center justify-start md:justify-end'>
                                            <DursZuragch icon = "material-symbols:location-on" className = "text-base mr-2 text-slate-400"/>
                                            <div className='text-xs truncate'>{x.khaana}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rip"></div>
                            <div className="bottom ">
                                <a className="buy bg-[#2d99db] text-white font-normal hover:bg-red-500 hover:text-white px-1 py-1 rounded-sm hover:cursor-pointer"
                                    onClick={()=> routeKhiiye(x)}>
                                    Тасалбар авах
                                </a>
                            </div>
                        </section>))
            })}
            </div>
        </section>
    </div>
  )
}
