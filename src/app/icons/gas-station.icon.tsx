import Leaflet from 'leaflet'

export const gasStationIcon = Leaflet.icon({
  iconUrl: '/gas-station.svg',
  iconSize: [50, 50],
  iconAnchor: [5, 35],
  popupAnchor: [20, -15],
})
