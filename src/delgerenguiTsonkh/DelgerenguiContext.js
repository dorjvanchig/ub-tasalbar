import React from 'react';
import UndsenTsonkh from './UndsenTsonkh';
import { message } from 'antd';
export const DelgerenguiCtx = React.createContext()
import TolgoiTses from '../udnsenZagvar/TolgoiTses';
import UndsenZagvarKhul from '../udnsenZagvar/UndsenZagvarKhul';
const DelgerenguiContext = (props) => {

    const [tomState, setTomState] = React.useState({
        zahialagdsanSuudal: ['egnee1_15','egnee1_16','egnee1_17','egnee1_18','egnee1_19','egnee1_20'],
        songogdsonSuudal: []
    })
    const testRef = React.useRef()

    function setleye() {
        return new Promise(resolve => {
            setTomState({...tomState})
            return resolve(true)
        })
    }
    

    return (
        <DelgerenguiCtx.Provider value={{ testRef, tomState, setleye }}>
            <TolgoiTses/>
            <UndsenTsonkh/>
            <UndsenZagvarKhul/>
        </DelgerenguiCtx.Provider>
    );
}

export default DelgerenguiContext;

















// React.useEffect(() => {
//     message.config({
//         duration: 2,
//         maxCount: 3,
//         rtl: false,
//         prefixCls: 'my-message',
//       });
//     svgShalgajSuudaldOnClickUusgey(testRef.current)
// }, [])

// function setleye() {
//     return new Promise(resolve => {
//         setTomState({...tomState})
//         return resolve(true)
//     })
// }

// function svgShalgajSuudaldOnClickUusgey (elem, index) {
//     return new Promise(resolve => {
//         const jagsaalt = [...elem.childNodes]
//         if(jagsaalt.length > 0) {
//             jagsaalt.forEach((x, i) => {
//                 svgShalgajSuudaldOnClickUusgey(x, i+1)
//             })
//         } else {
//             if(elem.id.toLowerCase().includes("suudal")) {
//                 elem.id = elem.parentNode.id + "_" + elem.id.toLowerCase().split("x5f")[1].split('_')[1]
//                 const idAwaw = elem.id
//                 const shalguur = tomState.zahialagdsanSuudal.findIndex(x => x === idAwaw)
//                 elem.setAttribute('class', 'cursor-pointer')
//                 if(shalguur >= 0) {
//                     elem.setAttribute('fill', "#e3e3e3")
//                     elem.addEventListener('click', messageKharuulya)
//                 } else {
//                     elem.setAttribute('fill', "#F3808E")
//                     elem.addEventListener('click', jagsaaltandSuudalNemye)
//                 }
//             }
//         }
//         return resolve(true)
//     })
// }

// function messageKharuulya() {
//     message.warning('Сонгосон суудал захиалах боломжгүй байна.')
// }

// function jagsaaltandSuudalNemye(e) {
//     const shalguur = tomState.songogdsonSuudal.findIndex(x=> x === e.target.id)
//     if(shalguur >= 0) {
//         e.target.setAttribute('fill', '#F3808E')
//         tomState.songogdsonSuudal.splice(shalguur, 1)
//     } else {
//         e.target.setAttribute('fill', '#2980b9')
//         tomState.songogdsonSuudal.push(e.target.id)
//     }
//     setleye()
// }

// const suudalKhasya = (id, index) => {
//     const elem = document.getElementById(id)
//     elem.setAttribute('fill', '#F3808E')
//     tomState.songogdsonSuudal.splice(index, 1)
//     setleye()
// }