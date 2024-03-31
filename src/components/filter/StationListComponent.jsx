import styles from './StationListComponent.module.css'
import StationComponent from './StationComponent'

function StationListComponent({ service, sortOption }) {
    const stationList = [];
    const station = {
        name: "Z Royal Oak",
        location: "700 mount Albert Road, Royal Oak, Auckland",
        services: ['carWash', 'evCharging', 'preOrderCoffee', 'food', 'engineOils', 'lpgBottleSwap', 'giftCards']
    };
    for (let i = 0; i < 10; i++) {
        stationList.push(station);
    }

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
