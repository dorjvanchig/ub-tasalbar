import React, { useEffect, useState } from 'react'
import UndsenTsonkh from './UndsenTsonkh'
import dynamic from 'next/dynamic'
import { uilchilgeeDuudagch } from '@/src/components'
export const EventCtx = React.createContext()

export default function EventGazarContext(props) {
    const [tankhimState, setTankhimState] = React.useState({
        tankhimJagsaalt: []
    })
    const { talbarSolbiyo } = props
    const TankhimOruulakh = dynamic(() => import('./dedKheseg/TankhimOruulakh'), {ssr: false})

    useEffect(()=>{
        tankhimiinJagsaaltAvya()
    }, [])

    const tankhimNemye = () => {
        talbarSolbiyo({
            kharakhEsekh: true,
            component: TankhimOruulakh,
            componentProps: {...props}
        })
    }

    function khuudasSergeekh() {
        setTankhimState({...tankhimState})
    }

    function tankhimiinJagsaaltAvya() {
        uilchilgeeDuudagch('tankhimiinJagsaaltAvya').then(khariu=>{
            console.log('tankhimiinJagsaaltAvya', khariu)
            tankhimState.tankhimJagsaalt = khariu.data
            khuudasSergeekh()
        })
    }

    return (
        <EventCtx.Provider value={{ tankhimState, khuudasSergeekh, setTankhimState, tankhimNemye }}>
            <UndsenTsonkh {...props}/>
        </EventCtx.Provider>
    )
}
