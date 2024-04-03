import styles from './StationComponent.module.css'
import StationServiceDefaultComponent from './StationServiceDefaultComponent'
import StationServiceAltComponent from './StationServiceAltComponent';

function StationComponent({ station, service, status }) {
    let serviceComponent;
    switch(service) {
        case 'carWash':
        case 'evCharging':
            serviceComponent = <StationServiceAltComponent service={service} status={status} />;
            break;
        default:
            serviceComponent = <StationServiceDefaultComponent station={station} />;
            break;
    }

    return (
        <div className={styles.station}>
            <div>
                <h4 className={styles.name}>{station.name}</h4>
                <p className={styles.distance}>0.7km away | Open now</p>
                <p className={styles.location}>{station.location}</p>
            </div>
            {serviceComponent}
        </div>
    )
}

export default StationComponent
