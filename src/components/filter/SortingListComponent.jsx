import styles from './SortingListComponent.module.css'

function SortingListComponent({ setSort }) {
    function handleSort(e) {
        const sort = e.target.id;
        console.log(sort);
        setSort(sort);
    }

  return (
    <div className={styles.list}>
            <input type='radio' name='sort' id='nearby' onChange={handleSort} />
            <input type='radio' name='sort' id='cheapest' onChange={handleSort} />
            <input type='radio' name='sort' id='evCharging' onChange={handleSort} />
            <input type='radio' name='sort' id='premium' onChange={handleSort} />
            <input type='radio' name='sort' id='unleaded' onChange={handleSort} />
            <input type='radio' name='sort' id='diesel' onChange={handleSort} />

            <label htmlFor='nearby' className={styles.nearby}>Nearby first</label>
            <label htmlFor='cheapest' className={styles.cheapest}>Cheapest first</label>
            <label htmlFor='evCharging' className={styles.evCharging}>EV charging</label>
            <label htmlFor='premium' className={styles.premium}>ZX Premium</label>
            <label htmlFor='unleaded' className={styles.unleaded}>ZX91 Unleaded</label>
            <label htmlFor='diesel' className={styles.diesel}>Z Diesel</label>
    </div>
  )
}

export default SortingListComponent
