import styled from "styled-components";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TLM from "../../assets/icon.ico";
import "./Map.css";
import { Icon } from "leaflet";
export function MapTLM() {
  const customIcon = new Icon({
    iconUrl: TLM,
    iconSize: [38, 38],
  });
  return (
    <Container>
      <MapContainer
        center={[-0.18236, -78.478516]}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[-0.18236, -78.478516]} icon={customIcon}>
          <Popup>
            <p>
              TLM Royal <br />
              Centro Corporativo Zyra
            </p>
          </Popup>
        </Marker>
      </MapContainer>
      ,
    </Container>
  );
}
const Container = styled.div`
  height: 50vh;
`;
