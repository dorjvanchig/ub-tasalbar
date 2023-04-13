import React, { useContext, useEffect, useState } from 'react'
import { DursZuragch, isNullOrUndefined } from '../components'
import { Menu, Badge } from 'antd' 
import Link from 'next/link';
import { UndsenCtx } from './UndsenZagvar';
import { tsesnuud } from '../components/NegdsenComponent';
import { khereglegchMedeelel } from '../components/KholboltUusgekh';

export default function TolgoiTses(props) 
{
    const [scrollProgress, setScrollProgress] = useState(0);

    const undsenCtx = useContext(UndsenCtx)
    const [current, setCurrent] = useState('nuur');

    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const progress = (currentScroll / totalHeight) * 100;
        setScrollProgress(progress);
    }

    useEffect(() => { 
      let nevtersenMedeelel = khereglegchMedeelel()
      if (!isNullOrUndefined(nevtersenMedeelel))
      {
        undsenCtx.undsenState.nevtersenKhereglegch = nevtersenMedeelel.khereglegch
        undsenCtx.undsenState.token = nevtersenMedeelel.token
        undsenCtx.khuudasSergeekh()
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const onClick = (e) => {
      console.log('onClick')
      undsenCtx.togloltiinJagsaalt()
    }; 

  return ( <header className={`bg-white shadow-[0px_0px_40px_0px_#0000000d] ${scrollProgress > 13 ? 'fixed top-0 left-0 right-0 z-40' : 'sticky'} `}>
    {scrollProgress <= 0 ? null : <div className="h-1 w-full bg-gray-300">
      <div className="h-full bg-[#ef3f48]" style={{ width: `${scrollProgress}%` }}></div>
    </div>}
  <div className='border-b border-b-[#f4f5f9] py-2 hidden md:block'>
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
                     <span className='text-xs'>{undsenCtx.undsenState.nevtersenKhereglegch.email}</span>
                    <DursZuragch icon = "material-symbols:arrow-drop-down" className = "ml-1 text-base "/>
                </div>
            </Link> 
        </div>
      </div>
    </div>
  </div>
  <div className='h-[70px] leading-[65px] shadow-[0px_0px_40px_0px_#0000000d] '>
    <div className='container mx-auto'> 
        <div className='grid grid-flow-col-dense items-center px-5 md:px-0'>
          <div className='hidden md:block'>
              <img src='/zurag/logo.png' height={50} width = {180}/>
          </div>
          <div className='md:hidden'>
            <DursZuragch icon = "ic:round-menu"/>
          </div>
          <div className='md:hidden'>Тасалбар</div>
            <div className='hidden md:block'>
                <Menu 
                    onClick={onClick} 
                    selectedKeys={[current]} 
                    expandIcon = {true}
                    mode="horizontal" 
                    items={tsesnuud()}  
                    className = {"border-b-0 relative uppercase text-[#092b4d] font-medium text-sm p-[24px_7px] font-sans"}
                > 
                </Menu>
            </div>
            <div className='flex items-center justify-end'>
                <div className='block md:hidden p-1'>
                  <Link href={`/nevtrekh/NevtrekhKhuudas`}>
                    <div className='bg-slate-100 h-[33px] w-[93%] hover:bg-slate-200 rounded-md p-1 ml-3 hover:cursor-pointer flex items-center'>
                         <span className='text-xs px-1 truncate text-slate-400'>{undsenCtx.undsenState.nevtersenKhereglegch.email}</span>
                        <DursZuragch icon = "system-uicons:user-male" className = "text-[1.2rem]"/>
                    </div>
                  </Link>
                </div>
                <Badge size='small' count={5} className='h-[33px] bg-slate-100 rounded-md p-1 hover:cursor-pointer hover:bg-slate-200'>
                  <DursZuragch icon = "eva:shopping-bag-fill" className = "text-[1.2rem] text-slate-700"/>
                </Badge>
                <div className='bg-slate-100 hover:bg-slate-200 h-[33px] rounded-md p-1 ml-3 hover:cursor-pointer'>
                  <DursZuragch icon = "ic:round-search" className = "text-[1.2rem] text-slate-700"/>
                </div>
            </div>
        </div>
    </div>
  </div>
</header>)
}
