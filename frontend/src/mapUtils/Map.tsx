import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './map.css';
const pinPoint = {
    lat: 28.6239,
    lng: 77.2090
};
const mapStyle = {
    height: '400px',
    width: '800px'
}
const Map = () => {
    return (
        <div id='map'>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={mapStyle}
                    center={pinPoint}
                    zoom={10}
                >
                    <Marker position={pinPoint} />
                </GoogleMap>   
            </LoadScript>
        </div>
    )
}
export default Map;