'use client'

import { gasStationIcon } from '@/app/icons/gas-station.icon'
import { Marker } from '@/app/lib/react-leaflet'
import { favoriteGasStationIcon } from '../icons/favorite-gas-station'
import { postos } from '../mocks/gasStationMock'

export const GasStations = () => {
  const [firstCoord, ...restOfCoords] = postos.postos

  return (
    <>
      <Marker
        icon={favoriteGasStationIcon}
        position={{ lat: firstCoord.lat, lng: firstCoord.lng }}
      />
      {restOfCoords.map((coords, index) => (
        <Marker
          key={index}
          icon={gasStationIcon}
          position={{ lat: coords.lat, lng: coords.lng }}
        />
      ))}
    </>
  )
}
