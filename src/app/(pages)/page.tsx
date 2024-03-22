import { GasStations } from '../components/gas-stations.component'
import { Map } from '../components/map.component'
import { MyLocation } from '../components/my-location.component'
import { Position } from '../components/position.component'
import { MapProvider } from '../providers/map.provider'

export default function Home() {
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
