import React from 'react'
import FormTalbar from './FormTalbar'
import BulegSongokhTalbar from './BulegSongokhTalbar'
import { Steps } from 'antd'
import _ from 'lodash'
export const TankhimContext = React.createContext()

const alkhamaarTalbarButsaay = (activeAlkham) => {
    if(activeAlkham === 0) return <FormTalbar/>
    else if (activeAlkham === 1) return <BulegSongokhTalbar/>
    else return <div>Test</div>
}

const khoosonUtga = {
    ungu: '#000000',
    bulgiinNer: '',
    suudal: [],
    une: ''
}

export default function TogloltOruulakh() {
    const selectorRef = React.useRef()
    const editorRef = React.useRef()
    const [tomState, setTomState] = React.useState({
        yurunkhiiMedeelel: {
            ner: '',
            tsagiinMedeelel: [],
            zohionBaiguulagch: '',
            delgerengui: '',
            turul: ''
        },
        alkham: 0,
        bulgiinJagsaalt: [],
        buleg: khoosonUtga,
        suudliinJagsaalt: [],
    })

    const [continueEsekh, setContinueEsekh] = React.useState(false)

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
        setleye()
    }

    const bulegKhadgalya = () => {
        const clonedBuleg = _.clone(tomState.buleg)
        const jagsaalt = _.clone(tomState.suudliinJagsaalt)
        clonedBuleg['suudal'] = jagsaalt
        jagsaalt.forEach(x => {
            document.getElementById(x).setAttribute('fill', clonedBuleg.ungu)
            document.getElementById(x).classList.remove('suudal')
        })
        tomState.bulgiinJagsaalt.push(clonedBuleg)
        tomState.buleg = khoosonUtga
        tomState.suudliinJagsaalt = []
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
                if(elem.id.toLowerCase().includes("suudal")) {
                    elem.id = elem.parentNode.id + "_" + elem.id.toLowerCase().split("x5f")[1].split('_')[1]
                    const idAwaw = elem.id
                    let shalguur = false
                    tomState.bulgiinJagsaalt.forEach(x=>{
                        x.suudal.forEach(z=>{
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

    return (
        <TankhimContext.Provider value={{ tomState, editorRef, continueEsekh, selectorRef, setleye, yurunkhiiMedeelelAvya, bulgiinMedeelelAvya, bulegKhadgalya, suudalSongyo, songogdsonBulegtSuudalNemye, zuragOruulakh }}>
            <div className='h-full w-full bg-white rounded-[4px] shadow-md p-3 relative overflow-hidden'>
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
        </TankhimContext.Provider>
        
    )
}
