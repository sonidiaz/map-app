import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../context"

export const SearchBar = () => {
  const {searchPlacesByTerm } = useContext(PlacesContext)
  const deboundRef = useRef<Node.JS.Timeout>()


  const onQueryCanged = (event: ChangeEvent<HTMLInputElement>) => {
    if(deboundRef.current)
      clearTimeout(deboundRef.current)
    
      deboundRef.current = setTimeout(() => {
        searchPlacesByTerm(event.target.value)
      },350)
  }

  return (
    <div className="search-container">
      <input 
        type="text" 
        className="form-control" 
        placeholder="buca un lugar..."
        onChange={onQueryCanged}/>
    </div>
  )
}
