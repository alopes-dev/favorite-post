import { useContext } from 'react'
import { MapContext } from '../providers/map.provider'

export const useMap = () => {
  const mapValues = useContext(MapContext)

  if (!mapValues)
    throw Error(
      "Can't get map values. Please make sure your app is under MapProvider",
    )

  return mapValues
}
