import { Map, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useState, useEffect } from 'react';
import MapMarkerComponent from './MapMarkerComponent';

function MapComponent({ stationList }) {
    const map = useMap();
    const geocodingLib = useMapsLibrary('geocoding');

    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        if (!geocodingLib || !map) return;

        Promise.all(stationList.map(async (station, index) => {
            const path = station.location;
            let markerPosition;
            let markerElement;
            const geocoder = new geocodingLib.Geocoder();
            await geocoder.geocode({ address: path }, (results, status) => {
                if (status === "OK") {
                    markerPosition = results[0].geometry.location.toJSON();
                } else {
                    alert('Geocode error: ' + status);
                }
            })
            markerElement = <MapMarkerComponent key={index} position={markerPosition} station={station} />;
            return markerElement;
        })).then((values) => {
            setMarkers(values);
        })
    }, [geocodingLib, map, stationList]);

    return (
        <>
            <Map
                defaultCenter={{ lat: -36.823347715001965, lng: 174.7477176700476 }}
                defaultZoom={12}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId={import.meta.env.VITE_MAP_ID}>
                {markers}
            </Map>
        </>
    )
}

export default MapComponent
