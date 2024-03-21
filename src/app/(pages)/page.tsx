import { GasStations } from '../components/gas-stations'
import { Map } from '../components/map.component'

export default function Home() {
  return (
    <main className="w-full h-full">
      <Map>
        <GasStations />
      </Map>
    </main>
  )
}
