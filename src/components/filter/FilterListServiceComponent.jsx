import styles from './FilterListServiceComponent.module.css'
import FilterServiceComponent from './FilterServiceComponent'

function FilterListServiceComponent({ setService }) {
  return (
    <div className={styles.list}>
            <FilterServiceComponent setService={setService} />
            <button className={styles.search}>Search</button>
    </div>
  )
}

export default FilterListServiceComponent
