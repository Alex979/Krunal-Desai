"use client";

/// <reference types="geojson" />

import mapboxgl from "mapbox-gl";
import { useState, useRef, useEffect } from "react";
import MapMarker from "./MapMarker";
import { createRoot } from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import banff from "./thumbnails/banff.jpg";
import chitwan from "./thumbnails/chitwan.jpg";
import arenal from "./thumbnails/arenal.jpg";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxleDk3OSIsImEiOiJjbGo2bDQ5c2MwZWN3M2VzMWMweXh5MGM2In0.ayglNS9UFxOcFENE_0pFqQ";

const geojson: GeoJSON.FeatureCollection<GeoJSON.Point> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        thumbnail: banff
      },
      geometry: {
        type: "Point",
        coordinates: [51.178, -115.571],
      },
    },
    {
      type: "Feature",
      properties: {
        thumbnail: chitwan
      },
      geometry: {
        type: "Point",
        coordinates: [27.578, 84.494],
      },
    },
    {
      type: "Feature",
      properties: {
        thumbnail: arenal
      },
      geometry: {
        type: "Point",
        coordinates: [10.462, -84.703],
      },
    }
  ],
};


export default function Map() {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainerRef.current === null) return;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current, // container ID
      style: "mapbox://styles/alex979/clj6looqk001o01pn0sd6c046", // style URL
    });

    map.on("load", () => loadMap(map));
    setMap(map);

    return () => {
      map.remove();
    };
  }, []);

  const loadMap = (map: mapboxgl.Map) => {
    for (const marker of geojson.features) {
      const el = document.createElement("div");
      const root = createRoot(el);
      root.render(<MapMarker thumbnail={marker.properties.thumbnail} />);

      const mapMarker = new mapboxgl.Marker(el)
        .setLngLat([
          marker.geometry.coordinates[1],
          marker.geometry.coordinates[0],
        ])
        .addTo(map);

      mapMarker.on('remove', () => {
        root.unmount();
      })
    }
  };

  return (
    <main>
      <div className="absolute w-screen h-screen" ref={mapContainerRef}></div>
      {/* <div className="absolute top-5 bottom-0 left-0 right-0 bg-white"></div> */}
    </main>
  );
}
