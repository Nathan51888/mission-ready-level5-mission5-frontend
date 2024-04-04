import styles from './FilterServiceComponent.module.css'

// Icons
import DropdownArrow from '../../assets/dropdown-arrow.png'
import CarWashIcon from '../../assets/service-icons/option-car-wash.png'
import FoodIcon from '../../assets/service-icons/option-food.png'
import GiftCardsIcon from '../../assets/service-icons/option-gift-card.png'
import EvChargingIcon from '../../assets/service-icons/option-EV-charging.png'
import LpgBottleSwapIcon from '../../assets/service-icons/option-LPG-bottle-swap.png'
import EngineOilsIcon from '../../assets/service-icons/option-engine-oils.png'
import RefuelingIcon from '../../assets/service-icons/option-refueling.png'
import PreOrderCoffeeIcon from '../../assets/service-icons/option-pre-order-coffee.png'

function FilterServiceComponent({ setService }) {
    // react select: dropdown options
    const options = [
        { value: "carWash", label: "Car wash"},
        { value: "food", label: "Food and drink"},
        { value: "giftCards", label: "Gift cards"},
        { value: "evCharging", label: "EV charging"},
        { value: "lpgBottleSwap", label: "LPG bottle swap"},
        { value: "engineOils", label: "Engine oils"},
        { value: "preOrderCoffee", label: "pre-order Coffee"},
    ];

    function handleSelect(e) {
        const selection = e.target.value;
        console.log('selection: ' + selection);
        setService(selection);
    }

    return (
        <>
        <div className={styles.service_select}>
            <h4>Service</h4>
            <div className={styles.dropdown}>
                <button className={styles.dropdown_button}>select service<img src={DropdownArrow} /></button>
                <div className={styles.content}>
                    <button value='carWash' onClick={handleSelect}>
                        <img src={CarWashIcon} /><span>Car wash</span>
                    </button>
                    <button value='food' onClick={handleSelect}>
                        <img src={FoodIcon} />
                        <span>Food and drink</span>
                    </button>
                    <button value='giftCards' onClick={handleSelect}>
                        <img src={GiftCardsIcon} />
                        <span>Gift cards</span>
                    </button>
                    <button value='evCharging' onClick={handleSelect}>
                        <img src={EvChargingIcon} />
                        <span>EV charging</span>
                    </button>
                    <button value='lpgBottleSwap' onClick={handleSelect}>
                        <img src={LpgBottleSwapIcon} />
                        <span>LPG bottle swap</span>
                    </button>
                    <button value='engineOils' onClick={handleSelect}>
                        <img src={EngineOilsIcon} />
                        <span>Engine oils</span>
                    </button>
                    <button>
                        <img src={RefuelingIcon} />
                        <span>Refueling</span>
                    </button>
                    <button value='preOrderCoffee' onClick={handleSelect}>
                        <img src={PreOrderCoffeeIcon} />
                        <span>pre-order Coffee</span>
                    </button>
                </div>
            </div>
        </div>
            <div className={styles.service_select}>
                <h4>Service (working)</h4>
                <select onChange={handleSelect}>
                    <option value='carWash'>Car wash</option>
                    <option value='food'>Food and drink</option>
                    <option value='evCharging'>EV charging</option>
                    <option value=''>Show all</option>
                </select>
            </div>
        </>
    )
}

export default FilterServiceComponent
