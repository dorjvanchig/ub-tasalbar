import React from 'react' 
import { DursZuragch, Khusnegt, useBodyUndurOlyo } from '@/src/components'
import { EventCtx } from './EventGazarContext'

export default function UndsenTsonkh() {
    
    const { tankhimNemye } = React.useContext(EventCtx)
    const [open, setOpen] = React.useState(false)
    let undur = useBodyUndurOlyo(0)
    return (
        <div className='w-full flex flex-col relative gap-2 h-full rounded-[3px] p-3'>
            <div className='w-full flex justify-end'>
                <button className="px-5 py-1 relative rounded group font-medium text-white font-medium inline-block" onClick={tankhimNemye}>
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
                ugugdluud={[{}]}  
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
                         
                    ]
                }
            /> 
        </div>
    )
}
