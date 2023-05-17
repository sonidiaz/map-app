import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MapasApp from './MapasApp';

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoibmFjaG9kaWF6IiwiYSI6ImNsZ3l5d3VxbjBlbDgzcGp1dGg4czl5bHkifQ.qgPZfca-gc-gLuXQ3rtOPQ';

if(!navigator.geolocation) {
  alert('Tu navegador no tiene la opción de Geolocalización')
  throw new Error('Tu navegador no tiene la opción de Geolocalización')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MapasApp/>
  </React.StrictMode>,
)
