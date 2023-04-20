import React from 'react'
export const TogloltCtx = React.createContext()
import UndsenTsonkh from './UndsenTsonkh'
export default function TogloltContext(props) {
  return (
    <TogloltCtx.Provider>
        <UndsenTsonkh {...props}/>
    </TogloltCtx.Provider>
  )
}
