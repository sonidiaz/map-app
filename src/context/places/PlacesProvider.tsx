import { useEffect, useReducer } from "react"
import { PlacesContext } from "./PlacesContext"
import { PlacesReducer } from "./PlacesReducers"
import { getUserLocation } from "../../helpers"
import { searchApi } from "../../apis"
import { Feature, PlacesResponse } from "../../interfaces/places"

export interface PlacesState {
  isLoading: boolean,
  userLocation?: [number, number],
  isLoadingPlaces: boolean,
  places: Feature[]
}

const INITAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: []
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(PlacesReducer, INITAL_STATE)
  useEffect(() => {
    getUserLocation().then((latlon) => {
      dispatch({
        type: "setUserLocation",
        payload: latlon
      })
    })
  
  }, [])

  const searchPlacesByTerm = async(query: string):Promise<Feature[]> => {
    if(query.length === 0) return []
    if(!state.userLocation) throw new Error("El usuario no se encuentra");
    dispatch({type: 'setLoadingPlaces'})
    const response = await searchApi<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(',')
      }
    })

    dispatch({
      type: 'setPlaces',
      payload: response.data.features
    })
    return response.data.features
  }
  
  return (
    <PlacesContext.Provider value={{
       ...state,
      searchPlacesByTerm
    }}>
      {children}
    </PlacesContext.Provider>
  )
}