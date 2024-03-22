import { LatLngExpression } from 'leaflet'
import { useEffect, useMemo, useState } from 'react'

export const useGetUserCurrentLocation = () => {
  const [userLocation, setUserLocation] = useState<LatLngExpression | null>(
    null,
  )

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords

          setUserLocation({ lat: latitude, lng: longitude })
        },
        (error) => {
          console.error('Error get user location: ', error)
        },
      )
    } else {
      console.log('Geolocation is not supported by this browser')
    }
  }

  useEffect(() => getUserLocation(), [])

  const value = useMemo(
    () => ({
      userLocation,
    }),
    [userLocation],
  )

  return value
}
