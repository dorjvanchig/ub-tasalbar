import React from 'react'
import { TransformWrapper, MiniMap, TransformComponent } from 'react-zoom-pan-pinch'
import SeatMap from '@/src/delgerenguiTsonkh/dedKheseg/SeatMap'
import { ZakhialgaCtx } from '../zakhialgaContext'
export default function SuudalTalbar() {
    const  {selectorRef } = React.useContext(ZakhialgaCtx)
    return (
        <div className='flex relative w-full h-full flex-1 lg:w-9/12 items-center justify-center'>
            <div ref={selectorRef} className='w-full h-full flex [&_.react-transform-wrapper]:!w-full [&_.react-transform-wrapper]:!h-full [&_.react-transform-component]:!w-full [&_.react-transform-component]:!h-full [&_.react-transform-component]:!justify-center [&_.react-transform-component]:!items-center'>
                <TransformWrapper
                initialScale={1}
                >
                    {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
                        <div className='relative w-full h-full' >
                            <div className='absolute flex gap-3 z-[99999]'>
                                <button className='p-3 py-2 bg-[#e3e3e3] border rounded-[5px]' onClick={() => zoomIn()}>+</button>
                                <button className='p-3 py-2 bg-[#e3e3e3] border rounded-[5px]' onClick={() => zoomOut()}>-</button> 
                            </div>
                            <div className='hidden md:block absolute right-0 [&_.rzpp-wrapper]:!justify-center [&_.rzpp-wrapper]:!items-center [&_.rzpp-wrapper]:!flex'>
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
    )
}
