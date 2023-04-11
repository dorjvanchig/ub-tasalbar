import React from 'react';
import Image from 'next/image';
import EventTailbar from './dedKheseg/EventTailbar';
import EventKhajuuTalbar from './dedKheseg/EventKhajuuTalbar';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Divider } from 'antd';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { DursZuragch } from '../components';
const UndsenTsonkh = () => {

    React.useEffect(() => {
        // const test = new Splide( '.splide' ).mount( { AutoScroll } );
    }, [])
    return (
        <section className='w-full h-fit'>
            <div className='w-full h-[350px] relative p-4 flex justify-center items-center' style={{backgroundImage: 'url("https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='absolute w-full h-full top-0 left-0 bg-[#000000aa] backdrop-blur-sm z-0' style={{}}></div>
                <div className='w-5/6 h-[300px] flex md:flex-row flex-col z-10 items-center gap-4'>
                    <div className='h-fit w-fit rounded-[4px] overflow-hidden shadow-sm shadow-sky-50'>
                        <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='flex flex-col w-full text-sky-50 gap-5'>
                        <div className='w-full text-center md:text-start text-[1.6rem] font-bold'>
                            <h2>Сүнс неоклассик баллет</h2>
                        </div>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <div className='flex flex-row gap-2'>
                                <div className='flex flex-row gap-1'><DursZuragch icon='ic:baseline-location-on'/>байршил: </div>
                                <span>Гандан</span>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <div className='flex flex-row gap-1 whitespace-nowrap'><DursZuragch icon='ic:baseline-access-time'/>үргэлжлэх хугацаа: </div>
                                <span className='whitespace-nowrap'>2 цаг 30 минут</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-3 bg-[#f4f5f9] pt-5'>
                <div className='container flex flex-col gap-3'>
                    <Divider plain>Танд санал болгох</Divider>
                    <div className='hidden md:block'>
                        <Splide 
                            options={{
                                type   : 'loop',
                                drag   : 'free',
                                focus  : 'center',
                                rewind: true,
                                gap   : '1rem',
                                perPage : 5,
                                autoScroll: {
                                    speed: 1,
                                },
                            }}
                        >
                            <SplideSlide>
                                <div className='w-[300px] h-[100px] border overflow-hidden cursor-pointer'>
                                    <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='w-[300px] h-[100px] border overflow-hidden cursor-pointer'>
                                    <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='w-[300px] h-[100px] border overflow-hidden cursor-pointer'>
                                    <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='w-[300px] h-[100px] border overflow-hidden cursor-pointer'>
                                    <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='w-[300px] h-[100px] border overflow-hidden cursor-pointer'>
                                    <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='w-[300px] h-[100px] border overflow-hidden cursor-pointer'>
                                    <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='w-[300px] h-[100px] border overflow-hidden cursor-pointer'>
                                    <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='w-[300px] h-[100px] border overflow-hidden cursor-pointer'>
                                    <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='w-[300px] h-[100px] border overflow-hidden cursor-pointer'>
                                    <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='w-[300px] h-[100px] border overflow-hidden cursor-pointer'>
                                    <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='w-[300px] h-[100px] border overflow-hidden cursor-pointer'>
                                    <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='w-[300px] h-[100px] border overflow-hidden cursor-pointer'>
                                    <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </SplideSlide>
                        </Splide>
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
