'use client'

import { LatLngExpression } from 'leaflet'
import { ReactNode, useMemo } from 'react'
import { MapContainer, TileLayer } from '../lib/react-leaflet'

interface MapProps {
  defaultCenterPosition?: LatLngExpression
  zoom?: number
  children: ReactNode
}

export const Map = ({
  children,
  zoom = 10,
  defaultCenterPosition = { lat: -23.550241, lng: -46.634126 },
}: MapProps) => {
  const time = useMemo(() => new Date().getTime(), [])

  const displayMap = useMemo(
    () => (
      <MapContainer
        key={time}
        zoom={zoom}
        zoomControl={false}
        center={defaultCenterPosition}
        className="w-full h-full z-0"
      >
        <TileLayer
          url="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/512/{z}/{x}/{y}@2x?access_token=sk.eyJ1IjoicmFmYWVsLWNhbXBvcyIsImEiOiJjbHUxN2cxcmYwYjM4MmpvNmlxZXBwbHkzIn0.RpwF1jHuaYxKlFFhaqnpNA"
          tileSize={512}
          zoomOffset={-1}
        />

        {children}
      </MapContainer>
    ),
    [children, defaultCenterPosition, time, zoom],
  )

  return displayMap
}
