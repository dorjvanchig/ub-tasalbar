import React, { useState } from 'react'
import { uilchilgeeDuudagch, SButton, SInput, medeeKharuulakh } from '../components'
export default function Burtguulekh(props) {
    const { burtgekhEsekh, setBurtgekhEsekh } = props
    const [state, setState] = useState({
        email:'',
        password: ''

    })
    function burtguulekh() {  
        uilchilgeeDuudagch('khereglegchBurtgekh', state).then((khariu)=>{
            console.log('khereglegchBurtgekh === >', khariu)
            medeeKharuulakh('warning', "Анхааруулга", khariu)
            setBurtgekhEsekh(false)
        })
    }

    function utgaSolikh(utga, turul) {
        console.log('utga', utga)
        state[turul] = utga
        setState({...state})
    }

  return (<div className='w-full flex justify-center h-full'>
            <div className='w-full container mx-auto'>
                <div className='mb-[1rem]'>
                    <SInput 
                        value = {state.email}
                        onChange = {(e)=> utgaSolikh(e.target.value,'email')}
                        placeholder='И-мэйл хаяг эсвэл гар утасны дугаар'
                    />
                </div>
                <div className='mb-[1rem]'>
                    <SInput 
                        value = {state.password}    
                        onChange = {(e)=> utgaSolikh(e.target.value,'password')}
                        placeholder='Нууц үг'
                    /> 
                </div>
                <div className=' grid grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <SButton size = "large" className = "!bg-slate-300" onClick = {()=> setBurtgekhEsekh(false)}>Буцах</SButton>     
                    <SButton size = "large" onClick = {()=> burtguulekh()}>Бүртгүүлэх</SButton>          
                </div>
            </div>
        </div>
  )
}
