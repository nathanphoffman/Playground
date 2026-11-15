import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Needs a free token: https://account.mapbox.com  -> copy env.example to .env and fill in VITE_MAPBOX_TOKEN
mapboxgl.accessToken = import.meta.env["VITE_MAPBOX_TOKEN"] as string;

const el = document.getElementById("root")!;
el.style.height = "400px";
new mapboxgl.Map({ container: el, style: "mapbox://styles/mapbox/streets-v12", center: [-74.5, 40], zoom: 9 });
