import React from 'react'
import TolgoinTalbar from './TolgoinTalbar'
import SuudalTalbar from './SuudalTalbar'
import KhajuuTalbar from './KhajuuTalbar'
import BatalgaajuulakhTalbar from './BatalgaajuulakhTalbar'
import { ZakhialgaCtx } from '../ZakhialgaContext'
const UndsenTsonkh = (props) => {
    const { tomState } = React.useContext(ZakhialgaCtx)
    return <section className={`w-screen h-screen flex flex-col`}>
                <TolgoinTalbar {...props}/>
                <div className='flex flex-row w-full h-[calc(100%-180px)] relative'>
                    {
                        tomState.songogdsonTalbar === 'suudalSongokh' ? <>
                            <SuudalTalbar {...props}/>
                            <KhajuuTalbar {...props}/>
                        </> : <BatalgaajuulakhTalbar />
                    }
                    
                </div>
            </section>
}

export default UndsenTsonkh