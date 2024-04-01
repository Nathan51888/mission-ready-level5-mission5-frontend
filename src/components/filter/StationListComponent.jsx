import styles from './StationListComponent.module.css'
import StationComponent from './StationComponent'

function StationListComponent({ stationList, service, sortOption }) {
    const mappedList = stationList.map((item, index) => {
        return <StationComponent key={index} station={item} />
    });

    return (
        <div className={styles.list}>
            {mappedList}
        </div>
    )
}

export default StationListComponent
