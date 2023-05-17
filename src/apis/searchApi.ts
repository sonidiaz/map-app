import axios from 'axios'

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    lenguage: 'es',
    access_token: 'pk.eyJ1IjoibmFjaG9kaWF6IiwiYSI6ImNsZ3l5d3VxbjBlbDgzcGp1dGg4czl5bHkifQ.qgPZfca-gc-gLuXQ3rtOPQ'
  }
})

export default searchApi