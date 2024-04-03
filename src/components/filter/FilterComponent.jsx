import styles from './FilterComponent.module.css'
import FilterListServiceComponent from './FilterListServiceComponent'

function FilterComponent({ setService }) {
  return (
    <div className={styles.filter}>
            <FilterListServiceComponent setService={setService} />
    </div>
  )
}

export default FilterComponent
