import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
//AIzaSyCS7UvubAuAi276iagIJ9VNvv0LAvlxqh0 old key
function GazriinZurag(props, ref) {
   const { children, loadScriptProps, ...ohter } = props;

   const mapRef = useRef(null);
   useImperativeHandle(
      ref,
      () => ({
         refAvya: () => mapRef,
         undurAvya: () => mapRef.current.mapRef.children[0].offsetHeight
      }),
      [mapRef]
   );
   return (
      <LoadScript googleMapsApiKey="AIzaSyDlCTjuOcGFE93JyDUPnbcQoMFWLnHq7ZM" {...loadScriptProps}>
         <GoogleMap
            id="gazriinZurag"
            ref={mapRef}
            mapContainerStyle={{
               height: "100%",
               width: "100%"
            }}
            {...ohter}
         >
            {children}
         </GoogleMap>
      </LoadScript>
   );
}

export default forwardRef(GazriinZurag);
