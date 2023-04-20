import React from 'react'
import UndsenTsonkh from './UndsenTsonkh'
import dynamic from 'next/dynamic'
export const EventCtx = React.createContext()

export default function EventGazarContext(props) {
    const [tomState, setTomState] = React.useState({})
    const { talbarSolbiyo } = props
    const TankhimOruulakh = dynamic(() => import('./dedKheseg/TankhimOruulakh'), {ssr: false})
    console.log(props)




    const tankhimNemye = () => {
        talbarSolbiyo({
            kharakhEsekh: true,
            component: TankhimOruulakh,
            componentProps: {'test': 'test'}
        })
    }

    return (
        <EventCtx.Provider value={{ tomState, tankhimNemye }}>
            <UndsenTsonkh {...props}/>
        </EventCtx.Provider>
    )
}
