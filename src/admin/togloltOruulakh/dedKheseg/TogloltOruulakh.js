import React, { useEffect } from 'react'
import FormTalbar from './FormTalbar'
import BulegSongokhTalbar from './BulegSongokhTalbar'
import { Steps } from 'antd'
import _ from 'lodash'
import { isNullOrUndefined, uilchilgeeDuudagch, useBodyUndurOlyo } from '@/src/components'
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
        bulgiinJagsaalt: [],
        buleg: khoosonUtga,
        suudliinJagsaalt: [],
        tankhimiinJagsaalt: []
    })

    const [continueEsekh, setContinueEsekh] = React.useState(false)

    useEffect(()=> {
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

    function zurgiinFileAvya(e) {
        console.log("e.file ==============>", e)
    }

    function batalgaajuulakh() {
        console.log('tomState.yurunkhiiMedeelel', tomState.yurunkhiiMedeelel, tomState.bulgiinJagsaalt)
        tomState.yurunkhiiMedeelel.uniinMedeelel = tomState.bulgiinJagsaalt
        uilchilgeeDuudagch('togloltBurtgekh', tomState.yurunkhiiMedeelel).then(khariu => {
            console.log('khariu', khariu)
        })
    }

    return (
        <TogloltContext.Provider value={{ tomState, editorRef, continueEsekh, selectorRef, batalgaajuulakh, setleye, yurunkhiiMedeelelAvya, bulgiinMedeelelAvya, bulegKhadgalya, suudalSongyo, songogdsonBulegtSuudalNemye, zuragOruulakh }}>
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
