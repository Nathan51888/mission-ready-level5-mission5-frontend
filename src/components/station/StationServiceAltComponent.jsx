import styles from './StationServiceAltComponent.module.css'

// Icon imports
import carWashIcon from '../../assets/service-icons/service-car-wash.png'
import evChargingIcon from '../../assets/service-icons/service-EV-charging.png'
import availableIcon from '../../assets/service-icons/service-available.svg'
import busyIcon from '../../assets/service-icons/service-busy.svg'

function StationServiceAltComponent({ service, status }) {
    let statusIcon;
    switch (status) {
        case 'available':
            statusIcon = <img src={availableIcon} />;
            break;
        case 'busy':
            statusIcon = <img src={busyIcon} />;
            break;
        default:
            break;
    }

    let serviceIcon;
    switch (service) {
        case 'carWash':
            serviceIcon = <img src={carWashIcon} />;
            break;
        case 'evCharging':
            serviceIcon = <img src={evChargingIcon} />;
            break;
        default:
            break;
    }

    return (
        <div className={styles.service}>
            <div className={styles.icons}>
                {statusIcon}
                {serviceIcon}
            </div>
            {status === 'available' ? <p>Available position</p> : <p>Busy now</p>}
        </div>
    )
}

export default StationServiceAltComponent
