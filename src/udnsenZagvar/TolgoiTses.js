import React, { useState } from 'react'
import { DursZuragch } from '../components'
import { Menu } from 'antd' 
import Link from 'next/link';

export default function TolgoiTses() 
{
    const [current, setCurrent] = useState('nuur');
    const onClick = (e) => {
        console.log('click ', e);
    };
    const items = [
        {
          label: 'Нүүр',
          key: 'nuur'
        }, 
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
          <DursZuragch icon = "mdi:world-wide-web" className = "mr-1 text-sm text-slate-500"/>
          <div className='text-xs text-slate-500'>MN</div>
          <DursZuragch icon = "material-symbols:arrow-drop-down" className = "ml-1 text-base text-slate-500"/>
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
          <div className='flex items-center hover:cursor-pointer'>
            <Link  
                href={`/nevtrekh/NevtrekhKhuudas`}>
                  <DursZuragch icon = "system-uicons:user-male" className = "text-slate-900  text-base"/>
                   <span className='text-xs text-slate-900'> Нэвтрэх</span>
                  <DursZuragch icon = "material-symbols:arrow-drop-down" className = "ml-1 text-base text-slate-900"/>
            </Link> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='h-[70px] leading-[65px] shadow-xl'>
    <div className='container mx-auto'> 
        <div className='grid grid-cols-2'>
            <div>
                <Menu 
                    onClick={onClick} 
                    selectedKeys={[current]} 
                    expandIcon = {true}
                    mode="horizontal" 
                    items={items}  
                    className = {"border-b-0 relative"}
                > 
                </Menu>
            </div>
            <div className='flex items-center justify-end'>
                <DursZuragch icon = "ic:round-search" />
            </div>
        </div>
    </div>
  </div>
</header>)
}
