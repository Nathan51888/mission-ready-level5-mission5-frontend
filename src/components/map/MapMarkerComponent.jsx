import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import { useState } from "react";

import styles from './MapMarkerComponent.module.css';
import mapMarker from '../../assets/map-marker.svg';
import MapInfoWindowComponent from "./MapInfoWindowComponent";

function MapMarkerComponent({ position, station }) {
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
                <div className={styles.marker}>
                    <p className={styles.marker_text}>Z</p>
                    <img src={mapMarker} />
                </div>
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
