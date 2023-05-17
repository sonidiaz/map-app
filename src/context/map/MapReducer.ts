import { Map } from "mapbox-gl"
import { MapState } from "./MapProvider"

type MapAction = {type : 'setmap', payload: Map}

export const MapReducer = (state:MapState, action: MapAction):MapState => {

  switch (action.type) {
    case "setmap":
      return {
        ...state,
        isMapReady: true,
        map: action.payload
      }
     
    default:
      return state
  }

}