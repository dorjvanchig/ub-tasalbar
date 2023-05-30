// import ReceptionKhyanalt from '../reception/ReceptionKhyanalt'
import React, { useState } from 'react';
import DedKheseg from './DedKheseg'
import { useRouter } from 'next/router';
import UndsenTalbar from './dedKheseg/UndsenTalbar';
import Tsesuud from './Tsesuud'
import { isNullOrUndefined, useBodyUndurOlyo } from '@/src/components';

export default function UndsenZagvarAdmin(props) {
    const [tsesniiNer, setTsesniiNer] = useState('')
    const router = useRouter()
    const [loader, setLoader] = React.useState(true)
    let undur = useBodyUndurOlyo(0)
    const ankhniiUtga = {
        kharakhEsekh: false,
        component:undefined,
        componentProps: {},
    }

    

    function loaderSetlegch (utga) {
      return new Promise(resolve => {
        setLoader(utga)
        return resolve(true)
      })
    }

    function test () {
      const snkhm = localStorage.getItem("SKHM");
      if (isNullOrUndefined(snkhm)) {
        router.push('/') 
        return
      }
      const {khereglegch} = JSON.parse(snkhm)
      if(isNullOrUndefined(snkhm)) {
        router.push('/')
        return
      } else {
        if(khereglegch.role != 'admin') {
          router.push('/')
          return
        }
      }
      loaderSetlegch(false)
    }

    React.useEffect(()=>{
      talbarButsaakh()
      queueMicrotask(() => {
        loaderSetlegch(true).then(result => {
          test()
        })
      })
    }, [props])


    const [talbarSolbigch, setTalbarSolbigch] = React.useState(ankhniiUtga);

    const talbarButsaakh = () => {
        setTalbarSolbigch(ankhniiUtga)
    }

    const talbarSolbiyo = (utga) => {
        setTalbarSolbigch(utga)
    }

  return (
    <> {
      loader && <div className='absolute w-full h-full top-0 left-0 bg-white z-50'/>
    }
      <main className='bg-[#1e40af]'>
        <div className='py-2'> 
          <div className='flex mt-[1.7rem] md:mt-0'>
            <nav className='pr-5 pb-16 overflow-x-hidden hidden md:block w-[85px] xl:w-[230px]'>
                <a className="flex items-center pt-4 pl-5 intro-x">
                  <span className="hidden ml-3 text-lg text-white xl:block">  Админ</span>
                </a>
                <div className='my-6 w-full h-px bg-white/[0.08] z-10 relative dark:bg-white/[0.07]'></div>
                <Tsesuud setTsesniiNer = {setTsesniiNer}/>
            </nav>
            <div className="rounded-[30px] min-w-0 flex-1 bg-slate-100 px-4 md:px-[15px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block mr-2">
             <DedKheseg tsesniiNer = {tsesniiNer} />
              <div className='block w-full p-3' style={{ height: undur - 84}}>
                {talbarSolbigch.kharakhEsekh ?
                <talbarSolbigch.component {...talbarSolbigch.componentProps} talbarButsaakh={talbarButsaakh} talbarSolbiyo={talbarSolbiyo}/> :
                <UndsenTalbar {...props} talbarSolbiyo={talbarSolbiyo} talbarButsaakh={talbarButsaakh}/>
                }
               </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}