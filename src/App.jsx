import { useState } from 'react'
import './App.css'

// Components
import StationListComponent from './components/filter/StationListComponent';


function App() {
    const [service, setService] = useState('');
    const [sortOption, setSortOption] = useState('');

    return (
        <>
            <StationListComponent service={service} sortOption={sortOption} />
        </>
    )
}

export default App
