import { useEffect, useState } from 'react'
import { APIProvider } from '@vis.gl/react-google-maps'
import './App.css'

// Components
import FilterComponent from './components/filter/FilterComponent';
import StationListComponent from './components/station/StationListComponent';
import MapComponent from './components/map/MapComponent';


function App() {
    const [service, setService] = useState('');
    const [sort, setSort] = useState('');
    const [stationList, setStationList] = useState([]);
    const [status, setStatus] = useState('busy');

    const backendPath = import.meta.env.VITE_BACKEND;
    console.log(backendPath);

    useEffect(() => {
        fetch(`${backendPath}/api/get`)
            .then((res) => res.json())
            .then((res) => {
                console.log("fetched station list");
                setStationList(res);
            })
            .catch((err) => console.log(err));
    }, [backendPath]);

    function switchStatus() {
        if (status === 'busy') return setStatus('available');
        setStatus('busy');
    }

    return (
        <>
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <button onClick={switchStatus}>Switch Status</button>
                <div className='app'>
                    <FilterComponent setService={setService} setSort={setSort} />
                    <div className='main'>
                        <StationListComponent stationList={stationList} service={service} sort={sort} status={status} />
                        <MapComponent stationList={stationList} service={service} status={status} />
                    </div>
                </div>
            </APIProvider>
        </>
    )
}

export default App
