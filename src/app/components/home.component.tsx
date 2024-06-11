'use client'

import { useCallback, useEffect, useMemo } from 'react'
import { checkFavoritePost } from '../mocks/checkFavoritePost'
import { MapProvider } from '../providers/map.provider'
import FavoritePostListPage from './favorite.component'
import { GasStations } from './gas-stations.component'

import { Map } from './map.component'
import { MyLocation } from './my-location.component'
import { Position } from './position.component'
import { getAllPosts } from '../services/get-all-posts'

export default function Home() {
  const hasPostoFavorito = useMemo(
    () => checkFavoritePost().PostoFavoritoID,
    [],
  )

  const getSome = useCallback(async () => {
    await getAllPosts()
  }, [])

  useEffect(() => {
    getSome()
  }, [getSome])

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
