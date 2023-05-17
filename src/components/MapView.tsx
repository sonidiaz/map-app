import { useContext, useLayoutEffect, useRef } from "react"
import { MapContext, PlacesContext } from "../context"
import { Loading } from "."
import mapboxgl from "mapbox-gl"
import { BtnMyLocation } from './BtnMyLocation';
import { SearchBar } from './SearchBar';

export const MapView = () => {
  const {isLoading, userLocation} = useContext(PlacesContext)
  const {setMap} = useContext(MapContext)
  const mapDiv = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if(!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
        });
        setMap(map)
    }
  }, [isLoading])

  if(isLoading) return <Loading/>
  
  return (  
    <div ref={mapDiv} style={{
      background: "red",
      height: "100vh",
      width: "100vw",
      position: "fixed",
      top: 0,
      left: 0

    }}>
      {
        userLocation?.join(',')
      }
      <BtnMyLocation/>
      <SearchBar/>
    </div>
  )
}
