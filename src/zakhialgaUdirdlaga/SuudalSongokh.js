import React, {useRef} from 'react'
import Corporate from '../Taiz/Corporate'
import {
  TransformWrapper,
  TransformComponent,
  MiniMap
} from "react-zoom-pan-pinch";

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
            <section className='hidden h-[120px] relative w-full bg-white items-center lg:flex font-semibold text-xl lg:text-3xl p-5 overflow-hidden'>
                <div class="w-full lg:px-5 flex items-center justify-between">
                  <div class="hidden lg:flex space-x-4 items-center">
                    <div class="relative w-36 overflow-hidden">
                      <img src="https://steppearena.mn/wp-content/uploads/2023/02/web_event_page_banner-1.png"/>
                    </div>
              <section>
                <h1 class="text-white text-xl">Уран гулгалтын одод Монголд</h1>
                <p class="text-white text-lg font-normal">5 сар 7, 2023 15:00</p></section></div><div class="text-white underline leading-20"></div></div>
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
                <TransformWrapper
      initialScale={1}
      initialPositionX={500}
      initialPositionY={500}
      ref={transformComponentRef}
    >
      {(utils) => (
        <React.Fragment>
          <MiniMap 
            style={{ background:'#cccccc',
            width: '192px',
            height: '108px',
            overflow: 'hidden',
            position: 'absolute',
            bottom: '0px',
            right: '0px'}}
          />
          <Controls {...utils} />
          <TransformComponent>
            <div onClick={zoomToImage}>
                <Corporate />
            </div>
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
                </div>
                <div className='w-full h-full hidden lg:block lg:w-3/12 bg-white relative z-50 overflow-hidden border border-gray-300'>
                  asds
                </div>
            </section>
        </div>
  </div>)  
}