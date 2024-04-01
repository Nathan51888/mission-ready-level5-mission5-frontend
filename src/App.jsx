import { useEffect, useState } from 'react'
import './App.css'

// Components
import StationListComponent from './components/filter/StationListComponent';


function App() {
    const [service, setService] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [stationList, setStationList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/get')
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setStationList(res);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <StationListComponent stationList={stationList} service={service} sortOption={sortOption} />
        </>
    )
}

export default App
