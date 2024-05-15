import React from 'react'
import styles from './Map.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Map() {
  const [searchParams,setSerachParams] = useSearchParams();
  const navigate = useNavigate()
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng")
  return (
    <div className={styles.mapContainer} onClick={()=> navigate("form")}>Map {lat} {lng} <button onClick={()=> setSerachParams({lat:23,lng:43})}>change </button></div>
  )
}

export default Map