import styles from './StationComponent.module.css'

// Icon imports
import ellipse from '../../assets/Ellipse 1.svg'
import carWashIcon from '../../assets/service-icons/service-car-wash.png'
import evChargingIcon from '../../assets/service-icons/service-EV-charging.png'
import preOrderCoffeeIcon from '../../assets/service-icons/service-pre-order-coffee.png'
import foodIcon from '../../assets/service-icons/service-food.png'
import engineOilsIcon from '../../assets/service-icons/service-engine-oils.png'
import lpgBottleSwapIcon from '../../assets/service-icons/service-LPG-bottle-swap.png'
import giftCardsIcon from '../../assets/service-icons/service-gift-cards.png'

function StationComponent({ station }) {
    const mappedServiceIcon = station.services.map((item, index) => {
        switch (item) {
            case 'carWash':
                return <img key={index} src={carWashIcon} />;
            case 'evCharging':
                return <img key={index} src={evChargingIcon} />;
            case 'preOrderCoffee':
                return <img key={index} src={preOrderCoffeeIcon} />;
            case 'food':
                return <img key={index} src={foodIcon} />;
            case 'engineOils':
                return <img key={index} src={engineOilsIcon} />;
            case 'lpgBottleSwap':
                return <img key={index} src={lpgBottleSwapIcon} />;
            case 'giftCards':
                return <img key={index} src={giftCardsIcon} />;
            default:
                break;
        }
    });

    return (
        <div className={styles.station}>
            <div>
                <h4 className={styles.name}>{station.name}</h4>
                <p className={styles.distance}>0.7km away | Open now</p>
                <p className={styles.location}>{station.location}</p>
            </div>
            <div>
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
                <div className={styles.tags}>
                    {mappedServiceIcon}
                </div>
            </div>
        </div>
    )
}

export default StationComponent
