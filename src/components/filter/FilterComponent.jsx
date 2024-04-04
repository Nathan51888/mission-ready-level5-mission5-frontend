import styles from './FilterComponent.module.css'
import FilterListServiceComponent from './FilterListServiceComponent'
import SortingListComponent from './SortingListComponent'

function FilterComponent({ setService, setSort }) {
  return (
    <div className={styles.filter}>
            <FilterListServiceComponent setService={setService} />
            <SortingListComponent setSort={setSort} />
    </div>
  )
}

export default FilterComponent
