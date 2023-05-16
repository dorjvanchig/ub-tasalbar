import React, { useState } from 'react';
import UndsenTsonkh from './UndsenTsonkh';
import { message, Drawer } from 'antd';
import SuudalZakhialgiinTalbar from './dedKheseg/SuudalZakhialgiinTalbar';
import KhajuuTal from './dedKheseg/KhajuuTal';
import { useRouter } from 'next/router';
import { uilchilgeeDuudagch } from '../components';

export const DelgerenguiCtx = React.createContext()
const DelgerenguiContext = (props) => {
    const router = useRouter()
    const { toglolt } = router.query;
    console.log(router.query)
    const [songosonTasalbar, setSongosonTasalbar] = useState({})
    const [open, setOpen] = React.useState(false)
    const [tomState, setTomState] = React.useState({
        zahialagdsanSuudal: ['egnee1_15','egnee1_16','egnee1_17','egnee1_18','egnee1_19','egnee1_20'],
        songogdsonSuudal: [],
        songosonTsag: undefined,
    })

    const testRef = React.useRef()

    function setleye() {
        return new Promise(resolve => {
            setTomState({...tomState})
            return resolve(true)
        })
    } 

    const routeKhiiye = () => {
        router.push({
            pathname: `/zakhialgaKheseg/${songosonTasalbar['_id']}`,
          }) 
    }

    React.useEffect(()=>{
        togloltAvya()
    }, [])

    function togloltAvya () {
        uilchilgeeDuudagch('togloltAvya', {id: toglolt}).then(result => {
            if(result.success) {
                setSongosonTasalbar({...result.data})
            }
        })
    }

    React.useEffect(() => {
        message.config({
            duration: 2,
            maxCount: 3,
            rtl: false,
            prefixCls: 'my-message',
        });
        if(open) svgShalgajSuudaldOnClickUusgey(testRef.current)
    }, [open])

    function setleye() {
        return new Promise(resolve => {
            setTomState({...tomState})
            return resolve(true)
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
                    const shalguur = tomState.zahialagdsanSuudal.findIndex(x => x === idAwaw)
                    elem.setAttribute('className', 'cursor-pointer')
                    if(shalguur >= 0) {
                        elem.setAttribute('fill', "#e3e3e3")
                        elem.addEventListener('click', messageKharuulya)
                    } else {
                        elem.setAttribute('fill', "#F3808E")
                        elem.addEventListener('click', jagsaaltandSuudalNemye)
                    }
                }
            }
            return resolve(true)
        })
    }

    function messageKharuulya() {
        message.warning('Сонгосон суудал захиалах боломжгүй байна.')
    }

    function jagsaaltandSuudalNemye(e) {
        const shalguur = tomState.songogdsonSuudal.findIndex(x=> x === e.target.id)
        if(shalguur >= 0) {
            e.target.setAttribute('fill', '#F3808E')
            tomState.songogdsonSuudal.splice(shalguur, 1)
        } else {
            e.target.setAttribute('fill', '#2980b9')
            tomState.songogdsonSuudal.push(e.target.id)
        }
        setleye()
    }

    const suudalKhasya = (id, index) => {
        const elem = document.getElementById(id)
        elem.setAttribute('fill', '#F3808E')
        tomState.songogdsonSuudal.splice(index, 1)
        setleye()
    }
        
    const drawerKhaaya = () => {
        setOpen(false)
    }

    const tsagSongyo = (utga) => {
        console.log(utga)
        tomState.songosonTsag = utga
        setleye()
    }

    return (
        <DelgerenguiCtx.Provider value={{ testRef, tomState, setleye, setOpen, suudalKhasya, songosonTasalbar, setSongosonTasalbar, routeKhiiye, tsagSongyo }}>
            <UndsenTsonkh/>
            <Drawer
                title="Суудал захиалга"
                placement={'bottom'}
                height={800}
                onClose={drawerKhaaya}
                open={open}
                // extra={
                //   <Space>
                //     <Button onClick={onClose}>Cancel</Button>
                //     <Button type="primary" onClick={onClose}>
                //       OK
                //     </Button>
                //   </Space>
                // }
            >
                <div className='flex flex-row w-full'>
                    <div className='w-4/6'>
                        <SuudalZakhialgiinTalbar/>
                    </div>
                    <div className='w-2/6'>
                        <KhajuuTal/>
                    </div>
                </div>   
            </Drawer>
        </DelgerenguiCtx.Provider>
    );
}

export default DelgerenguiContext;

















