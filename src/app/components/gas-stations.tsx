'use client'

import { gasStationIcon } from '@/app/icons/gas-station.icon'
import { Marker } from '@/app/lib/react-leaflet'
import { gasStationCoords } from '@/app/mocks/gasStationMock'

export const GasStations = () => {
  return (
    <>
      {gasStationCoords.map((coords, index) => (
        <Marker key={index} icon={gasStationIcon} position={coords} />
      ))}
    </>
  )
}
