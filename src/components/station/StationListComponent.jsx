import styles from './StationListComponent.module.css'
import StationComponent from './StationComponent'
import { useEffect, useState } from 'react';

function StationListComponent({ stationList, service, sort, status }) {
    const [mappedStationList, setMappedStationList] = useState();

    useEffect(() => {
        if (!stationList || stationList == '') {
            console.log("still loading")
            setMappedStationList(<p>'Loading...'</p>);
            return;
        }
        if (service === '') {
            console.log("no station filter")
            mapList(stationList);
            return;
        }
        const filteredList = stationList.filter((item) => {
            const isMatching = item.services.some(item => (item === service));
            return isMatching;
        })
        mapList(filteredList);
    }, [stationList, service, status, sort]);

    function mapList(list) {
        const sortedList = sortList(list);
        if (!sortedList) return;
        const mappedList = sortedList.map((item, index) => {
            return <StationComponent key={index} station={item} service={service} status={status} sort={sort} />
        });
        setMappedStationList(mappedList);
    }

    function sortList(list) {
        if (sort === '') {
            console.log('no sorting')
            return list;
        }
        if (sort === 'cheapest') {
            const sortedList = list.sort((a, b) => a.gas - b.gas);
            console.log('sorting cheapest');
            return sortedList;
        }
        return list;
    }

    return (
        <div className={styles.list}>
            {mappedStationList}
        </div>
    )
}

export default StationListComponent
