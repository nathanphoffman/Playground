import "leaflet/dist/leaflet.css";
import { createRoot } from "react-dom/client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Note: the default marker icon image can break under bundlers - a classic Leaflet gotcha to explore.
createRoot(document.getElementById("root")!).render(
  <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px" }}>
    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[51.505, -0.09]}><Popup>Hello, Leaflet</Popup></Marker>
  </MapContainer>,
);
