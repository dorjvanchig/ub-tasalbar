import React from 'react'
import Dashboard from '../../adminNuur/Dashboard'
import EventGazarContext from '../../eventGazarOuulakh.js/EventGazarContext'
import TogloltContext from '../../togloltOruulakh/TogloltContext';
export default function UndsenTalbar(props) {
  const { tsonkh } = props;
  const tsonkhButsaaya = () => {
    if(tsonkh === 'dashboard') {
      return <Dashboard {...props}/>
    } else if(tsonkh === 'eventHall') {
      return <EventGazarContext {...props}/>
    } else if(tsonkh === 'toglolt') {
      return <TogloltContext {...props}/>
    }
  }

  return (
    <div className='w-[calc(100%-300px)] h-full overflow-x-hidden overflow-y-auto'>{tsonkhButsaaya()}</div>
  )
}
