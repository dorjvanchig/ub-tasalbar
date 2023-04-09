import React from 'react'
import SeatMap from './SeatMap'
import { DelgerenguiCtx } from '../DelgerenguiContext'

const SuudalZakhialgiinTalbar = (props) => {

    const {testRef} = React.useContext(DelgerenguiCtx)
    return <div ref={testRef} className='w-full flex justify-center'>
        <SeatMap/>
    </div>
}

export default SuudalZakhialgiinTalbar