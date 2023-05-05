import { DursZuragch, isNullOrUndefined } from "@/src/components"
import { useRouter } from 'next/router'
import React, { useState } from 'react'
export default function Tsesuud(props) {
    const router = useRouter() 
    const [tsesuud, setTsesuud]  = useState([
        {ner: 'Дашбоард', songosonEsekh: 1, khoch: 'dashboard'},
        {ner: 'Танхим оруулах', songosonEsekh: 0, khoch: 'eventHall'},
        {ner: 'Тоглолт оруулах', songosonEsekh: 0, khoch: 'toglolt'},
      ])
    let songosonStyle = "zuragOruulayContent cursor-pointer h-[50px] flex items-center pl-5 mb-1 relative rounded-full z-10 bg-slate-100  before:w-[30px] before:h-[30px] before:-mt-[30px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:bg-menu-corner before:absolute before:top-0 before:right-0 before:-mr-5 after:content-[''] after:w-[30px] after:h-[30px] after:mt-[50px] after:scale-[1.04] after:bg-[length:100%] after:bg-menu-corner after:absolute after:top-0 after:right-0 after:-mr-5"
    let songoogviStyle = "cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full"

    const routeSoliyo = (khoch) => {
        let object = tsesuud.find(a=> a.songosonEsekh === 1)
        if (!isNullOrUndefined(object))
            object.songosonEsekh = 0
        tsesuud.find(a=> a.khoch === khoch).songosonEsekh = 1
        setTsesuud([...tsesuud])
        router.push(`${khoch}`)
      }
    return (  <ul>
        {
          tsesuud.map((ugugdul, muriinDugaar)=>
          <li key={muriinDugaar}>
            <div
              onClick={()=> routeSoliyo(ugugdul.khoch)}
              className={`${ugugdul.songosonEsekh === 1 ? songosonStyle : songoogviStyle}`}
              >
                <div className="text-primary before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-5 before:w-12 before:h-full before:bg-slate-100">
                  <DursZuragch icon = "ic:outline-home" style = {{color:'#3857b8', fontSize: "25px"}}/>
                </div>
                <div className={`hidden xl:flex items-center w-full ml-3 font-medium text-white dark:text-slate-300`}>
                    <span className={`${ugugdul.songosonEsekh === 1 ? 'text-slate-700' : 'text-slate-500'} truncate`}>{ugugdul.ner}</span>
                    <div className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block transform rotate-180">
                      <DursZuragch icon = "material-symbols:keyboard-arrow-up-rounded" style = {{color:'#3857b8', fontSize: "25px"}}/>
                    </div>
                </div>
              </div>
          </li>)
        }
      </ul>)
}