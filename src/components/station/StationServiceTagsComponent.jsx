import styles from './StationServiceTagsComponent.module.css'

import carWashIcon from '../../assets/service-icons/service-car-wash.png'
import evChargingIcon from '../../assets/service-icons/service-EV-charging.png'
import preOrderCoffeeIcon from '../../assets/service-icons/service-pre-order-coffee.png'
import foodIcon from '../../assets/service-icons/service-food.png'
import engineOilsIcon from '../../assets/service-icons/service-engine-oils.png'
import lpgBottleSwapIcon from '../../assets/service-icons/service-LPG-bottle-swap.png'
import giftCardsIcon from '../../assets/service-icons/service-gift-cards.png'

function StationServiceTagsComponent({ station }) {
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
            <div className={styles.tags}>
                {mappedServiceIcon}
            </div>
  )
}

export default StationServiceTagsComponent
