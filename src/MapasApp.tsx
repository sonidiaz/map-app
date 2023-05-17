import { PlacesProvider } from "./context"
import {HomePage} from './Pages/';
import { MapProvider } from './context/map/MapProvider';


type Props = {}

export default function MapasApp({}: Props) {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomePage/>
      </MapProvider>
    </PlacesProvider>
  )
}