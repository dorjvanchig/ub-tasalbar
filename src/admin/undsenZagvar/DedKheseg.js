import { Input, Avatar } from 'antd';
import { DursZuragch } from '@/src/components';

export default function DedKheseg(props) 
{
    const { tsesniiNer } = props
    return (
        <div  className="h-[67px] z-[51] flex items-center relative border-b border-slate-200">
        <nav className="hidden mr-auto -intro-x sm:flex" aria-label="breadcrumb">
            <ol className="flex items-center text-primary dark:text-slate-300">
                <li className="text-base font-semibold">
                    <span>{tsesniiNer}</span>
                </li> 
            </ol>
        </nav>
        <div className="relative mr-3 intro-x sm:mr-6">
                <div className="relative hidden sm:block">
                    <div className='flex items-center'> 
                        <Input placeholder="Хайх үгээ бичнэ үү" size='small'/>
                            <div className="cursor-pointer flex ml-2 w-8 h-8 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x items-center justify-center">
                                <DursZuragch icon = "clarity:notification-outline-badged" className = "cursor-pointer text-[15px]"/>
                            </div>
                        <div className="relative">
                            <div className="cursor-pointer flex ml-2 w-8 h-8 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x items-center justify-center">
                                <DursZuragch icon = "dashicons:admin-users" className = "cursor-pointer text-[15px]"/>
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
      </div>
    )    
}