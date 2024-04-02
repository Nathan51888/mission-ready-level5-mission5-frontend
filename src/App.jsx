import { useEffect, useState } from 'react'
import { APIProvider } from '@vis.gl/react-google-maps'
import './App.css'

// Components
import StationListComponent from './components/station/StationListComponent';
import MapComponent from './components/map/MapComponent';


function App() {
    const [service, setService] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [stationList, setStationList] = useState([]);

    const backendPath = import.meta.env.VITE_BACKEND;
    console.log(backendPath);

    useEffect(() => {
        fetch(`${backendPath}/get`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setStationList(res);
            })
            .catch((err) => console.log(err));
    }, [backendPath]);

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
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <div className='app'>
                    <StationListComponent stationList={stationList} service={service} sortOption={sortOption} />
                    <MapComponent stationList={stationList} />
                    <button onClick={switchService}>Switch Service</button>
                </div>
            </APIProvider>
        </>
    )
}

export default App
