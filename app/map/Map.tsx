"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { Location } from "@/lib/locations";
import { createRoot } from "react-dom/client";
import MapMarker from "./MapMarker";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxleDk3OSIsImEiOiJjbGo2bDQ5c2MwZWN3M2VzMWMweXh5MGM2In0.ayglNS9UFxOcFENE_0pFqQ";

interface MapProps {
  locations: Location[];
}

export default function Map({ locations }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainerRef.current === null) return;

    const loadMap = (map: mapboxgl.Map) => {
      for (const location of locations) {
        const el = document.createElement("div");
        const root = createRoot(el);
        root.render(<MapMarker location={location} />);

        const mapMarker = new mapboxgl.Marker(el)
          .setLngLat([
            location.coordinates.coordinates[0],
            location.coordinates.coordinates[1],
          ])
          .addTo(map);

        mapMarker.on("remove", () => {
          root.unmount();
        });
      }
    };

    const map = new mapboxgl.Map({
      container: mapContainerRef.current, // container ID
      style: "mapbox://styles/alex979/clj6looqk001o01pn0sd6c046", // style URL
    });

    map.on("load", () => loadMap(map));

    return () => {
      map.remove();
    };
  }, [locations]);

  return <div className="w-full h-full" ref={mapContainerRef}></div>;
}