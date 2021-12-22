import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import balloonGreen from "assets/img/balloon_green.png";
import balloonYellow from "assets/img/balloon_yellow.png";

const containerStyle = {
    width: "100%",
    height: "100vh",
};

const Map = ({ places }) => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyAHYj88nSvDeCon086Eie3WgE46l6jQnbM">
            <GoogleMap mapContainerStyle={containerStyle} center={places[0]} zoom={11}>
                {places.map((place, index) => (
                    <Marker
                        key={`map-place-${index}`}
                        position={place}
                        icon={place.isActive ? balloonGreen : balloonYellow}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
