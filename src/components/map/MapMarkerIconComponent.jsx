import styles from './MapMarkerComponent.module.css';
import MapMarkerBusy from '../../assets/map-marker.svg';
import MapMarkerAvailable from '../../assets/map-marker-available.svg'
import CarWashIcon from '../../assets/service-icons/map-car-wash.png'
import EvChargingIcon from '../../assets/service-icons/map-ev-charging.png'

function MapMarkerIconComponent({ service, status }) {
    let markerIcon;
    switch (service) {
        case 'carWash':
            markerIcon = <img className={styles.marker_text} src={CarWashIcon} />;
            break;
        case 'evCharging':
            markerIcon = <img className={styles.marker_text} src={EvChargingIcon} />;
            break;
        default:
            markerIcon = <p className={styles.marker_text}>Z</p>;
            break;
    }
    let markerStatus;
    switch (status) {
        case 'available':
            markerStatus = <img src={MapMarkerAvailable} />;
            break;
        case 'busy':
            markerStatus = <img src={MapMarkerBusy} />;
            break;
        default:
            markerStatus = <img src={MapMarkerBusy} />;
            break;
    }
    return (
        <div className={styles.marker}>
            {markerIcon}
            {markerStatus}
        </div>
    )
}

export default MapMarkerIconComponent
