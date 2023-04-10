import React, { useContext, useState } from 'react'
import { DursZuragch } from '../components'
import { Menu } from 'antd' 
import Link from 'next/link';
import { UndsenCtx } from './UndsenZagvar';

export default function TolgoiTses() 
{
    const undsenCtx = useContext(UndsenCtx)
    const [current, setCurrent] = useState('nuur');
    const onClick = (e) => {
        console.log('click ', e);
    };
    const items = [ 
        {
            label: 'Бүжиг',
            key: 'bujig'
        }, 
        {
            label: 'Жүжиг',
            key: 'jujig'
        }, 
        {
            label: 'Дуулалт жүжиг',
            key: 'duulalt',
            icon: <DursZuragch icon = "ic:round-keyboard-arrow-down" />,
        }, 
        {
            label: 'Концерт',
            key: 'concert',
            icon: <DursZuragch icon = "ic:round-keyboard-arrow-down" />,
        }, 
        {
            label: 'Дуурь',
            key: 'duuri',
            icon: <DursZuragch icon = "ic:round-keyboard-arrow-down" />
        },  
    ];

  return ( <header className='bg-white shadow-md'>
  <div className='border-b border-b-[#f4f5f9] py-2 block'>
    <div className='container mx-auto'>
      <div className='grid grid-cols-2 w-full'>
        <div className='flex items-center'>
          <div className='flex items-center hover:cursor-pointer text-slate-500 hover:text-red-500'>
            <DursZuragch icon = "mdi:world-wide-web" className = "mr-1 text-sm"/>
            <div className='text-xs'>MN</div>
            <DursZuragch icon = "material-symbols:arrow-drop-down" className = "ml-1 text-base "/>
          </div>
          <div className='flex items-center'>
            <div className=' h-[15px] w-[1px] bg-[#cbd3d7] m-[0_10px_-2px_10px]'/>
            <div className='text-sm text-slate-500 hover:cursor-pointer hover:text-red-500'
              onClick={()=> undsenCtx.undsenKhuudasruuShiljikh()}>
              Нүүр
            </div>
          </div>
        </div>
        
        <div className='flex items-center justify-end'> 
          <div className='flex items-center'>
            <div>
              <DursZuragch icon = "ic:baseline-call" className = "mr-1 text-sm text-slate-500"/>
            </div>
            <div className='text-slate-500 text-xs'>1800-1900</div>
          </div>
          <div className=' h-[15px] w-[1px] bg-[#cbd3d7] m-[0_10px_-2px_10px]'/>
          <div><DursZuragch icon = "ri:facebook-fill" className = "text-base mr-1 text-slate-500 hover:text-red-500 hover:cursor-pointer"/></div>
          <div><DursZuragch icon = "mdi:twitter" className = "text-base mr-1 text-slate-500 hover:text-red-500 hover:cursor-pointer"/></div>
          <div><DursZuragch icon = "mingcute:youtube-line" className = "text-base mr-1 text-slate-500 hover:text-red-500 hover:cursor-pointer"/></div>
          <div className=' h-[15px] w-[1px] bg-[#cbd3d7] m-[0_10px_-2px_10px]'/>
            <Link href={`/nevtrekh/NevtrekhKhuudas`}>
                <div className='flex items-center hover:cursor-pointer text-slate-900 hover:text-red-500 hover:font-normal'>
                    <DursZuragch icon = "system-uicons:user-male" className = "  text-base"/>
                     <span className='text-xs'> Нэвтрэх</span>
                    <DursZuragch icon = "material-symbols:arrow-drop-down" className = "ml-1 text-base "/>
                </div>
            </Link> 
        </div>
      </div>
    </div>
  </div>
  <div className='h-[70px] leading-[65px] shadow-sm'>
    <div className='container mx-auto'> 
        <div className='grid grid-flow-col-dense'>
          <div className='flex items-center justify-center'>
            <img src='/zurag/logo.png' height={50} width = {180}/>
          </div>
            <div>
                <Menu 
                    onClick={onClick} 
                    selectedKeys={[current]} 
                    expandIcon = {true}
                    mode="horizontal" 
                    items={items}  
                    className = {"border-b-0 relative uppercase text-[#092b4d] font-medium text-sm p-[24px_7px] font-sans"}
                > 
                </Menu>
            </div>
            <div className='flex items-center justify-end'>
                <DursZuragch icon = "ic:outline-compare" className = "mr-3 text-lg text-slate-600"/>
                <DursZuragch icon = "ic:round-search" className = "mr-2 text-lg text-slate-600"/>
            </div>
        </div>
    </div>
  </div>
</header>)
}
