import React, { useEffect } from 'react'
import FormTalbar from './FormTalbar'
import BulegSongokhTalbar from './BulegSongokhTalbar'
import { Steps } from 'antd'
import _ from 'lodash'
import { isNullOrUndefined, khoosonJagsaaltEsekh, medeeKharuulakh, uilchilgeeDuudagch, useBodyUndurOlyo } from '@/src/components'
import Batalgaajuulakh from './Batalgaajuulakh'
export const TogloltContext = React.createContext()

const alkhamaarTalbarButsaay = (activeAlkham) => {
    if(activeAlkham === 0) return <FormTalbar/>
    else if (activeAlkham === 1) return <BulegSongokhTalbar/>
    else return <Batalgaajuulakh />
}

const khoosonUtga = {
    ungu: '#000000',
    buleg: '',
    suudluud: [],
    une: ''
}

export default function TogloltOruulakh(props) {
    const selectorRef = React.useRef()
    const editorRef = React.useRef()
    const {id} = props
    console.log("props =============>", props)
    let undur = useBodyUndurOlyo(0)
    const [tomState, setTomState] = React.useState({
        yurunkhiiMedeelel: {
            ner: '',
            turul:"",
            tankhim:'',
            zokhionBaiguulagch:'',
            urgeljlekhKhugatsaa: 0,
            nasniiAngilal:0,
            delgerenguiMedeelel: '',
            zurgiinZam:'',
            uniinMedeelel: [],
            tsagiinMedeelel: [] 
        },
        alkham: 0,
        zurag: undefined,
        bulgiinJagsaalt: [],
        buleg: khoosonUtga,
        suudliinJagsaalt: [],
        tankhimiinJagsaalt: []
    })

    const [continueEsekh, setContinueEsekh] = React.useState(false)

    useEffect(()=> {
        if(!isNullOrUndefined(id)) {
            idBaiwalTogloltiinMedeelelAvya()
        }
        uilchilgeeDuudagch('tankhimiinJagsaaltAvya').then(khariu =>{
            if (!isNullOrUndefined(khariu))
                tomState.tankhimiinJagsaalt = khariu.data
            else tomState.tankhimiinJagsaalt = []
            setleye()
        })
    }, [props])

    function setleye() {
        return new Promise(resolve => {
            setTomState({...tomState})
            return resolve(true)
        })
    }

    const idBaiwalTogloltiinMedeelelAvya = () => {
        uilchilgeeDuudagch('togloltAvya', {id}).then(result => {
            if(result.success) {
                tomState.yurunkhiiMedeelel = result.data
                tomState.zurag = result.data.zurag
                tomState.bulgiinJagsaalt = result.data.uniinMedeelel
            }
        }).finally(() => {
            setleye()
        })
    }

    const alkhamSongokh = (utga) => {
        tomState.alkham = utga
        setleye().then(result => {
            if(result && utga === 1) svgShalgajSuudaldOnClickUusgey(selectorRef.current)
        })
    }

    const bulgiinMedeelelAvya = (utga, turul) => {
        tomState.buleg[turul] = utga
        console.log('tomState.buleg', tomState.buleg, utga, turul)
        setleye()
    }

    const bulegKhadgalya = () => {
        const clonedBuleg = _.clone(tomState.buleg)
        const jagsaalt = _.clone(tomState.suudliinJagsaalt)
        clonedBuleg['suudluud'] = jagsaalt
        jagsaalt.forEach(x => {
            document.getElementById(x).setAttribute('fill', clonedBuleg.ungu)
            document.getElementById(x).classList.remove('suudal')
        })
        tomState.bulgiinJagsaalt.push(clonedBuleg)
        tomState.buleg = khoosonUtga
        tomState.suudliinJagsaalt = []
        console.log('tomState.bulgiinJagsaalt', tomState.bulgiinJagsaalt)
        setleye().then(result => {
            setContinueEsekh(false)
        })
    }

    function svgShalgajSuudaldOnClickUusgey (elem, index) {
        return new Promise(resolve => {
            const jagsaalt = [...elem.childNodes]
            if(jagsaalt.length > 0) {
                jagsaalt.forEach((x, i) => {
                    svgShalgajSuudaldOnClickUusgey(x, i+1)
                })
            } else {
                if(elem?.id?.toLowerCase().includes("suudal")) {
                    elem.id = elem.parentNode.id + "_" + elem.id.toLowerCase().split("x5f")[1].split('_')[1]
                    const idAwaw = elem.id
                    let shalguur = false
                    tomState.bulgiinJagsaalt.forEach(x=>{
                        x.suudluud.forEach(z=>{
                            if(z === elem.id) {
                                shalguur = true
                                elem.setAttribute('fill', x.ungu)
                                elem.classList.remove('suudal')
                            }
                        })
                    })
                    if(!shalguur) {
                        elem.setAttribute('class', 'cursor-pointer')
                        elem.classList.add('suudal')
                    }
                }
            }
            return resolve(true)
        })
    }

    const yurunkhiiMedeelelAvya = (turul, utga) => {
        tomState.yurunkhiiMedeelel[turul] = utga
        setleye()
    }

    const suudalSongyo = (jagsaalt) => {
        tomState.suudliinJagsaalt = jagsaalt
        
        setleye().then(result => {
            setContinueEsekh(true)
        })
    }

    const songogdsonBulegtSuudalNemye = (index) => {
        const jagsaalt = _.clone(tomState.suudliinJagsaalt)
        jagsaalt.forEach(x => {
            document.getElementById(x).setAttribute('fill', tomState.bulgiinJagsaalt[index].ungu)
            document.getElementById(x).classList.remove('suudal')
        })
        tomState.bulgiinJagsaalt[index].suudal.concat(jagsaalt)
        tomState.suudliinJagsaalt = []
        setleye().then(result => {
            setContinueEsekh(true)
        })
    }

    const zuragOruulakh = () => {
        const a = document.createElement('input')
        a.type = 'file'
        a.setAttribute('onchange', function(e) {
            console.log(e)
        })
        a.click()
        // a.remove()
    }

    function batalgaajuulakh() { 
        if (tomState.yurunkhiiMedeelel.ner == ""){
            medeeKharuulakh('warning', "Тоглолтын нэр оруулна уу")
            return
        }
        if (tomState.yurunkhiiMedeelel.turul == ""){
            medeeKharuulakh('warning', "Тоглолтын төрөл сонгоно уу")
            return
        }

        if (tomState.yurunkhiiMedeelel.delgerenguiMedeelel == ""){
            medeeKharuulakh('warning', "Тоглолтын дэлгэрэнгүй мэдээлэл оруулна уу")
            return
        }

        if (isNullOrUndefined(tomState.bulgiinJagsaalt) || 
            khoosonJagsaaltEsekh(tomState.bulgiinJagsaalt)) 
        {
            medeeKharuulakh('warning', "Тоглолтын үнийн мэдээлэл оруулна уу")
            return
        }

        if (isNullOrUndefined(tomState.yurunkhiiMedeelel.tsagiinMedeelel) || 
            khoosonJagsaaltEsekh(tomState.yurunkhiiMedeelel.tsagiinMedeelel)) 
        {
            medeeKharuulakh('warning', "Тоглолтын цагийн мэдээлэл оруулна уу")
            return
        }

        if (tomState.yurunkhiiMedeelel.urgeljlekhKhugatsaa === 0){
            medeeKharuulakh('warning', "Үргэлжлэх хугацаа оруулна уу")
            return
        }
        tomState.yurunkhiiMedeelel['zurag'] = tomState.zurag
        tomState.yurunkhiiMedeelel.uniinMedeelel = tomState.bulgiinJagsaalt
        uilchilgeeDuudagch('togloltBurtgekh', tomState.yurunkhiiMedeelel).then(khariu => {
            if (!isNullOrUndefined(khariu)){
                medeeKharuulakh('success', 'Тоглолт амжилттай бүртгэгдлээ')
                if (props.talbarButsaakh)
                    props.talbarButsaakh()
            }
        })
    }


    const zuragKhurvuuljKhadgalya = (e) => {
        const fileUnshigch = new FileReader()
        fileUnshigch.addEventListener('load',()=>{
            tomState.zurag = fileUnshigch.result
            console.log(fileUnshigch.result)
            setleye()
        })
        fileUnshigch.readAsDataURL(e.target.files[0])
    }
    
    const zuragAvya = () => {
        const a = document.createElement('input')
        a.type = 'file'
        a.accept = 'image/*'
        a.addEventListener('change', zuragKhurvuuljKhadgalya)
        a.click()
    }
    

    return (
        <TogloltContext.Provider value={{ tomState, editorRef, continueEsekh, selectorRef, batalgaajuulakh, setleye, yurunkhiiMedeelelAvya, bulgiinMedeelelAvya, bulegKhadgalya, suudalSongyo, songogdsonBulegtSuudalNemye, zuragOruulakh, zuragAvya }}>
            <div className='h-full w-full p-2 relative' style={{height:undur-98, overflow:'scroll'}}>
                <Steps
                    type="navigation"
                    size="small" 
                    current={tomState.alkham}
                    onChange={alkhamSongokh}
                    className="site-navigation-steps"
                    items={[
                        {
                            title: 'Ерөнхий мэдээлэл',
                        },
                        {
                            title: 'Танхимын тохиргоо',
                        },
                        {
                            title: 'Баталгаажуулах',
                        },
                    ]}
                />
                {alkhamaarTalbarButsaay(tomState.alkham)}
            </div>
        </TogloltContext.Provider>
        
    )
}
