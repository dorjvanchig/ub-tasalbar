import React, { useEffect } from 'react'
import BulegSongokhTalbar from './BulegSongokhTalbar'
import _ from 'lodash'
import { isNullOrUndefined, medeeKharuulakh, uilchilgeeDuudagch } from '@/src/components'
import { Col, Button, Form, Input, Row, Select, Steps } from 'antd';
import GazriinZuragOruulakh from './GazriinZuragOruulakh'; 

export const TankhimContext = React.createContext()

export default function TankhimOruulakh(props) {
    console.log('TankhimOruulakh', props)
    const [tomState, setTomState] = React.useState({
        yurunkhiiMedeelel: {
            urgurug: 47.9187,
            urtrag: 106.9182,
            tankhimiinNer: '',
            svgNer: '', 
            // tankhimiinKhayag: '', 
        },  
    }) 
    let kharakhEsekh = isNullOrUndefined(props.songosonTankhim) ? false : true
    useEffect(()=>{
        if (!isNullOrUndefined(props.songosonTankhim)){
            tomState.yurunkhiiMedeelel = props.songosonTankhim
            setleye()
        }
    }, [props.songosonTankhim])

    function setleye() {
        return new Promise(resolve => {
            setTomState({...tomState})
            return resolve(true)
        })
    } 

    function tankhimKhadgalya() {
        if (tomState.yurunkhiiMedeelel.tankhimiinNer == "")
        {
            medeeKharuulakh('warning', 'Танхимын нэр оруулна уу!')
            return
        }
        if (tomState.yurunkhiiMedeelel.svgNer == "")
        {
            medeeKharuulakh('warning', 'Файлын нэр шалгана уу')
            return
        }

        uilchilgeeDuudagch('tankhimBurtgekh', tomState.yurunkhiiMedeelel).then(khariu=>{
            console.log('khariu', khariu)
            if (!isNullOrUndefined(khariu) && khariu.success == false)
                medeeKharuulakh('warning', 'Хадгалах явцад алдаа гарсан байна')
            else{
                tomState.tankhimiinNer = '',
                tomState.vsvgNer = '',
                tomState.tankhimiinKhayag = '', 
                setleye()
                if (props.talbarButsaakh)
                    props.talbarButsaakh()
                medeeKharuulakh('success', 'Танхимын бүртгэл амжилттай бүртгэгдлээ')
            }
        })
    }

    const yurunkhiiMedeelelAvya = (turul, utga) => {
        tomState.yurunkhiiMedeelel[turul] = utga
        setleye()
    }

    return (
        <TankhimContext.Provider value={{ tomState, setleye }}>
            <div className='h-full w-full bg-white rounded-[4px] shadow-md p-3 relative overflow-hidden'>
                    <div className='w-full'>
                    <div className='border-b flex justify-between items-center py-1 border-b-slate-300 shadow-lg'>
                        <Button 
                            onClick={()=> props.talbarButsaakh && props.talbarButsaakh()}
                        >
                             Буцах
                        </Button>
                    
                    </div>
                    <div className='w-[100%] flex flex-row p-2 rounded-lg'>
                        <div className='w-[80%]'>
                            <GazriinZuragOruulakh />
                        </div>
                        <div className='mb-2 w-[20%] shadow-md ml-1 px-3'>
                            <div className='mr-1 mb-2'>
                                <span className='text-slate-500 text-sm font-medium'>Танхимын нэр:</span>
                                <Input disabled = {kharakhEsekh} value={tomState.yurunkhiiMedeelel.tankhimiinNer} onChange={(e) => {yurunkhiiMedeelelAvya('tankhimiinNer', e.target.value)}} />
                            </div>
                            <div className='mr-1 mb-2'>
                                <span className='text-slate-500 text-sm font-medium'>SVG нэр оруулна уу:</span>
                                <Input disabled = {kharakhEsekh}  value={tomState.yurunkhiiMedeelel.svgNer} onChange={(e) => {yurunkhiiMedeelelAvya('svgNer', e.target.value)}} />
                            </div>
                            <div className='mr-1 mb-2'>
                                    <span className='text-slate-500 text-sm font-medium'>Хаяг:</span>
                                <Input.TextArea disabled = {kharakhEsekh} value={tomState.yurunkhiiMedeelel.tankhimiinKhayag} onChange={(e) => {yurunkhiiMedeelelAvya('tankhimiinKhayag', e.target.value)}} />
                            </div>
                            <div className='flex items-center justify-end mt-4'>
                               { !kharakhEsekh && 
                               <Button 
                                    disabled = {kharakhEsekh}
                                    onClick={()=> tankhimKhadgalya()}
                                    className='!bg-[#1677ff]'
                                    type="primary"
                                >
                                    Хадгалах
                                </Button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TankhimContext.Provider>
        
    )
}
