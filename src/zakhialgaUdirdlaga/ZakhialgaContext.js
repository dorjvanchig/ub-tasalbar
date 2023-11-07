import React from 'react'
import UndsenTsonkh from './dedKheseg/UndsenTsonkh'
import { isNullOrUndefined, uilchilgeeDuudagch } from '../components'
import { useRouter } from 'next/router'

export const ZakhialgaCtx = React.createContext()

export default function ZakhialgaContext(props) {
    const {id} = props
    const router = useRouter()
    const [tomState,setTomState] = React.useState({
        songogdsonTalbar: 'suudalSongokh',
        togloltiinMedeelel: undefined,
        songogdsonSuudal: [],
        zakhialgataiSuudal: [],
    })
    const [khajuugiinTalbar, setKhajuugiinTalbar] = React.useState(false)
    const selectorRef = React.useRef()

    React.useEffect(() => {
        if(router.isReady) {
            togloltAvya().then(result => {
                zakhialgataiSuudalAvya()
                if(!isNullOrUndefined(result)) {
                    svgShalgajSuudaldOnClickUusgey(selectorRef.current, undefined, result)
                }
            })
        }
    }, [router.isReady])

    function setleye() {
        return new Promise (resolve => {
            const butsaakhUtga = {...tomState}
            setTomState(butsaakhUtga)
            return resolve (butsaakhUtga)
        })
    }

    const routeKhiiye = () => {
        router.push({
            pathname: `/delgerengui/${id}`
        })
    }

    function togloltAvya () {
        return new Promise(resolve => {
            uilchilgeeDuudagch('togloltAvya', {id}).then(result => {
                if(result.success) {
                    tomState.togloltiinMedeelel = result.data
                    setleye()
                    return resolve (result.data)
                }
            })
        })
    }

    const zakhialgataiSuudalAvya = () => {
        const param = {
            togloltiinNer: tomState.togloltiinMedeelel['ner'],
            togloltiinTsag: tomState.togloltiinMedeelel['tsagiinMedeelel'][0]['khezee']
        }
        uilchilgeeDuudagch('/zakhialsanSuudluudAvya', param).then(result => {
            if(result?.success) {
                let jagsaalt = []
                result.data.forEach(x => {
                    let a = `egnee${x.egnee}_${x.suudal}`
                    jagsaalt.push(a)
                })
                tomState.zakhialgataiSuudal = jagsaalt
                setleye()
            }
        })
    }

    function svgShalgajSuudaldOnClickUusgey (elem, index, ugugdul) {
        return new Promise(resolve => {
            const jagsaalt = [...elem.childNodes]
            if(jagsaalt.length > 0) {
                jagsaalt.forEach((x, i) => {
                    svgShalgajSuudaldOnClickUusgey(x, i+1, ugugdul)
                })
            } else {
                if(elem?.id?.toLowerCase().includes("suudal")) {
                    elem.id = elem.parentNode.id + "_" + elem.id.toLowerCase().split("x5f")[1].split('_')[1]
                    ugugdul?.uniinMedeelel.forEach(x=>{
                        x.suudluud.forEach(z=>{
                            if(z === elem.id) {
                              const shalguur = tomState.zakhialgataiSuudal.findIndex(x => x === elem.id)
                              elem.classList.add('suudal')
                              elem.setAttribute('class', 'cursor-pointer')
                              if(shalguur >= 0) {
                                  elem.setAttribute('fill', "#e3e3e3")
                                  elem.addEventListener('click', messageKharuulya)
                              } else {
                                  elem.setAttribute('fill', x.ungu)
                                  elem.setAttribute('dataMedeelel', JSON.stringify(x))
                                  elem.addEventListener('click', suudalSongokh)
                              }
                            }
                        })
                    })
                }
            }
            return resolve(true)
        })
    }

    function suudalSongokh(e) {
        const id = e.target.id
        const shalguur = tomState.songogdsonSuudal.findIndex(x => x.id === id)
        if(shalguur < 0) {
            const bulgiinMedelel = JSON.parse(e.target.getAttribute('dataMedeelel'))
            e.target.setAttribute('fill', '#000')
            let a = {
                id: id,
                egnee: id.split('_')[0].replaceAll('egnee', ''),
                suudal: id.split('_')[1],
                buleg: bulgiinMedelel.buleg,
                une: bulgiinMedelel.une, 
            }
            tomState.songogdsonSuudal.push(a)
        } else {
            let ungu = undefined
            tomState.togloltiinMedeelel.uniinMedeelel.map(x=>{
                x.suudluud.forEach(z => {
                    if(z === id) {
                        ungu = x.ungu
                    }
                })
            })
            e.target.setAttribute('fill', ungu)
            tomState.songogdsonSuudal.splice(shalguur, 1)
        }
        setleye()
    }
    
    const suudalKhasya = (id) => {
        const shalguur = tomState.songogdsonSuudal.findIndex(x => x.id === id)
        if(shalguur < 0) return 
        tomState.songogdsonSuudal.splice(shalguur, 1)
        const elem = document.getElementById(id)
        let ungu = undefined
        tomState.togloltiinMedeelel.uniinMedeelel.map(x=>{
            const shalga = x.suudluud.findIndex(z => z === id) 
            if(shalga > -1) ungu = x.ungu
        })
        elem.setAttribute('fill', ungu)
        setleye()
    }

    const talbarSoliyo = (talbar) => {
        tomState.songogdsonTalbar = talbar
        setleye().then(() => {
            if(talbar === 'suudalSongokh') {
                svgShalgajSuudaldOnClickUusgey(selectorRef.current, undefined, tomState.togloltiinMedeelel)
            }
        })
    }

    const ugugdulBeldye = () => {
        const butsaakhUtga = {
            togloltiinNer: togloltiinMedeelel['ner'],
            togloltiinTsag: togloltiinMedeelel['tsagiinMedeelel'][0]['khezee'],
            khereglegchiinUtas: '85664268',
            niitDun: tomState.songogdsonSuudal.reduce((x, y) => x += y.une, 0),
            niitToo: tomState.songogdsonSuudal.length,
            zakhialsanOgnoo: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
            barimtiinZadargaa: barimtiinZadargaaBurduulye()
        }
        function barimtiinZadargaaBurduulye() {
            let jagsaalt = []
            // {
            //     suudal: '15',
            //     egnee: '1',
            //     une: 80000,
            // }
            tomState.songogdsonSuudal.forEach(x => {
                jagsaalt.push(x)
            })
            return jagsaalt 
        }
        return butsaakhUtga
    }

    const zakhialgaKhiiye = () => {
        uilchilgeeDuudagch('/biletZakhialya', ugugdulBeldye()).then(result=> {
            if(result.success) {
                router.push({
                    pathname: `/delgerengui/${togloltiinMedeelel['_id']}`,
                }) 
            }
        })
    }

    return (
        <ZakhialgaCtx.Provider value={{ tomState, selectorRef, khajuugiinTalbar, setKhajuugiinTalbar, setleye, routeKhiiye, suudalKhasya, talbarSoliyo, zakhialgaKhiiye }}>
            <UndsenTsonkh {...props}/>
        </ZakhialgaCtx.Provider>
    )
}
