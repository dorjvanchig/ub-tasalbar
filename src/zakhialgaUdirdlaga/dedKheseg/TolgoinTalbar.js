import React from 'react'
import Image from 'next/image'
import { ZakhialgaCtx } from '../zakhialgaContext'
const TolgoinTalbar = (props) => {
    const { tomState, routeKhiiye, talbarSoliyo } = React.useContext(ZakhialgaCtx)

    return <div className='flex flex-col'>
            <section className='h-[100px] md:h-[120px] relative w-full bg-white items-center lg:flex font-semibold text-xl lg:text-3xl p-5 overflow-hidden' 
              style={{
                backgroundImage: `url('${tomState.togloltiinMedeelel?.zurag}')`,
                backgroundSize: 'cover',

              }}
            >
              {/* backdrop-blur-md */}
              <div className='absolute top-0 left-0 w-full h-full bg-[#000000aa] backdrop-blur-md'/>
              <div class="w-full h-full lg:px-5 flex items-center justify-start md:justify-between">
                  <div class="flex h-full space-x-4 items-center">
                    <div class="relative h-full w-36 overflow-hidden">
                      <div className='w-full h-full relative'>
                        <Image
                          src={tomState.togloltiinMedeelel?.zurag}
                          style={{
                            objectFit: 'contain'
                          }}
                          fill
                        />
                      </div>
                      {/* <img src={togloltiinMedeelel?.zurag}/> */}
                    </div>
                    <section>
                      <h1 class="text-white text-md md:text-xl">{tomState.togloltiinMedeelel?.ner}</h1>
                      <p class="hidden md:block text-white text-lg font-normal">5 сар 7, 2023 15:00</p>
                    </section>
                  </div>
                  <section className='flex-col text-sm w-[35%] items-center justify-center hidden md:flex'>
                    <div className='flex flex-row gap-2 w-full justify-start'>  
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Төрөл:</span>
                        <span className='text-white'>{tomState.togloltiinMedeelel?.turul}</span>
                      </div>
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Байршил:</span>
                        <span className='text-white'>{tomState.togloltiinMedeelel?.tankhim}</span>
                      </div>
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Зохион байгуулагч:</span>
                        <span className='text-white'>{tomState.togloltiinMedeelel?.zokhionBaiguulagch}</span>
                      </div>
                    </div>
                    <div className='flex flex-row gap-2 w-full justify-start'>  
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Өдөр:</span>
                        <span className='text-white'>2023-04-23</span>
                      </div>
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Цаг:</span>
                        <span className='text-white'>18:00 цаг</span>
                      </div>
                    </div>
                  </section>
              </div>
            </section>
            <section class="bg-white h-[60px] w-full hidden lg:flex items-stretch relative justify-center border-b border-gray-300">
              <button class="flex items-center select-none space-x-2 text-c1 px-6 border-r border-gray-300 absolute left-0 top-0 bottom-0 mr-10" onClick={routeKhiiye}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="21" width="21" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z">
                  </path>
                </svg>
                <span>Буцах</span>
              </button>
              <div class="flex items-center select-none cursor-pointer space-x-4">
                <button class={`uppercase cursor-pointer text-c1 ${tomState.songogdsonTalbar === 'suudalSongokh' ? 'font-bold text-sky-800' : 'text-gray-400'}`} onClick={e=> {talbarSoliyo('suudalSongokh')}}>Суудал сонгох</button>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-c1" height="21" width="21" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <button class={`uppercase text-c1 ${tomState.songogdsonSuudal.length < 1 && 'cursor-not-allowed'} ${tomState.songogdsonTalbar === 'batalgaajuulakh' ? 'font-bold text-sky-800' : 'text-gray-400'}`} disabled = {tomState.songogdsonSuudal.length < 1} onClick={e=> {talbarSoliyo('batalgaajuulakh')}}>
                  Баталгаажуулах
                </button>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-c1" height="21" width="21" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"
                  ></path>
                  </svg>
                  <button class="uppercase text-c1 cursor-not-allowed opacity-50">Төлбөр төлөх</button></div>
            </section>
    </div>
}

export default TolgoinTalbar