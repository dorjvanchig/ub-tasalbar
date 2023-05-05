import React, { useState, createRef, forwardRef, useImperativeHandle, useRef } from 'react'
import { FixedSizeList as List } from "react-window";
import { IBIDurs, isNullOrUndefined } from 'ibisc'
import clsx from 'clsx'
import KhusnegtiinTolgoi from './KhusnegtiinTolgoi';
import KhusnegtMur from './KhusnegtMur';

function BurtgelKhusnegt(props, ref) {
    const {
        ustgakh = false,
        zasakh = false,
        jagsaaltiinUndur,
        kharuulakhJagsaalt,
        khusnegtiinBaganuud,
        ugugdulUndur,
        udirdagchiinUrDun
    } = props

    const scrollRefs = useRef([]);
    const divScrollRef = useRef(null)
    const [scrollTop, setScrollTop] = useState(0);

    const [idevkhteiMurIndx, setidevkhteiMurIndx] = useState(null)


    function onScroll(event) {
        if (!divScrollRef.current) return
    //     setScrollTop(divScrollRef.current.scrollTop);
    //     if(!isNullOrUndefined(uilchilgeeDuudagch_jagsaaltScroll)) {
    //        if (event.scrollOffset + divScrollRef.current.offsetHeight === divScrollRef.current.scrollHeight)
    //           uilchilgeeDuudagch_jagsaaltScroll()
    //    }
     }

     function tovchniiUildel(tuluv, index) {
        setidevkhteiMurIndx(tuluv + '_' + index)
     }

     function zasakhUstgakhTovchniiZagvar(index) {
        return (
            <>
                {
                    zasakh ? 
                    <div onClick={() => tovchniiUildel('zasakh', index)}>
                        <IBIDurs icon="material-symbols:edit-square-outline" style={{ fontSize: '20px', color: '#ff9800' }} />
                    </div>
                    : null
                }
                {
                    ustgakh ? 
                    <div onClick={() => tovchniiUildel('ustgakh', index)}>
                        <IBIDurs icon="material-symbols:delete-outline-rounded" style={{ fontSize: '20px', color: '#c41919' }} />
                    </div>
                    : null
                }
            </>
        )
     }

    function baganaZagvar() {
        return (
            <div>dsdsd</div>
        )
    }

    const Mur = ({ index, style }) => (
        <div style={style}> 
            <div className={clsx('flex flex-row h-full w-full',
            `${!isNullOrUndefined(idevkhteiMurIndx) ? 
                    idevkhteiMurIndx.split('_')[0] == 'zasakh' && idevkhteiMurIndx.split('_')[1] == index ? 
                        'bg-red-500' : 'bg-gray-600' 
                : 'bg-white'}`
            )}>
                <div className='flex flex-row bg-red-500 w-full'>
                    Mur {index + 1}
                    {/* <KhusnegtMur 
                        murRef={scrollRefs.current[index]}
                        muriinUgugdul={kharuulakhJagsaalt[index]}
                        jagsaalt={kharuulakhJagsaalt}
                        muriinDugaar={index}
                        key={index}
                        // muriinUildel={muriinUildel}
                        // songoltKhiikh={songoltKhiikh}
                        baganuud={khusnegtiinBaganuud}
                        // zuunTovchnuud={zuunTovchnuud}
                        // tulkhuur={tulkhuur}
                        // songosonSongoltuud={songosonSongoltuud}
                        // songoltKhiiye={songoltKhiiye}
                    /> */}
                </div>
                {
                    !isNullOrUndefined(idevkhteiMurIndx) ?
                        idevkhteiMurIndx.split('_')[0] == 'zasakh' && idevkhteiMurIndx.split('_')[1] == index ? 
                            <div className='flex flex-row justify-center items-center'>
                                 <IBIDurs icon="material-symbols:check-box-outline-rounded" style={{ fontSize: '20px', color: '#4caf50' }} />
                                 <IBIDurs onClick={() => setidevkhteiMurIndx(null)} icon="material-symbols:close-rounded" style={{ fontSize: '20px', color: 'gray' }} />
                            </div>
                        : zasakhUstgakhTovchniiZagvar(index)
                    : zasakhUstgakhTovchniiZagvar(index)
                }
                
            </div>
        </div>
    );

  return (
    <div className='m-1 bg-white'>

        {/* <KhusnegtiinTolgoi
            baganuud={khusnegtiinBaganuud} /> */}
        {baganaZagvar()}
        <List
            height={jagsaaltiinUndur - 30}
            itemCount={kharuulakhJagsaalt.length}
            itemData={kharuulakhJagsaalt}
            itemSize={ugugdulUndur}
            onScroll={onScroll}
            outerRef={divScrollRef}
        >
            {Mur}
        </List>
    </div>

  )
}

export default React.memo(forwardRef(BurtgelKhusnegt));