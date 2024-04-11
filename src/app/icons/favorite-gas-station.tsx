import Leaflet from 'leaflet'

export const favoriteGasStationIcon = Leaflet.icon({
  iconUrl: '/favorite-gas-station.svg',
  iconSize: [50, 50],
  iconAnchor: [5, 35],
  popupAnchor: [20, -15],
})
