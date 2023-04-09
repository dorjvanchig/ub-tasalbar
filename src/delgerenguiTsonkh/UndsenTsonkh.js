import React from 'react';
import Image from 'next/image';
import EventTailbar from './dedKheseg/EventTailbar';
import EventKhajuuTalbar from './dedKheseg/EventKhajuuTalbar';
import Swiper from 'react-id-swiper'
const UndsenTsonkh = () => {

    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        wrapperClass: 'flex flex-row'
      }

    return (
        <section className='w-full h-fit'>
            <div className='w-full h-[350px] relative p-4 flex justify-center items-center' style={{backgroundImage: 'url("https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='absolute w-full h-full top-0 left-0 bg-[#000000aa] backdrop-blur-sm z-0' style={{}}></div>
                <div className='w-5/6 h-[300px] flex flex-row z-10 items-center gap-4'>
                    <div className='h-fit w-fit rounded-[4px] overflow-hidden shadow-md shadow-amber-200'>
                        <Image src={'https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp'} 
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='flex flex-col w-full text-sky-50'>
                        <h3>Сүнс ингэнээ</h3>
                    </div>
                </div>
            </div>
            {/* <div className='bg-slate-100 flex w-full justify-center'>
                <div className='container'>
                    <div className='w-full h-[80px] flex flex-row items-center'>
                        <div className='sm:w-full md:w-4/6 h-full  flex flex-row justify-between'>
                            <div className='w-[100px] min-w-[100px] flex flex-row justify-center items-center text-[2rem] cursor-pointer relative after:content-[""] after:w-full after:absolute after:h-full after:left-[88px] after:bg-gradient-to-r after:from-slate-100 after:to-slate-0'>
                                <h2>{'<'}</h2>
                            </div>
                            <div className='flex flex-row w-full overflow-x-scroll overflow-y-hidden justify-center'>
                                <div className='w-[75px] min-w-[75px] h-full flex flex-col justify-center items-center cursor-pointer hover:bg-sky-100 transition'>
                                    <span className='text-sm'>April</span>
                                    <h2 className='font-bold'>08</h2>
                                    <span className='text-sm'>Thu</span>
                                </div>
                                <div className='w-[75px] min-w-[75px] h-full flex flex-col justify-center items-center cursor-pointer hover:bg-sky-100 transition'>
                                    <span className='text-sm'>April</span>
                                    <h2 className='font-bold'>09</h2>
                                    <span className='text-sm'>Thu</span>
                                </div>
                            </div>
                            <div className='w-[100px] min-w-[100px] flex flex-row justify-center items-center text-[2rem] cursor-pointer relative after:content-[""] after:w-full after:absolute after:h-full after:left-[-88px] after:bg-gradient-to-l after:from-slate-100 after:to-slate-0'>
                                <h2>{'>'}</h2>
                            </div>
                        </div>
                        <div className='sm:hidden md:w-1/6 h-full'>

                        </div>
                        <div className='sm:hidden md:w-1/6 h-full'>

                        </div>
                    </div>
                </div>
            </div> */}
            <div className='flex justify-center py-3 bg-[#f4f5f9] pt-5'>
                <div className='container flex flex-col gap-3'>
                    <Swiper {...params}>
                        <div className='w-[300px] h-[150px] border'>Slide #1</div>
                        <div className='w-[300px] h-[150px] border'>Slide #2</div>
                        <div className='w-[300px] h-[150px] border'>Slide #3</div>
                        <div className='w-[300px] h-[150px] border'>Slide #4</div>
                        <div className='w-[300px] h-[150px] border'>Slide #5</div>
                    </Swiper>
                    <div className='w-full flex flex-row relative'>
                        <EventTailbar/>
                        <div className='mx-3 border-l' />
                        <EventKhajuuTalbar/>
                    </div>
                    {/* <div className='w-full h-[1000px]'></div> */}
                </div>
            </div>
        </section>
    );
}

export default UndsenTsonkh;
