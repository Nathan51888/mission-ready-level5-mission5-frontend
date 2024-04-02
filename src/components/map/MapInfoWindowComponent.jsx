import styles from './MapInfoWindowComponent.module.css'
import StationServiceTagsComponent from '../station/StationServiceTagsComponent'
import street from '../../assets/street.png'

function MapInfoWindowComponent({ station }) {
    return (
        <>
            <div className={styles.info_window}>
                <img src={street} />
                <div className={styles.subwindow}>
                    <h4>{station.location}</h4>
                    <hr />
                    <p>Open 24 hours | Open now</p>
                    <StationServiceTagsComponent station={station} />
                </div>
                <div className={styles.buttons}>
                    <button className={styles.send_button}>Send to phone</button>
                    <button className={styles.details_button}>More details</button>
                </div>
            </div>
        </>
    )
}

export default MapInfoWindowComponent
