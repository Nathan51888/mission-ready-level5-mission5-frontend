import styles from './StationComponent.module.css'
import StationServiceDefaultComponent from './StationServiceDefaultComponent'
import StationServiceAltComponent from './StationServiceAltComponent';
import StationServicePriceComponent from './StationServicePriceComponent';
import { useEffect, useState } from 'react';

function StationComponent({ station, service, status, sort }) {
    const [serviceComponent, setServiceComponent] = useState();
    useEffect(() => {
        if (service === 'carWash' || service === 'evCharging') {
            console.log('station alt')
            setServiceComponent(<StationServiceAltComponent service={service} status={status} />);
            return;
        }
        if (sort === 'cheapest') {
            console.log('station price')
            setServiceComponent(<StationServicePriceComponent station={station} />);
            return;
        }
        console.log('station default')
        setServiceComponent(<StationServiceDefaultComponent station={station} />);
        return;
    }, [station, service, sort, status]);

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
