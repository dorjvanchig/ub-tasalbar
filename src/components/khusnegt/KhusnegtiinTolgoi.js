import React from 'react'
import { Checkbox } from 'antd'
import { isNullOrUndefined } from '../index'

export default function KhusnegtiinTolgoi(props) {
    const { baganuud, dundiinUrgun, songoltKhiikh, songoltKhiiye, olnoorSongosonEsekh,
        khusnegtTolgoinID = "khusnegtTolgoi",
        khusnegtiintolgoiZagvar = { background: '#f3f6f9', border: '1px solid #dfe4e8', textAlign: 'center', color: '#64748b' } } = props
    return (<div style={{ position: "sticky", top: 0, width: "100%", zIndex: 2 }}>
        <table id={khusnegtTolgoinID} border={1} style = {{tableLayout:'fixed', width:'100%'}}>
            <colgroup>
                {dundiinUrgun}
            </colgroup>
            <thead style = {{textTransform:'uppercase', boxShadow:'0 1px 2px 0 rgb(0 0 0 / 0.05)', fontSize:'11px'}}>
                <tr>
                    {
                        (!isNullOrUndefined(songoltKhiikh) && songoltKhiikh.turul === 'chagtanSongolt') &&
                        <th
                            key="bagan0"
                            style={Object.assign({ padding: "4px" }, khusnegtiintolgoiZagvar)}
                        >
                            <Checkbox
                                checked={olnoorSongosonEsekh}
                                onChange={(e) => songoltKhiiye('olnoor', e.target.checked, undefined)} />
                        </th>
                    }
                    {baganuud?.filter(a => (isNullOrUndefined(a.baganaNuukhEsekh) || a.baganaNuukhEsekh === false))?.map((col, colIndex1) =>
                        <th
                            key={"banaga1" + colIndex1}
                            style={Object.assign({ background: col.baganaUngu && col.baganaUngu, padding: "4px", position: col.khulduukhEsekh && "sticky", ...col.baganaZagvar}, khusnegtiintolgoiZagvar)}
                            rowSpan={col.negtgekhMuriinToo}
                            colSpan={col.negtgekhBaganiinToo}
                        >
                            {!isNullOrUndefined(col.baganaRender) ?
                                col.baganaRender(col.tolgoinNer, col, colIndex1) :
                                col.tolgoinNer
                            }
                        </th>
                    )}
                </tr>
                {baganuud?.filter(a => !isNullOrUndefined(a.zadargaanuud) && a.zadargaanuud.length > 0).length > 0 &&
                    <tr>
                        {baganuud && baganuud.filter(a => !isNullOrUndefined(a.zadargaanuud) && a.zadargaanuud.length > 0).map(bagana => {
                            return (<>
                                {bagana?.zadargaanuud.map((col, colIndex1) => {
                                    return (
                                        <th
                                            style={Object.assign({ background: col.baganaUngu && col.baganaUngu, padding: "4px" }, khusnegtiintolgoiZagvar)}
                                            key={"banaga2" + colIndex1}
                                            colSpan={col.negtgekhBaganiinToo}
                                            rowSpan={col.negtgekhMuriinToo}
                                        >
                                            {col.tolgoinNer}
                                        </th>)
                                })}
                            </>)
                        })}
                    </tr>}
            </thead>
        </table>
    </div>)
}
