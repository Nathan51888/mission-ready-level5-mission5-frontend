import styles from './StationServicePriceComponent.module.css'
import ellipse from '../../assets/Ellipse 1.svg'

function StationServicePriceComponent({ station }) {
    return (
        <div className={styles.service}>
            <div className={styles.group}>
                <div className={styles.ellipse}>
                    <p className={styles.ellipse}>91</p>
                    <img src={ellipse} />
                </div>
                <p className={styles.price}>${station.gas}</p>
            </div>
        </div>
    )
}

export default StationServicePriceComponent
