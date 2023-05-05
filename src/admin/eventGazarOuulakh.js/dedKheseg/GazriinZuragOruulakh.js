import React, { useState } from 'react'
import { TankhimContext } from './TankhimOruulakh';
import { Marker, InfoWindow } from "@react-google-maps/api";
import { useBodyUndurOlyo, DursZuragch, GazriinZurag } from '@/src/components';

export default function GazriinZuragOruulakh(props) {
    const { tomState, editorRef, yurunkhiiMedeelelAvya } = React.useContext(TankhimContext)
    let undur = useBodyUndurOlyo(0)
    const [open, setOpen] = useState(false);
  return (<GazriinZurag 
            mapContainerStyle={{ height: undur- 170, marginTop:'0px', borderRadius: 8}}
            zoom={15}
            center={{
                lat: Number(tomState.yurunkhiiMedeelel.urgurug),
                lng: Number(tomState.yurunkhiiMedeelel.urtrag),
            }}
            options={{ disableDoubleClickZoom: true, fullscreenControl: false, zoomControl: false, streetViewControl: false }}
            loadScriptProps={{ libraries: ["drawing", "geometry", "places"] }}
            //onClick={khariltsagchiinBairshilSongyo}
        >
            <Marker
                draggable={true}
                //onDragEnd={khariltsagchiinBairshilSongyo}
                position={{
                    lat: Number(tomState.yurunkhiiMedeelel.urgurug),
                    lng: Number(tomState.yurunkhiiMedeelel.urtrag),
                }}
                onMouseDown={() => setOpen(true)}
            >
                {open && (
                    <InfoWindow
                        position={{
                            lat: Number(tomState.yurunkhiiMedeelel.urgurug),
                            lng: Number(tomState.yurunkhiiMedeelel.urtrag),
                        }}
                        options={{
                            closeBoxURL: ``,
                            enableEventPropagation: true,
                        }}
                        zIndex={1}
                        onCloseClick={() => setOpen(false)}
                    >
                        <div style={{ width: "100%" }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    width: "100%",
                                }}
                            >
                                <div style={{ width: "50%", marginRight: 10 }}>Өргөрөг:</div>
                                <div style={{ display: "flex" }}>{Number(tomState.yurunkhiiMedeelel.urgurug)}</div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    width: "100%",
                                }}
                            >
                                <div style={{ width: "50%", marginRight: 10 }}>Уртраг:</div>
                                <div>{Number(tomState.yurunkhiiMedeelel.urtrag)}</div>
                            </div> 
                        </div>
                    </InfoWindow>
                )}
            </Marker>
        </GazriinZurag>
  )
}
