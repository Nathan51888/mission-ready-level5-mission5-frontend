import styles from './StationServiceDefaultComponent.module.css'

// Icon imports
import ellipse from '../../assets/Ellipse 1.svg'
import StationServiceTagsComponent from '../station/StationServiceTagsComponent'


function StationServiceDefaultComponent({ station }) {
    return (
        <div className={styles.service}>
            <div className={styles.gas}>
                <div className={styles.ellipse}>
                    <p className={styles.ellipse}>91</p>
                    <img src={ellipse} />
                </div>
                <div className={styles.ellipse}>
                    <p className={styles.ellipse}>95</p>
                    <img src={ellipse} />
                </div>
                <div className={styles.ellipse}>
                    <p className={styles.ellipse}>98</p>
                    <img src={ellipse} />
                </div>
                <div className={styles.ellipse}>
                    <p className={styles.ellipse}>D</p>
                    <img src={ellipse} />
                </div>
            </div>
            <StationServiceTagsComponent station={station} />
        </div>
    )
}

export default StationServiceDefaultComponent
