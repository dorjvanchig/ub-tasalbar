import React from 'react'
import admin from '../../../styles/Admin.module.css'
import { DursZuragch } from '@/src/components'
export default function UndsenTsonkh() {
  return (
    <div className='w-full flex flex-col relative gap-2 h-full rounded-[3px] p-3'>
            <div className='w-full flex justify-end'>
                <button class="px-5 py-1 relative rounded group font-medium text-white inline-block">
                    <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <div className='flex flex-row items-center relative'>
                        Нэмэх
                    </div>
                </button>
            </div>
            <div className="overflow-auto lg:overflow-visible ">
                <table className={`${admin.table} table table-fixed w-full text-gray-900 border-separate space-y-6 text-sm`}>
                    <colgroup>
                        <col width={150}/>
                        <col width={250}/>
                        <col width={100}/>
                        <col width={100}/>
                        <col width={100}/>
                    </colgroup>
                    <thead className="bg-white text-gray-500">
                        <tr>
                            <th className="p-3">Нэр</th>
                            <th className="p-3 text-left">Тайлбар</th>
                            <th className="p-3 text-left">Хугацаа</th>
                            <th className="p-3 text-left">Статус</th>
                            <th className="p-3 text-left"></th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="overflow-auto lg:overflow-visible ">
                <table className={`${admin.table} table table-fixed w-full text-gray-900 border-separate space-y-6 text-sm`}>
                    <colgroup>
                        <col width={150}/>
                        <col width={250}/>
                        <col width={100}/>
                        <col width={100}/>
                        <col width={100}/>
                    </colgroup>
                    <tbody className={admin.tableBody}>
                        <tr className="bg-white hover:shadow-md">
                            <td className="p-3">
                                <div className="flex align-items-center">
                                    <img className="rounded-[3px] h-12 w-20  object-cover" src="https://ticket.mn/files/concerts/images/medium/910x460_jjTaBKT_cCc08vo.webp" alt="unsplash image"/>
                                    <div className="ml-3">
                                        <div className="font-bold">Сүнс</div>
                                        {/* <div className="text-gray-500">ubpalace@gmail.com</div> */}
                                    </div>
                                </div>
                            </td>
                            <td className="p-3">
                                Сүнс неоклассик баллет
                            </td>
                            <td className="p-3">
                                <span className="">1 цаг 40 минут </span>
                            </td>
                            <td className="p-3">
                                <span className="bg-green-400 text-gray-50 rounded-md px-2">available</span>
                            </td>
                            <td className="p-3 ">
                                <div className='flex flex-row gap-3'>
                                    <span className='text-sky-700'><DursZuragch icon='ic:outline-remove-red-eye' className='cursor-pointer'/></span>
                                    <span className='text-emerald-700'><DursZuragch icon='ri:edit-2-line' className='cursor-pointer'/></span>
                                    <span className='text-rose-700'><DursZuragch icon='mdi:trash-can-outline' className='cursor-pointer'/></span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  )
}