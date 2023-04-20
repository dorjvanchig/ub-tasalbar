import React from 'react'
import UndsenTsonkh from './UndsenTsonkh'
import dynamic from 'next/dynamic'
export const EventCtx = React.createContext()

export default function EventGazarContext(props) {
    const [tomState, setTomState] = React.useState({})
    const { talbarSolbiyo } = props
    const FormTalbar = dynamic(() => import('./dedKheseg/FormTalbar'), {ssr: false})
    console.log(props)




    const tankhimNemye = () => {
        talbarSolbiyo({
            kharakhEsekh: true,
            component: FormTalbar,
            componentProps: {'test': 'test'}
        })
    }

    return (
        <EventCtx.Provider value={{ tomState, tankhimNemye }}>
            <UndsenTsonkh {...props}/>
        </EventCtx.Provider>
    )
}
