import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"

export const BtnMyLocation = () => {
  const {isMapReady, map} = useContext(MapContext)
  const {userLocation} = useContext(PlacesContext)
  
  const onClick = () => {
    if(!isMapReady) throw new Error('El mapa no esta listo')
    if(!userLocation) throw new Error('NO hay ubicacion del user')

    map?.flyTo({
      center: userLocation,
      zoom: 15
    })
  }
  return (
    <div onClick={onClick} className="btn btn-primary" style={{
      position: 'fixed',
      top: "20px",
      right: '20px',
      zIndex: 9000
    }}>Mi ubicación</div>
  )
}
