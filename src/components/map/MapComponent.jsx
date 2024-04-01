import { APIProvider, Map, AdvancedMarker, useAdvancedMarkerRef, InfoWindow } from "@vis.gl/react-google-maps"
import styles from './MapComponent.module.css'
import mapMarker from '../../assets/map-marker.svg'
import { useState } from "react";
import MapInfoWindowComponent from "./MapInfoWindowComponent";

function MapComponent() {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const [infowindowShown, setInfowindowShown] = useState(false);

    const toggleInfoWindow = () => setInfowindowShown(previousState => !previousState);
    const closeInfoWindow = () => setInfowindowShown(false);

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <Map
                defaultCenter={{ lat: -36.823347715001965, lng: 174.7477176700476 }}
                defaultZoom={12}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId={import.meta.env.VITE_MAP_ID}>
                <AdvancedMarker
                    ref={markerRef}
                    position={{ lat: -36.624357976056814, lng: 174.49868942578487 }}
                    onClick={toggleInfoWindow}
                >
                    <div className={styles.marker}>
                        <p className={styles.marker_text}>Z</p>
                        <img src={mapMarker} />
                    </div>
                </AdvancedMarker>

                {infowindowShown && (
                    <InfoWindow anchor={marker} onCloseClick={closeInfoWindow}>
                        <MapInfoWindowComponent />
                    </InfoWindow>
                )}
            </Map>
        </APIProvider>
    )
}

export default MapComponent
