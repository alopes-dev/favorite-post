'use client'

import { MapContainer, TileLayer } from '@/lib/react-leaflet'
import Leaflet from 'leaflet'
import { gasStationCoords } from '@/mocks/gasStationMock'
import { Marker } from 'react-leaflet'

const gasStationIcon = Leaflet.icon({
  iconUrl: '/gas-station.svg',
  iconSize: [50, 50],
  iconAnchor: [5, 35],
  popupAnchor: [20, -15],
})

const MapBootstrap = () => {
  return (
    <MapContainer
      zoomControl={false}
      zoom={10}
      center={{ lat: -23.550241, lng: -46.634126 }}
      className="w-full h-full z-0"
    >
      <TileLayer
        tileSize={512}
        zoomOffset={-1}
        url="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/512/{z}/{x}/{y}@2x?access_token=sk.eyJ1IjoicmFmYWVsLWNhbXBvcyIsImEiOiJjbHUxN2cxcmYwYjM4MmpvNmlxZXBwbHkzIn0.RpwF1jHuaYxKlFFhaqnpNA"
      />

      {gasStationCoords.map((coords, index) => (
        <Marker key={index} icon={gasStationIcon} position={coords} />
      ))}
    </MapContainer>
  )
}

export default MapBootstrap
