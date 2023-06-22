'use client'

import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { useEffect, useRef, useState } from 'react'
import { Libre_Baskerville } from 'next/font/google'

const libreBaskerville = Libre_Baskerville({ subsets: ['latin'], weight: ['400', '700'] })

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleDk3OSIsImEiOiJjbGo2bDQ5c2MwZWN3M2VzMWMweXh5MGM2In0.ayglNS9UFxOcFENE_0pFqQ'

export default function MapGallery() {
  const [map, setMap] = useState<mapboxgl.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const testRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapContainerRef.current === null) return
    const map = new mapboxgl.Map({
      container: mapContainerRef.current, // container ID
      style: 'mapbox://styles/alex979/clj6looqk001o01pn0sd6c046', // style URL
      center: [-93.563, 55.957], // starting position [lng, lat]
      zoom: 3.55, // starting zoom
      interactive: false,
    })
    map.setPadding({ left: 300, top: 0, right: 0, bottom: 0 })
    setMap(map)

    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        map.easeTo({ center: [-83.591, 8.931], zoom: 7.75, duration: 2000, padding: { left: 0, top: 0, right: 300, bottom: 0 } })
      } else {
        map.easeTo({ center: [-93.563, 55.957], zoom: 3.55, duration: 2000, padding: { left: 300, top: 0, right: 0, bottom: 0 } })
      }
    });
    observer.observe(testRef.current!)

    return () => {
      observer.unobserve(testRef.current!);
      map.remove();
      setMap(null);
    }
  }, [])

  return (
    <div>
      <div className="w-full h-screen sticky top-0">
        <div ref={mapContainerRef} className="w-full h-full"></div>
      </div>
      <div className={"relative " + libreBaskerville.className} style={{ marginTop: '-100vh' }}>
        <div className="flex items-center h-screen">
          <div className="w-full md:max-w-xl m-5 md:m-14 bg-black bg-opacity-70 text-white p-5 md:p-8">
            <h1 className="text-2xl md:text-3xl text-center pb-2 md:pb-4">CANADA</h1>
            <p className="text-md md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center h-screen">
          <div ref={testRef} className="w-full md:max-w-xl m-5 md:m-14 bg-black bg-opacity-70 text-white p-5 md:p-8">
            <h1 className="text-2xl md:text-3xl text-center pb-2 md:pb-4">COSTA RICA</h1>
            <p className="text-md md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
