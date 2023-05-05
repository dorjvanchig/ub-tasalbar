import React from 'react' 
import { DursZuragch, Khusnegt, useBodyUndurOlyo } from '@/src/components'
import { EventCtx } from './EventGazarContext'

export default function UndsenTsonkh() {
    
    const { tankhimNemye, tankhimState } = React.useContext(EventCtx)
    let undur = useBodyUndurOlyo(0)
    return (
        <div className='w-full flex flex-col relative gap-2 h-full rounded-[3px] p-3'>
            <div className='w-full flex justify-end'>
                <button className="px-5 py-1 relative rounded group font-medium text-white inline-block" onClick={()=> tankhimNemye('shine')}>
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <div className='flex flex-row items-center relative'>
                        Нэмэх
                    </div>
                </button>
            </div>
            <Khusnegt
                muriinUildel={{
                    onClick: (e, muriinUgugdul, muriinDugaar) => console.log(muriinUgugdul),
                    onDoubleClick: (e, muriinUgugdul, muriinDugaar) => console.log(muriinUgugdul),
                }}
                undur={undur - 203}
                muriinUndur={28}
                tulkhuur={"UDK"}
                ugugdluud={tankhimState.tankhimJagsaalt}  
                baganuud={
                    [ 
                        {
                            tolgoinNer: "Танхим",
                            baganiinUrt: '15%',
                            talbariinNer: "tankhimiinNer",
                            zeregtsuulekh: 'zuun',
                            muriinRender: (text, muriinUgugdul) => {
                                return <div className="flex items-center justify-start">
                                    {muriinUgugdul.tankhimiinNer}
                                </div>;
                            },
                        }, 
                        {
                            tolgoinNer: "Байршил",
                            baganiinUrt: '20%',
                            talbariinNer: "tankhimiinNer",
                            zeregtsuulekh: 'zuun',
                            muriinRender: (text, muriinUgugdul) => {
                                return <div className="flex items-center justify-start">
                                    Сүхбаатар дүүрэг 1-р хороо
                                </div>;
                            },
                        }, 
                        {
                            tolgoinNer: "Файлын нэр",
                            baganiinUrt: '8%',
                            talbariinNer: "svgNer",
                            zeregtsuulekh: 'zuun',
                            muriinRender: (text, muriinUgugdul) => {
                                return <div className="flex items-center justify-start">
                                   {muriinUgugdul.svgNer}
                                </div>;
                            },
                        }, 
                        {
                            tolgoinNer: "Харах",
                            baganiinUrt: '3%',
                            talbariinNer: "tankhimiinNer",
                            zeregtsuulekh: 'zuun',
                            muriinRender: (text, muriinUgugdul) => {
                                return <div className="flex items-center justify-center" onClick={()=> tankhimNemye('kharakh', muriinUgugdul)}>
                                  <DursZuragch icon = "carbon:data-view-alt" className = "text-[#628bbd]"/>
                                </div>;
                            },
                        },  
                        {
                            tolgoinNer: "#",
                            baganiinUrt: '3%',
                            talbariinNer: "tankhimiinNer",
                            zeregtsuulekh: 'zuun',
                            muriinRender: (text, muriinUgugdul) => {
                                return <div className="flex items-center justify-center" >
                                  <DursZuragch icon = "material-symbols:delete-outline-rounded" className = "text-red-500"/>
                                </div>;
                            },
                        }, 
                    ]
                }
            /> 
        </div>
    )
}
