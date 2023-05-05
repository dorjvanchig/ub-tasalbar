import React from 'react'
// ,
export default function KhusnegtBiye(props) {
    const { dundiinUrgun, kharuulakhUgugdul, tableUndur, offsetY, gariinUsegUndur, jagsaaltiinTugsgulRef } = props
    return (
        <div className="testClass"
            style={{ height: tableUndur + (gariinUsegUndur !== 0 ? gariinUsegUndur * 22 + 100 : 0), position: 'relative'}}>
            <table 
                style={{ transform: `translateY(${offsetY}px)`, 
                fontSize: "0.75rem", whiteSpace: 'pre-line', 
                width: '100%', tableLayout: 'fixed', verticalAlign: "top", }}
            >
                <colgroup>{dundiinUrgun}</colgroup>
                <tbody>{kharuulakhUgugdul}</tbody>
                <div ref={jagsaaltiinTugsgulRef} />
                {props.khusnegtiinKhul && <props.khusnegtiinKhul tfootEsekh={true} {...props} />}
            </table>
            {props.gariinUsgiinTalbar && <props.gariinUsgiinTalbar tfootEsekh={false} {...props} />}
        </div>
    )
}
