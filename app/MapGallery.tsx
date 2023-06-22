'use client'

import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { useEffect, useRef, useState } from 'react'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleDk3OSIsImEiOiJjbGo2bDQ5c2MwZWN3M2VzMWMweXh5MGM2In0.ayglNS9UFxOcFENE_0pFqQ'

export default function MapGallery() {
  const [map, setMap] = useState<mapboxgl.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapContainerRef.current === null) return
    const map = new mapboxgl.Map({
      container: mapContainerRef.current, // container ID
      style: 'mapbox://styles/alex979/clj6looqk001o01pn0sd6c046', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    })
    setMap(map)

    return () => {
      map.remove();
      setMap(null); 
    }
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div ref={mapContainerRef} className="w-1/2 h-1/2"></div>
    </div>
  )
}
