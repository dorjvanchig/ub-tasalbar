import { Divider } from 'antd'
import React from 'react'
import { DursZuragch } from '@/src/components'
const EventKhajuuTalbar = () => {
  return (
    <div className='w-1/3 p-3 bg-white rounded-[4px] shadow-md px-4 flex flex-col'>
        <Divider orientation='left' plain><p className='font-bold text-md'>Тасалбар захиалах</p></Divider>
        <ul className='w-full flex flex-col gap-3'>
            <li className='border rounded-[5px] py-2 px-4'>
                <div className='flex flex-row items-center gap-2 justify-between'>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-row gap-2 items-center'><DursZuragch icon='emojione:calendar'/> <span>2023-04-10</span></div>
                        <Divider type='vertical'/>
                        <div className='flex flex-row gap-2 items-center'><DursZuragch icon='openmoji:timer'/> <span>18:00</span></div>
                    </div>
                    <button class="px-5 py-1 relative rounded group font-medium text-white font-medium inline-block">
                        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span class="relative">Суудал сонгох</span>
                    </button>
                </div>
            </li>
            <li className='border rounded-[3px] py-2 px-4'>
                <div className='flex flex-row items-center gap-2 justify-between'>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-row gap-2 items-center'><DursZuragch icon='emojione:calendar'/> <span>2023-04-11</span></div>
                        <Divider type='vertical'/>
                        <div className='flex flex-row gap-2 items-center'><DursZuragch icon='openmoji:timer'/> <span>18:00</span></div>
                    </div>
                    <button class="px-5 py-1 relative rounded group font-medium text-white font-medium inline-block">
                        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span class="relative">Тасалбар захиалах</span>
                    </button>
                </div>
            </li>
        </ul>
    </div>

  )
}

export default EventKhajuuTalbar