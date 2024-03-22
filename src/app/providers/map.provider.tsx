'use client'

import { LatLngExpression } from 'leaflet'
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useMap, useMapEvents } from 'react-leaflet'
import { toast } from 'react-toastify'
import { constants } from '../config/constants'

export type UserCoordinates = LatLngExpression | null

export interface MapContextValues {
  zoom: number
  userCoordinates: UserCoordinates
  handleFlyTo: (coordinates: LatLngExpression) => void
  handleCenterToUserCoords: () => void
}

export interface MapProviderProps {
  children: ReactNode
  initOnUserPosition?: boolean
}

export const MapContext = createContext<MapContextValues | null>(null)

export const MapProvider: FC<MapProviderProps> = ({
  children,
  initOnUserPosition = false,
}) => {
  const map = useMap()

  const [zoom, setZoom] = useState(map.getZoom())
  const [userCoordinates, setUserCoordinates] = useState<UserCoordinates>(null)

  useMapEvents({ zoom: (e) => setZoom(e.target._zoom) })

  const handleGetUserCoordinates = useCallback(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const coordinates = { lat: coords.latitude, lng: coords.longitude }

          setUserCoordinates(coordinates)

          if (initOnUserPosition) map.setView(coordinates, 13)
        },
        () => {
          toast.error(constants.userCoordsErrorMessage)
        },
      )
    }
  }, [initOnUserPosition, map])

  const handleCenterToUserCoords = useCallback(() => {
    if (userCoordinates) map.setView(userCoordinates)
  }, [map, userCoordinates])

  const handleFlyTo = useCallback(
    (coordinates: LatLngExpression) =>
      map.flyTo(coordinates, undefined, { duration: 0.2 }),
    [map],
  )

  useEffect(() => handleGetUserCoordinates(), [handleGetUserCoordinates])

  return (
    <MapContext.Provider
      value={{
        zoom,
        userCoordinates,
        handleFlyTo,
        handleCenterToUserCoords,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
