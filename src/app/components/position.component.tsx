'use client'

import { Marker } from 'react-leaflet'
import { LatLngLiteral } from 'leaflet'
import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { mapLocationIcon } from '../icons/location.icon'
import { constants } from '../config/constants'

export type PositionType = LatLngLiteral | null

interface PositionProps {
  onChange?: (position: PositionType) => void
}

export const Position: FC<PositionProps> = ({ onChange }) => {
  const [position, setPosition] = useState<LatLngLiteral | null>(null)

  useEffect(() => {
    let watchID: number

    if (window.navigator.geolocation) {
      watchID = window.navigator.geolocation.watchPosition(
        ({ coords }) => {
          const position = { lat: coords.latitude, lng: coords.longitude }

          setPosition(position)
          onChange?.(position)
        },
        () => {
          toast.error(constants.userCoordsErrorMessage)
        },
        { enableHighAccuracy: true },
      )
    }

    return () => {
      window.navigator.geolocation.clearWatch(watchID)
    }
  }, [onChange])

  return (
    <> {position && <Marker icon={mapLocationIcon} position={position} />}</>
  )
}
