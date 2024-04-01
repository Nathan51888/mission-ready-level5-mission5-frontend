import styles from './StationComponent.module.css'
import StationServiceComponent from './StationServiceComponent'

function StationComponent({ station }) {

    return (
        <div className={styles.station}>
            <div>
                <h4 className={styles.name}>{station.name}</h4>
                <p className={styles.distance}>0.7km away | Open now</p>
                <p className={styles.location}>{station.location}</p>
            </div>
            <StationServiceComponent station={station} />
        </div>
    )
}

export default StationComponent
