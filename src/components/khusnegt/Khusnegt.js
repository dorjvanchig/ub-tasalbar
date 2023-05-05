import React, { useState, createRef, forwardRef, useImperativeHandle } from 'react'
import { isNullOrUndefined, clone } from '../index'
import KhusnegtBiye from './KhusnegtBiye';
import KhusnegtiinTolgoi from './KhusnegtiinTolgoi';
import KhusnegtMur from './KhusnegtMur';
import { Pagination } from 'antd';
import Selecto from "react-selecto";

function Khusnegt(props, ref) {
    const {
        baganuud,
        zuunTovchnuud,
        ugugdluud = [],
        componentUgugdulEsekh = false,
        muriinUndur = 31,
        undur = 200,
        muriinUildel = {},
        khuudaslalt,
        songoltKhiikh,
        khusnegtiinKhul,
        gariinUsgiinTalbar,
        tulkhuur = "khoch",
        khusnegtiintolgoiZagvar,
        gariinUsegUndur = 0,
        khusnegtTolgoinID,
        songosonUtgaAvya,
        songosonMuriinDugaar,
        rowStyle
    } = props
    const [songosonSongoltuud, setSongosonSongoltuud] = useState([])
    const [olnoorSongosonEsekh, setOlnoorSongosonEsekh] = useState(false)
    const [scrollTop, setScrollTop] = React.useState(0);
    const [songogdsonTile, setSongogdsonTile] = React.useState([]);
    const khRef = React.useRef(null)
    const jagsaaltiinTugsgulRef = React.useRef(null)
    const scrollRefs = React.useRef([]);
    const [scrollOptions, setScrollOptions] = React.useState({});
    const tableUndur = muriinUndur * ugugdluud?.length;
    const startIndex = Math.floor(scrollTop / muriinUndur);
    const endIndex = Math.min(ugugdluud?.length - 1, Math.floor((scrollTop + undur) / muriinUndur));
    const kharuulakhUgugdul = [];
    const offsetY = startIndex * muriinUndur;

    const [idevkhteiUgugdul, setidevkhteiUgugdul] = useState(null)

    useImperativeHandle(ref,()=>({
        scrollRefShiljikh,
        scrollDoodKhesegtShiljikh
      }),[scrollRefs, jagsaaltiinTugsgulRef])

    function songoltKhiiye(turul, songosonEsekh, muriinUgugdul) {
        if (turul === 'olnoor') {
            setOlnoorSongosonEsekh(songosonEsekh)
            if (songosonEsekh){
                ugugdluud.forEach((muriinUgugdul, muriinDugaar)=>{
                    if (typeof songoltKhiikh.chagtanSongoltiinBodolt === 'function' && 
                        !songoltKhiikh.chagtanSongoltiinBodolt(muriinDugaar, muriinUgugdul))
                    songosonSongoltuud.push(muriinUgugdul)
                })
                setSongosonSongoltuud([...songosonSongoltuud])
            }
            else
                setSongosonSongoltuud([])
        }
        else {
            let index = songosonSongoltuud.findIndex(a => a[tulkhuur] === muriinUgugdul[tulkhuur])
            if (index != undefined && index != -1)
                songosonSongoltuud.splice(index, 1)
            else
                songosonSongoltuud.push(clone(muriinUgugdul))

            if (songosonSongoltuud.length <= khuudaslalt?.khuudasniiKhemjee)
                setOlnoorSongosonEsekh(false)
            setSongosonSongoltuud([...songosonSongoltuud])
        }
    }

    React.useEffect(() => {
        if (!isNullOrUndefined(songosonUtgaAvya) && 
            typeof songosonUtgaAvya === "function" )
        {
            const selection = document.getElementsByClassName('selecto-selection')[0];
            console.log("selection =======>", selection )
            selection.style.top = scrollTop + 'px'
        }
    }, [scrollTop])

    React.useEffect(() => {
        if (!isNullOrUndefined(songoltKhiikh) &&
            typeof songoltKhiikh.songoltKhiisenUtguudAvya === 'function') {
            songoltKhiikh.songoltKhiisenUtguudAvya(clone(songosonSongoltuud))
        }
    }, [setSongosonSongoltuud, songosonSongoltuud])

    React.useEffect(() => {
        if(isNullOrUndefined(ugugdluud)) return

        /*************** ugugdluud.length index -р scroll хөдөлгөх үед ашиглана ***************/
        scrollRefs.current = [...Array(ugugdluud.length).keys()].map(
            (_, i) => scrollRefs.current[i] ?? createRef()
          );

      }, [ugugdluud]);
    

    React.useEffect(() => {
        console.log("khRef.current", khRef.current)
        setScrollOptions({
            container: khRef.current,
            throttleTime: 30,
            threshold: 0,
        });
    }, []);

    for (let i = startIndex; i <= endIndex; i++) {
        kharuulakhUgugdul.push(ugugdluud.length > 0 && componentUgugdulEsekh ?
            <tr valign='center' height='26px' key={"mur" + i}>
                {ugugdluud[i]}
            </tr>
            :
            <KhusnegtMur 
                rowStyle = {rowStyle}
                songosonMuriinDugaar = {songosonMuriinDugaar}
                murRef={scrollRefs.current[i]}
                muriinUgugdul={ugugdluud[i]}
                jagsaalt={ugugdluud}
                damjuulakhFuncuud={{idevkhteiUgugdul, setidevkhteiUgugdul}}
                muriinDugaar={i}
                key={i}
                muriinUildel={muriinUildel}
                songoltKhiikh={songoltKhiikh}
                baganuud={baganuud}
                zuunTovchnuud={zuunTovchnuud}
                tulkhuur={tulkhuur}
                songosonSongoltuud={songosonSongoltuud}
                songoltKhiiye={songoltKhiiye}
            />);
    }

    let dundiinUrgun = []
    if(!isNullOrUndefined(baganuud)) {
        baganuud?.filter(a => (isNullOrUndefined(a.baganaNuukhEsekh) || a.baganaNuukhEsekh === false))?.map((col, colIndex) => {

            if (col.zadargaanuud && col.zadargaanuud.length > 0) {
                col.zadargaanuud.forEach((element, i) => {
                    dundiinUrgun.push(<col key={i} width={`${element.baganiinUrt}`} />)
                });
            } else {
                dundiinUrgun.push(<col key={colIndex} width={`${col.baganiinUrt}`} />)
            }
        })
    }
   
    if ((!isNullOrUndefined(songoltKhiikh) && songoltKhiikh.turul === 'chagtanSongolt')) {
        dundiinUrgun.splice(0, 0, <col key={999} width={'9px'}></col>);
    }

    function onscroll(e) {
        if (props.scrolloorUilchilgeeDuudya)
            props.scrolloorUilchilgeeDuudya(e)
        setScrollTop(e.target.scrollTop)
    }

    function songokhUtguudId(e) {
        console.log("songokhUtguudId", e);
        let b = [];
        e.selected.map((x) => {
            b.push(x.id);
        });
        setSongogdsonTile(b);
    }

    function songosonUtguudButsaaya() {
        return new Promise((resolve) => {
            let butsaakhUtga = [];
            songogdsonTile.map((x) => {
                butsaakhUtga.push(ugugdluud[Number(x)]);
            });
            if (typeof songosonUtgaAvya === "function")
                songosonUtgaAvya(butsaakhUtga, songogdsonTile);
            return resolve(true);
        });
    }

    function scrollRefShiljikh(index) {
        if(index < 5) return
        let shiljuulekhIndex = index - 3
        if(!isNullOrUndefined(scrollRefs) && !isNullOrUndefined(scrollRefs.current) && 
            !isNullOrUndefined(scrollRefs.current[shiljuulekhIndex]) && !isNullOrUndefined(scrollRefs.current[shiljuulekhIndex].current)) {
                scrollRefs.current[shiljuulekhIndex].current.scrollIntoView({ behavior: "smooth" });
        }
    }

    function scrollDoodKhesegtShiljikh() {
        if(!isNullOrUndefined(jagsaaltiinTugsgulRef) && !isNullOrUndefined(jagsaaltiinTugsgulRef.current)) {
            jagsaaltiinTugsgulRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <div
                className = "bg-slate-100"
                style={{
                    borderRadius: '6px',
                    //background: 'white',
                    transition: "0.15s ease-in-out",
                    height: undur,
                    // overflow: 'scroll',
                    // willChange: "transform"
                }}
                // onScroll={(e) => onscroll(e)}
            >
                {
                    !isNullOrUndefined(songosonUtgaAvya) && 
                        typeof songosonUtgaAvya === "function" 
                    &&
                    <Selecto
                        dragContainer={".ibiAntKhusnegtID"}
                        selectableTargets={[".testClass .khusnegtTile"]}
                        hitRate={0} 
                        selectByClick={false}
                        selectFromInside={true}
                        toggleContinueSelect={["shift"]}
                        ratio={0}
                        scrollOptions={scrollOptions}
                        onDragStart={(e) => {
                            if (e.inputEvent.target.nodeName === "BUTTON") {
                                return false;
                            }
                            return true;
                        }}
                        onSelect={(e) => {
                            songokhUtguudId(e);
                        }}
                        onDragEnd={() => {
                            songosonUtguudButsaaya().then((result) => {
                                if (result) {
                                    setSongogdsonTile([]);
                                }
                            });
                        }} 
                        onScroll={(e) => {
                            khRef.current.scrollBy(
                                e.direction[0] * 10,
                                e.direction[1] * 10
                            );
                        }}
                    />
                } 
                <div style = {{width:'100%', height:'100%', position: 'relative', overflow: 'scroll', willChange: 'transform'}} onScroll={(e) => onscroll(e)}
                    className="ibiAntKhusnegtID" ref = {khRef}> 
                    <KhusnegtiinTolgoi
                        khusnegtTolgoinID={khusnegtTolgoinID}
                        khusnegtiintolgoiZagvar={khusnegtiintolgoiZagvar}
                        olnoorSongosonEsekh={olnoorSongosonEsekh}
                        songoltKhiiye={songoltKhiiye} songoltKhiikh={songoltKhiikh} baganuud={baganuud} dundiinUrgun={dundiinUrgun} />
                    <KhusnegtBiye
                        gariinUsegUndur={gariinUsegUndur}
                        songoltKhiikh={songoltKhiikh}
                        dundiinUrgun={dundiinUrgun}
                        kharuulakhUgugdul={kharuulakhUgugdul}
                        jagsaaltiinTugsgulRef={jagsaaltiinTugsgulRef}
                        tableUndur={tableUndur} 
                        offsetY={offsetY}
                        khusnegtiinKhul={khusnegtiinKhul}
                        gariinUsgiinTalbar={gariinUsgiinTalbar} />
                </div>
            </div>
            {(props.khulDunComponent || khuudaslalt) &&
                <div
                    className='bg-[#e6ebf1] w-full p-2 flex items-center justify-between border-t border-t-[#d7d7d7] border-dashed'>
                    <div style={{ display: 'flex', alignItems: 'center', width: khuudaslalt ? '50%' : '100%' }} >
                        {props.khulDunComponent && <props.khulDunComponent />}
                    </div>
                    {khuudaslalt &&
                        <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Pagination
                                size="small"
                                showSizeChanger
                                pageSizeOptions={[50, 100]}
                                pageSize={khuudaslalt.khuudasniiKhemjee}
                                onChange={khuudaslalt.khuudaslaltSolikh}
                                current={khuudaslalt.khuudasniiDugaar}
                                total={khuudaslalt.khuudasniiNiitToo}
                            />
                        </div>}
                </div>}
        </>
    )
}

export default React.memo(forwardRef(Khusnegt));