import React from 'react'
import { DursZuragch } from '@/src/components'
import { useRouter } from 'next/router'
import { Divider } from 'antd'

export default function KhajuuTses(props) {
  const {tsonkh} = props
  const router = useRouter()
  const jagsaalt = [
    {ner: 'Дашбоард', khoch: 'adminNuur'},
    {ner: 'Танхим оруулах', khoch: 'eventHall'},
    {ner: 'Тоглолт оруулах', khoch: 'toglolt'},
  ]

  const routeSoliyo = (khoch) => {
    router.push(`${khoch}`)
  }

  return (
    <section className='w-[300px] h-full bg-white rounded-[3px] drop-shadow-none px-3'>
        <div className='w-full flex flex-col gap-1'>
          <Divider plain orientation='left'><span className='font-bold text-[1.1rem] text-gray-500'>Цэс</span></Divider>
          {
            jagsaalt.map((x,i )=> {
                return <div key={i} className={`w-full rounded-[3px] py-1 px-1 cursor-pointer shadow-none text-gray-600 ${x.khoch === tsonkh && 'font-bold'} flex flex-row gap-1 items-center justify-start hover:font-semibold transition-all`} onClick={() => {routeSoliyo(x.khoch)}}>
                          <DursZuragch icon={x.khoch === tsonkh ? 'ph:dot-duotone' : 'ph:dot'} className='text-[2rem]' />
                          {x.ner}
                        </div>
            })
          }
        </div>
    </section>
  )
}
