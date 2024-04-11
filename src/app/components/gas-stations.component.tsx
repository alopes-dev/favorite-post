'use client'

import { gasStationIcon } from '@/app/icons/gas-station.icon'
import { Marker } from '@/app/lib/react-leaflet'
import { gasStationCoords } from '@/app/mocks/gasStationMock'
import { favoriteGasStationIcon } from '../icons/favorite-gas-station'

export const GasStations = () => {
  const [firstCoord, ...restOfCoords] = gasStationCoords

  return (
    <>
      <Marker icon={favoriteGasStationIcon} position={firstCoord} />
      {restOfCoords.map((coords, index) => (
        <Marker key={index} icon={gasStationIcon} position={coords} />
      ))}
    </>
  )
}
