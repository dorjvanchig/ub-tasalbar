import React from 'react'
import { DelgerenguiCtx } from '../DelgerenguiContext'
import { DursZuragch } from '@/src/components'
const KhajuuTal = () => {

    const { tomState, suudalKhasya } = React.useContext(DelgerenguiCtx)

  return (
    <div className='flex flex-col gap-2 p-2 border shadow-md sticky top-10 h-fit rounded-[3px] w-[350px] text-slate-700'>
        <div className='w-fit bg-white mt-[-20px] px-3 text-[md] font-bold text-slate-800'>
          <span>Захиалга</span>
        </div>
        <div className='flex flex-col mb-3'>
          {
              tomState.songogdsonSuudal.map((x, i)=> {
                  return <div key={i} className='border-b flex flex-row justify-between gap-3 w-fill px-2 hover:bg-sky-50 rounded-[4px] cursor-pointer py-2'>
                    <div className='text-slate-700 flex flex-row gap-2'>
                      <span>
                        Эгнээ:
                      </span>
                      <span className='font-bold'>
                        {x.split("_")[0].replace('egnee', '')}
                      </span>
                    </div>
                    <div className='text-slate-700 flex flex-row gap-2'>
                      <span>
                        Суудал:
                      </span>
                      <span className='font-bold'>
                        {x.split("_")[1]}
                      </span>
                    </div>
                    <div className='w-[50px] flex justify-end'>
                      <DursZuragch icon='mingcute:close-fill' className="text-rose-700 cursor-pointer" onClick={() => suudalKhasya(x,i)}/>
                    </div>  
                  </div>
              })
          }
        </div>
        <div className='flex flex-row justify-between items-center gap-2 border-t'>
          <span>
            Нийт:
          </span>
          <span className='font-bold'>
            360,000.00
          </span>
        </div>
        <div className='flex w-full justify-end'>
            <button href="#_" className="relative inline-flex items-center justify-start py-1 pl-4 pr-12 overflow-hidden font-semibold text-emerald-800 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group hover:shadow-md hover:shadow-emerald-300">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-emerald-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Захиалах</span>
          </button>
        </div>
    </div>
  )
}

export default KhajuuTal