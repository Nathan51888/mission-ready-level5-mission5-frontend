import styles from './StationListComponent.module.css'
import StationComponent from './StationComponent'

function StationListComponent({ stationList, service, sort }) {
    const mappedList = stationList.map((item, index) => {
        return <StationComponent key={index} station={item} service={service} />
    });

    return (
        <div className={styles.list}>
            {mappedList}
        </div>
    )
}

export default StationListComponent
