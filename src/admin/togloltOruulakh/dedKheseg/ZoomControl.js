import React from 'react'
import { useControls } from 'react-zoom-pan-pinch'
export default function ZoomControl() {
    const { instance, zoomIn, zoomOut, ...rest } = useControls();
    console.log(useControls())
    return (
        <div className="tools absolute tra flex flex-row z-10 translate-x-2 translate-y-2 gap-3" {...rest}>
            <button className='p-3 py-2 bg-[#e3e3e3] border rounded-[5px]' onClick={() => zoomIn()}>+</button>
            <button className='p-3 py-2 bg-[#e3e3e3] border rounded-[5px]' onClick={() => zoomOut()}>-</button>
        </div>
    )
}
