import styles from './StationListComponent.module.css'
import StationComponent from './StationComponent'
import { useEffect, useState } from 'react';

function StationListComponent({ stationList, service, sort, status }) {
    const [mappedStationList, setMappedStationList] = useState();

    useEffect(() => {
        const mappedList = stationList.map((item, index) => {
            return <StationComponent key={index} station={item} service={service} status={status} />
        });
        console.log("mapped station list")
        setMappedStationList(mappedList);
    }, [stationList, service, status]);

    return (
        <div className={styles.list}>
            {mappedStationList}
        </div>
    )
}

export default StationListComponent
