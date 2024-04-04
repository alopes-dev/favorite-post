'use client'

import { useMemo } from 'react'
import { checkFavoritePost } from '../mocks/checkFavoritePost'
import { MapProvider } from '../providers/map.provider'
import FavoritePostListPage from './favorite.component'
import { GasStations } from './gas-stations.component'

import { Map } from './map.component'
import { MyLocation } from './my-location.component'
import { Position } from './position.component'

export default function Home() {
  const hasPostoFavorito = useMemo(
    () => checkFavoritePost().PostoFavoritoID,
    [],
  )

  if (!hasPostoFavorito) return <FavoritePostListPage />

  return (
    <Map>
      <MapProvider initOnUserPosition>
        <MyLocation />

        <Position />

        <GasStations />
      </MapProvider>
    </Map>
  )
}
