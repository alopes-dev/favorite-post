import dynamic from 'next/dynamic'

export const MapContainer = dynamic(
  async () => (await import('react-leaflet')).MapContainer,
  {
    ssr: false,
  },
)

export const TileLayer = dynamic(
  async () => (await import('react-leaflet')).TileLayer,
  {
    ssr: false,
  },
)

export const Marker = dynamic(
  async () => (await import('react-leaflet')).Marker,
  {
    ssr: false,
  },
)
