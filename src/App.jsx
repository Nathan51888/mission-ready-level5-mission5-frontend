import { useEffect, useState } from 'react'
import './App.css'

// Components
import StationListComponent from './components/filter/StationListComponent';
import MapComponent from './components/map/MapComponent';


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

    function switchService() {
        switch (service) {
            case '':
                setService('carWash');
                break;
            case 'carWash':
                setService('evCharging');
                break;
            default:
                setService('');
                break;
        }
    }

    return (
        <>
            <div className='app'>
                <StationListComponent stationList={stationList} service={service} sortOption={sortOption} />
                <MapComponent stationList={stationList} />
                <button onClick={switchService}>Switch Service</button>
            </div>
        </>
    )
}

export default App
