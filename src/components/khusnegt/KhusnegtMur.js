import React, { useState } from 'react'
import { isNullOrUndefined } from '../index'
import { Checkbox } from 'antd'
export default function KhusnegtMur(props) {
    const { muriinUgugdul = {}, muriinDugaar = 0, baganuud, 
    songoltKhiikh, songoltKhiiye, songosonSongoltuud, tulkhuur, 
    murRef, jagsaalt = [], songosonMuriinDugaar = -1, damjuulakhFuncuud
    } = props
    const [ankhniiMur, setankhniiMur] = useState(null)

    function zeregtsuulekh(bagana) {
        if (isNullOrUndefined(bagana.zeregtsuulekh))
            return "center"
        else if (!isNullOrUndefined(bagana.zeregtsuulekh) && bagana.zeregtsuulekh === 'zuun')
            return "left"
        else if (!isNullOrUndefined(bagana.zeregtsuulekh) && bagana.zeregtsuulekh === 'baruun')
            return "right"
        else if (!isNullOrUndefined(bagana.zeregtsuulekh) && bagana.zeregtsuulekh === 'tuv')
            return "center"
    }

    function uildelMuriin(e, muriinUgugdul, muriinDugaar, turul) {
        if (!isNullOrUndefined(props.muriinUildel) && !isNullOrUndefined(props.muriinUildel[turul])) {
            props.muriinUildel[turul](e, muriinUgugdul, muriinDugaar, turul)
        }
    }

    let barimtSongogdsonEsekh = false
    if (!isNullOrUndefined(songosonSongoltuud) && songosonSongoltuud.length != 0) {
        let songogdsonIndx = songosonSongoltuud.findIndex(a => a[tulkhuur] === muriinUgugdul[tulkhuur])
        if (songogdsonIndx != undefined && songogdsonIndx != -1)
            barimtSongogdsonEsekh = true
    }

    if(!isNullOrUndefined(ankhniiMur)) {
        if(!isNullOrUndefined(ankhniiMur.index))
            barimtSongogdsonEsekh = ankhniiMur.index == muriinDugaar ? true : false
        else barimtSongogdsonEsekh = false
    }

    function unguUgyu() {
        let butsaakhUtga = "" 
        if (barimtSongogdsonEsekh || songosonMuriinDugaar === muriinDugaar)
            butsaakhUtga += " songosonMurTsenkher"
        else if (props.rowStyle){
            console.log('props.rowStyle', props.rowStyle)
            return props.rowStyle(muriinUgugdul, muriinDugaar) + `${muriinDugaar % 2 ? ' songosonMurSaaral ': ' songosonMurTsagaan'}`
        }
        else if (muriinDugaar % 2)
            butsaakhUtga += " songosonMurSaaral"
        else butsaakhUtga += " songosonMurTsagaan"
        return butsaakhUtga
    }
        

    return (
        <tr
            ref={murRef}
            className={`khusnegtTr ${unguUgyu()}`}
            key={muriinDugaar}
            onClick={(e) => uildelMuriin(e, muriinUgugdul, muriinDugaar, 'onClick')}
            onDoubleClick={(e) => uildelMuriin(e, muriinUgugdul, muriinDugaar, 'onDoubleClick')}
        >
            {(!isNullOrUndefined(songoltKhiikh) && songoltKhiikh.turul === 'chagtanSongolt') &&
                <td key={"muriin0"}
                    className="khusnegtTd ">
                    <Checkbox
                        disabled={typeof songoltKhiikh.chagtanSongoltiinBodolt === 'function' && songoltKhiikh.chagtanSongoltiinBodolt(muriinDugaar, muriinUgugdul)}
                        checked={barimtSongogdsonEsekh}
                        onChange={(e) => songoltKhiiye('negeer', e.target.checked, muriinUgugdul)}
                    />
                </td>}
            {baganuud?.filter(a => (isNullOrUndefined(a.baganaNuukhEsekh) || a.baganaNuukhEsekh === false))?.map((bagana, baganaDugaar) =>
                <td 
                //${unguUgyu()}
                    className={`khusnegtTd`}
                    key={"muriinID" + baganaDugaar}
                    style={{ background: bagana.baganaUngu && bagana.baganaUngu, textAlign: zeregtsuulekh(bagana), position: bagana.khulduukhEsekh ? 'sticky' : 'relative', ...bagana.baganaZagvar }}
                >
                    {
                        !isNullOrUndefined(bagana.zaavalBuglukh) && bagana.zaavalBuglukh ? 
                            <div className={`absolute ${
                                !isNullOrUndefined(muriinUgugdul[bagana.talbariinNer]) && 
                                (typeof muriinUgugdul[bagana.talbariinNer] == 'string' && (muriinUgugdul[bagana.talbariinNer].trim() != '' || muriinUgugdul[bagana.talbariinNer] == '0.00')) ||
                                (typeof muriinUgugdul[bagana.talbariinNer] == 'number' && Number(muriinUgugdul[bagana.talbariinNer]) > -1) ? 'text-neutral-300' : 'text-red-500'}  text-lg -top-1 left-0`}>*</div> : null //!isNullOrUndefined(bagana.ashiglakhTalbariinKhoch) ? bagana.ashiglakhTalbariinKhoch : 
                    }
                    {!isNullOrUndefined(bagana.muriinRender) ?
                        bagana.muriinRender(muriinUgugdul[bagana.talbariinNer], muriinUgugdul, muriinDugaar, jagsaalt, damjuulakhFuncuud, {ankhniiMur, setankhniiMur}) :
                        muriinUgugdul[bagana.talbariinNer]
                    }
                </td>
            )} 
            {props.zuunTovchnuud &&
                <td
                    className="group-hover:flex hidden absolute h-[29px] bg-[#e0f0ff] items-center justify-center right-[5px] w-[97px]" >
                    {<props.zuunTovchnuud muriinDugaar={muriinDugaar} muriinUgugdul={muriinUgugdul} />}
                </td>}
        </tr>)
}
