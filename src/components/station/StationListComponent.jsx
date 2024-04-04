import styles from './StationListComponent.module.css'
import StationComponent from './StationComponent'
import { useEffect, useState } from 'react';

function StationListComponent({ stationList, service, sort, status }) {
    const [mappedStationList, setMappedStationList] = useState();

    useEffect(() => {
        if (service === '') {
            mapList(stationList);
            return;
        }
        const filteredList = stationList.filter((item) => {
            const isMatching = item.services.some(item => (item === service));
            return isMatching;
        })
        console.log(filteredList);
        mapList(filteredList);
    }, [stationList, service, status, sort]);

    function mapList(list) {
        const mappedList = list.map((item, index) => {
            return <StationComponent key={index} station={item} service={service} status={status} />
        });
        setMappedStationList(mappedList);
    }

    return (
        <div className={styles.list}>
            {mappedStationList}
        </div>
    )
}

export default StationListComponent
