import React from 'react'
import Selecto from 'react-selecto'
import { Input } from 'antd'
import SeatMap from '@/src/delgerenguiTsonkh/dedKheseg/SeatMap'
export default function BulegSongokhTalbar(props) {
    const {selectorRef} = props
    const [bulgiinMedeelel, setBulgiinMedeelel]  = React.useState([])
    const [buleg, setBuleg] = React.useState({
        ungu: '#000000',
        bulgiinNer: '',
        suudal: [],
        une: ''
    })
    const [suudliinJagsaalt, setSuudliinJagsaalt] = React.useState([])
    
    const bulgiinMedeelelAvya = (utga, turul) => {
        buleg[turul] = utga
        if(turul === 'ungu') {
            
        }
        setBuleg({...buleg})
    }

    const bulegKhadgalya = () => {
        bulgiinMedeelel.push(buleg)
        debugger
        suudliinJagsaalt.forEach(x => {
            document.getElementById(x).setAttribute('fill', buleg.ungu)
            document.getElementById(x).classList.remove('suudal')
        })
        setBuleg({
            ungu: '#000000',
            bulgiinNer: '',
            suudal: [],
            une: ''
        })
        setSuudliinJagsaalt([])
        setBulgiinMedeelel([...bulgiinMedeelel])
    }

    return (
        <div className='flex flex-row gap-2 '>
            <Selecto
                container={selectorRef.current}
                dragContainer={selectorRef.current}
                selectableTargets={[".suudal", document.querySelector(".suudal")]}
                selectByClick={true}
                selectFromInside={true}
                continueSelect={true}
                toggleContinueSelect={"shift"}
                // The rate at which the target overlaps the drag area to be selected. (default: 100)
                hitRate={0}
                onSelect={e => {
                    e.added.forEach(el => {
                        el.setAttribute('fill', '#2980db');
                    });
                    e.removed.forEach(el => {
                        el.setAttribute('fill', '#F3808E');
                    });
                    setSuudliinJagsaalt([...e.selected.map(x=> {return x.id})])
                }}
            />
            <div ref={selectorRef} className='w-3/4 h-full justify-center items-center flex'>
                {/* <Seat/> */}
                <SeatMap/>
            </div>
            <div className='w-1/4'>
                {
                    bulgiinMedeelel.map((x, i)=> {
                        return <div key={i} className='w-full h-fit flex flex-col gap-2 p-2 border rounded-[4px] mb-2'>
                                    <div className='flex flex-col'>
                                        <label className='px-2 text-[0.8rem]'>Суудлын өнгө</label>
                                        <input type="color" value={x.ungu} disabled className='w-full'/>    
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='px-2 text-[0.8rem]'>Бүлгийн нэр</label>
                                        <Input placeholder='Бүлгийн нэр' value={x.bulgiinNer} disabled />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='px-2 text-[0.8rem]'>Үнэ</label>
                                        <Input placeholder='Бүлгийн нэр' value={x.une} disabled />
                                    </div>
                                    <button className='px-3 py-1 rounded-[4px] bg-sky-800 text-white' >Сонгох</button>
                                </div>
                    })
                }
                <div className='w-full h-fit flex flex-col gap-2 p-2 border rounded-[4px]'>
                    <div className='flex flex-col'>
                        <label className='px-2 text-[0.8rem]'>Суудлын өнгө</label>
                        <input type="color" value={buleg.ungu} onChange={e => {bulgiinMedeelelAvya(e.target.value, 'ungu')}} className='w-full'/>    
                    </div>
                    <div className='flex flex-col'>
                        <label className='px-2 text-[0.8rem]'>Бүлгийн нэр</label>
                        <Input placeholder='Бүлгийн нэр' value={buleg.bulgiinNer} onChange={e => {bulgiinMedeelelAvya(e.target.value, 'bulgiinNer')}}/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='px-2 text-[0.8rem]'>Үнэ</label>
                        <Input placeholder='Бүлгийн нэр' value={buleg.une} onChange={e => {bulgiinMedeelelAvya(e.target.value, 'une')}}/>
                    </div>
                    <button className='px-3 py-1 rounded-[4px] bg-emerald-800 text-white' onClick={bulegKhadgalya}>Хадгалах</button>
                </div>
            </div>
        </div>
    )
}
