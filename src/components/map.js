import React, { useRef } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Map = (props) => {
  const mapRef = useRef(null);
  // const latitude = -6.2793;
  // const longitude = 107.04754;

  return (
    <MapContainer
      center={[props.latitude, props.longitude]}
      zoom={15}
      ref={mapRef}
      className="map"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[props.latitude, props.longitude]} />
    </MapContainer>
  );
};

export default Map;
