import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import { useState } from "react";

import MapInfoWindowComponent from "./MapInfoWindowComponent";
import MapMarkerIconComponent from "./MapMarkerIconComponent";

function MapMarkerComponent({ position, station, service, status }) {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const [infowindowShown, setInfowindowShown] = useState(false);

    const toggleInfoWindow = () => setInfowindowShown(previousState => !previousState);
    const closeInfoWindow = () => setInfowindowShown(false);

    return (
        <>
            <AdvancedMarker
                ref={markerRef}
                position={position}
                onClick={toggleInfoWindow}
            >
                <MapMarkerIconComponent service={service} status={status} />
            </AdvancedMarker>
            {infowindowShown && (
                <InfoWindow anchor={marker} onCloseClick={closeInfoWindow}>
                    <MapInfoWindowComponent station={station} />
                </InfoWindow>
            )}
        </>
    )
}

export default MapMarkerComponent
