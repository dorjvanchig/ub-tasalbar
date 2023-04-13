import React, {useContext} from 'react'
import { Avatar, Button } from 'antd'
import { IBIDurs, nevtersenKhereglegchiinMedeelelAvya, bulgiinNerAvya } from '../../../index'
import clsx from 'clsx' 
export default function KhereglegchMedeelel(props) { 
    const { garakh, dialogNeey} = props
    let nevtersenKhereglegch = nevtersenKhereglegchiinMedeelelAvya()
    return (
        <div className="w-[290px]">
            <div className="flex items-center justify-between px-4 py-4 border-b border-b-[#e6e6e6] mb-2">
                <div className='flex flex-row items-center p-1 hover:bg-[#f5f5f5] hover:cursor-pointer hover:rounded-sm'>
                    <div className="bg-neutral-100 border-2 border-neutral-600 rounded-full h-8 w-8 flex justify-center items-center">
                                            <IBIDurs icon="line-md:account-small" style={{fontSize:'30px', color: '#707070'}} />
                                        </div>
                    <span className="flex flex-col ml-2">
                        <span className="truncate font-semibold tracking-wide leading-none">{nevtersenKhereglegch?.ajiltniiNer}</span>
                        <span className="truncate text-gray-500 text-xs leading-none mt-1">{bulgiinNerAvya()}</span>
                    </span>
                </div>
                <Button type="dashed" onClick={() => garakh()}>
                    <IBIDurs icon="ant-design:login-outlined" />
                </Button>
            </div>
            <div >
                <div onClick = {()=> dialogNeey()} className={clsx("flex items-center justify-items-start px-2 py-2 bg-[#1890ff14]",
                    "cursor-pointer hover:bg-slate-200 rounded-sm relative")}>
                    <div className="mx-3 flex items-center">
                        <IBIDurs icon="carbon:password" style={{ fontSize: 16, color: '#1890ff' }} />
                    </div>
                    <span className="text-base font-thin truncate text-[#1890ff]">Нууц үг солих</span>
                </div>
                <div onClick={() => garakh()} className={clsx("flex items-center justify-items-start px-2 py-2 ",
                    "cursor-pointer hover:bg-slate-200 rounded-sm relative")}>
                    <div className="mx-3 flex items-center">
                        <IBIDurs icon="ant-design:login-outlined" style={{ fontSize: 16 }} />
                    </div>
                    <span className="text-base font-thin truncate">Системээс гарах</span>
                </div>
            </div>
        </div>
    )
}
