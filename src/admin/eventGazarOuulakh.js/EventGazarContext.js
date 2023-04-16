import React from 'react'
import UndsenTsonkh from './UndsenTsonkh'

export const EventCtx = React.createContext()

export default function EventGazarContext() {
    const [tomState, setTomState] = React.useState({})

    return (
        <EventCtx.Provider value={{tomState}}>
            <UndsenTsonkh/>
        </EventCtx.Provider>
    )
}
