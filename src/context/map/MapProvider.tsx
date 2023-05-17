import { Map, Marker, Popup } from "mapbox-gl"
import { useEffect, useReducer, useState } from 'react';
import { MapContext } from "./MapContext"
import { MapReducer } from "./MapReducer";
import {dataMonitor} from '../../apis'
export interface MapState {
  isMapReady: boolean,
  map?: Map
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE)
  const [monitor, setMonitor] = useState(dataMonitor)

  const setMap = (map: Map) => {
    const myLocationPopups = new Popup().setHTML(`<h4>Aqui estoy</h4><p>En algun lugar del mundo</p>`)
    new Marker({
      color: "61DAFB"
    })
    .setLngLat(map.getCenter())
    .addTo(map)
    .setPopup(myLocationPopups)
    dispatch({type: "setmap", payload: map})
  }

  useEffect(() => {
      console.log(monitor)
  }, [])

  return (
    <MapContext.Provider value={{
      ...state,
      setMap
    }}>{children}</MapContext.Provider>
  )
}



