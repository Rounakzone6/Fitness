import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
  return (
    <MapContainer center={[26.8467, 80.9462]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[26.8467, 80.9462]}>
        <Popup>
          My Location 📍 <br /> Lucknow, India
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
