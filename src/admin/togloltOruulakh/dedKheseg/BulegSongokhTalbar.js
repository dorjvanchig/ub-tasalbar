import React from 'react'
import Selecto from 'react-selecto'
import { Input } from 'antd'
import SeatMap from '@/src/delgerenguiTsonkh/dedKheseg/SeatMap'
import { TankhimContext } from './TogloltOruulakh'
import { DursZuragch } from '@/src/components'
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import ZoomControl from './ZoomControl'
export default function BulegSongokhTalbar(props) {
    const {tomState, selectorRef, bulgiinMedeelelAvya, bulegKhadgalya, suudalSongyo, continueEsekh, songogdsonBulegtSuudalNemye } = React.useContext(TankhimContext)
    
    return (
        <div className='flex flex-row gap-2 '>
            <Selecto
                container={selectorRef.current}
                dragContainer={selectorRef.current}
                selectableTargets={[".suudal", document.querySelector(".suudal")]}
                selectByClick={true}
                selectFromInside={true}
                continueSelect={continueEsekh}
                toggleContinueSelect={"shift"}
                // The rate at which the target overlaps the drag area to be selected. (default: 100)
                hitRate={0}
                onSelect={e => {
                    e.added.forEach(el => {
                        el.setAttribute('fill', '#2980db');
                    });
                    
                    e.removed.forEach(el => {
                        let shalguur = -1
                        console.log(el.id)
                        tomState.bulgiinJagsaalt.forEach(x=> {
                            console.log(x.suudal)
                            shalguur = x.suudal.findIndex(z => z === el.id)
                        })
                        if(shalguur < 0) el.setAttribute('fill', '#f3808e');
                    });
                    suudalSongyo([...e.selected.map(x=> {return x.id})])
                }}
            />
            <div ref={selectorRef} className='w-3/4 h-full justify-center items-center flex'>
            <TransformWrapper >
                {
                    <TransformComponent>
                        <ZoomControl/>
                        <SeatMap/>
                    </TransformComponent>
                }
            </TransformWrapper>
            </div>
            <div className='w-1/4'>
                <div className='w-full h-fit flex flex-col gap-2 p-2 border rounded-[4px]'>
                    <div className='flex flex-col'>
                        <label className='px-2 text-[0.8rem]'>Суудлын өнгө</label>
                        <input type="color" value={tomState.buleg.ungu} onChange={e => {bulgiinMedeelelAvya(e.target.value, 'ungu')}} className='w-full'/>    
                    </div>
                    <div className='flex flex-col'>
                        <label className='px-2 text-[0.8rem]'>Бүлгийн нэр</label>
                        <Input placeholder='Бүлгийн нэр' value={tomState.buleg.bulgiinNer} onChange={e => {bulgiinMedeelelAvya(e.target.value, 'bulgiinNer')}}/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='px-2 text-[0.8rem]'>Үнэ</label>
                        <Input placeholder='Бүлгийн нэр' value={tomState.buleg.une} onChange={e => {bulgiinMedeelelAvya(e.target.value, 'une')}}/>
                    </div>
                    <button className='px-3 py-1 rounded-[4px] bg-emerald-800 text-white' onClick={bulegKhadgalya}>Хадгалах</button>
                </div>
                {
                    tomState.bulgiinJagsaalt.map((x, i)=> {
                        return (
                            <div key={i} className='flex flex-row gap-4 w-full mt-2 justify-between items-center p-2 border rounded-[4px] shadow-md'>
                                <div className='min-w-[40px] w-[40px] h-[40px] rounded-full' style={{background: x.ungu}} />
                                <div className='flex flex-row gap-1 w-full'>
                                    <span>
                                        Бүлгийн нэр:
                                    </span>
                                    <span>
                                        {x.bulgiinNer}
                                    </span>
                                </div>
                                <div className='flex flex-row gap-1 '>
                                    <span>
                                        Үнэ:
                                    </span>
                                    <span>
                                        {x.une}
                                    </span>
                                </div>
                                <button onClick={() => {songogdsonBulegtSuudalNemye(i)}}>
                                    <DursZuragch icon='material-symbols:check-circle-rounded' style={{color: '#27ae60', fontSize:'2rem'}}/>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
                                // <div key={i} className='w-full h-fit flex flex-col gap-2 p-2 border rounded-[4px] mb-2'>
                                //     <div className='flex flex-col'>
                                //         <label className='px-2 text-[0.8rem]'>Суудлын өнгө</label>
                                //         <input type="color" value={x.ungu} disabled className='w-full'/>    
                                //     </div>
                                //     <div className='flex flex-col'>
                                //         <label className='px-2 text-[0.8rem]'>Бүлгийн нэр</label>
                                //         <Input placeholder='Бүлгийн нэр' value={x.bulgiinNer} disabled />
                                //     </div>
                                //     <div className='flex flex-col'>
                                //         <label className='px-2 text-[0.8rem]'>Үнэ</label>
                                //         <Input placeholder='Бүлгийн нэр' value={x.une} disabled />
                                //     </div>
                                //     <button className='px-3 py-1 rounded-[4px] bg-sky-800 text-white' >Сонгох</button>
                                // </div>