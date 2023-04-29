import React, {useRef} from 'react'
import Corporate from '../Taiz/Corporate'
import {
  TransformWrapper,
  TransformComponent,
  MiniMap
} from "react-zoom-pan-pinch";
import SeatMap from '../delgerenguiTsonkh/dedKheseg/SeatMap';
import { DursZuragch } from '../components';

const Controls = ({ zoomIn, zoomOut, resetTransform }) => (
  <>
    <button onClick={() => zoomIn()}>+</button>
    <button onClick={() => zoomOut()}>-</button>
    <button onClick={() => resetTransform()}>x</button>
  </>
);

export default function SuudalSongokh(props) 
{
  const transformComponentRef = useRef()

  const zoomToImage = () => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("imgExample");
    }
  };
  
  return (<div className='h-screen flex flex-col items-stretch'>
        <div className='flex flex-col h-screen w-screen'>
            <section className='hidden h-[120px] relative w-full bg-white items-center lg:flex font-semibold text-xl lg:text-3xl p-5 overflow-hidden' 
              style={{
                backgroundImage: 'url(https://steppearena.mn/wp-content/uploads/2023/02/web_event_page_banner-1.png)',
                backgroundSize: 'cover',

              }}
            >
              {/* backdrop-blur-md */}
              <div className='absolute top-0 left-0 w-full h-full bg-[#000000aa] backdrop-blur-md'/>
              <div class="w-full lg:px-5 flex items-center justify-between">
                  <div class="hidden lg:flex space-x-4 items-center">
                    <div class="relative w-36 overflow-hidden">
                      <img src="https://steppearena.mn/wp-content/uploads/2023/02/web_event_page_banner-1.png"/>
                    </div>
                    <section>
                      <h1 class="text-white text-xl">Уран гулгалтын одод Монголд</h1>
                      <p class="text-white text-lg font-normal">5 сар 7, 2023 15:00</p>
                    </section>
                  </div>
                  <section className='flex flex-col text-sm w-[35%] items-center justify-center'>
                    <div className='flex flex-row gap-2 w-full justify-start'>  
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Төрөл:</span>
                        <span className='text-white'>Тоглолт</span>
                      </div>
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Байршил:</span>
                        <span className='text-white'>Гандан</span>
                      </div>
                      <div className='flex flex-row gap-2 w-1/3'>
                        <span className='text-white'>Зохион байгуулагч:</span>
                        <span className='text-white'>Гандан</span>
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
              <a class="flex items-center select-none space-x-2 text-c1 px-6 border-r border-gray-300 absolute left-0 top-0 bottom-0 mr-10" href="/events/63dc94cb8899f6194c2b0630">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="21" width="21" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg><span>Буцах</span></a><div class="flex items-center select-none cursor-pointer space-x-4"><button class="uppercase cursor-pointer text-c1 font-bold">Суудал сонгох</button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-c1" height="21" width="21" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <button class="uppercase text-c1  opacity-50 cursor-not-allowed">
                  Баталгаажуулах
                </button>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-c1" height="21" width="21" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"
                  ></path>
                  </svg>
                  <button class="uppercase cursor-default text-c1 cursor-not-allowed opacity-50">Төлбөр төлөх</button></div>
            </section>
            <section className='w-full relative flex flex-1 overflow-hidden bg-[#FAFAFA]'>
                <div className='flex relative w-full flex-1 lg:w-9/12 items-center justify-center'>
                  <div className='w-full h-full flex [&_.react-transform-wrapper]:!w-full [&_.react-transform-wrapper]:!h-full [&_.react-transform-component]:!w-full [&_.react-transform-component]:!h-full [&_.react-transform-component]:!justify-center [&_.react-transform-component]:!items-center'>
                      <TransformWrapper
                        initialScale={1}
                      >
                          {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
                              <div className='relative w-full h-full' >
                                  <div className='absolute flex gap-3 z-[99999]'>
                                      <button className='p-3 py-2 bg-[#e3e3e3] border rounded-[5px]' onClick={() => zoomIn()}>+</button>
                                      <button className='p-3 py-2 bg-[#e3e3e3] border rounded-[5px]' onClick={() => zoomOut()}>-</button> 
                                  </div>
                                  <div className='absolute right-0 [&_.rzpp-wrapper]:!justify-center [&_.rzpp-wrapper]:!items-center [&_.rzpp-wrapper]:!flex'>
                                      <MiniMap >
                                          <SeatMap/>
                                      </MiniMap>
                                  </div>
                                  <TransformComponent>
                                      <SeatMap/>
                                  </TransformComponent>
                              </div>
                          )}
                      </TransformWrapper>
                  </div>
                </div>
                <div className='w-full h-full lg:flex lg:w-3/12 bg-white relative z-50 overflow-hidden border border-gray-300 hidden flex-col items-baseline justify-between'>
                  <div className='flex flex-col justify-start h-full w-full px-2 py-3 overflow-auto bg-gray-100'>
                    <div className='h-[70px] flex flex-row w-full border rounded-[3px]'>
                      <div className='w-[80%] h-full bg-white border-r-2 border-dashed shadow-md rounded-l-md py-2 px-3 flex flex-col gap-2'>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <span>Бүлгийн нэр</span>
                            <span>Үнэ: 20,000₮</span>
                        </div>
                        <div className='flex flex-row gap-3'>
                          <div className='bg-sky-100 px-1 rounded-sm flex flex-row gap-2 w-fit text-[0.8rem] border border-sky-300 h-fit'>
                            <span>Эгнээ:</span>
                            <span>5</span>
                          </div>
                          <div className='bg-sky-100 px-1 rounded-sm flex flex-row gap-2 w-fit text-[0.8rem] border border-sky-300 h-fit'>
                            <span>суудал:</span>
                            <span>18</span>
                          </div>
                        </div>
                      </div>
                      <div className='w-[20%] h-full relative bg-white p-2 after:content-[""] after:absolute after:bg-gray-100 after:w-[10px] after:h-[10px] after:bottom-[-5px] after:left-[-5px] after:rounded-full before:content-[""] before:absolute before:bg-gray-100 before:w-[10px] before:h-[10px] before:top-[-5px] before:left-[-5px] before:rounded-full shadow-md rounded-r-md'>
                          <button className='w-full h-full bg-rose-600 flex flex-col justify-center items-center rounded-md'>
                            <DursZuragch icon='solar:trash-bin-minimalistic-2-bold' style={{color: 'white'}}/>
                            <span className='text-sm text-white'>Хасах</span>
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className='bg-[#2980b910] flex flex-col px-3 py-5 w-full min-h-[200px] rounded-t-md gap-3 border-t-2'>
                    <div className='flex flex-row border-b-2 py-2 px-2 gap-3 justify-between'>
                      <div className='flex flex-row gap-2'>
                        <div className='w-[20px] h-[20px] rounded-full' style={{
                          background: '#2980bb'
                        }}/>
                        <span className='w-auto'>
                          Бүлгийн нэр
                        </span>
                      </div>
                      <span className='w-auto'>
                        20,000.00₮
                      </span>
                    </div>
                    <div className='flex flex-row border-b-2 py-2 px-2 gap-3 justify-between'>
                      <div className='flex flex-row gap-2'>
                        <div className='w-[20px] h-[20px] rounded-full' style={{
                          background: '#ff9800'
                        }}/>
                        <span className='w-auto'>
                          Бүлгийн нэр
                        </span>
                      </div>
                      <span className='w-auto'>
                        20,000.00₮
                      </span>
                    </div>
                    <div className='flex flex-row border-b-2 py-2 px-2 gap-3 justify-between'>
                      <div className='flex flex-row gap-2'>
                        <div className='w-[20px] h-[20px] rounded-full' style={{
                          background: '#f7d794'
                        }}/>
                        <span className='w-auto'>
                          Бүлгийн нэр
                        </span>
                      </div>
                      <span className='w-auto'>
                        20,000.00₮
                      </span>
                    </div>
                  </div>
                </div>
            </section>
        </div>
  </div>)  
}