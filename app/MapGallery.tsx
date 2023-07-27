"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { Libre_Baskerville } from "next/font/google";
import MapSection from "./MapSection";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxleDk3OSIsImEiOiJjbGo2bDQ5c2MwZWN3M2VzMWMweXh5MGM2In0.ayglNS9UFxOcFENE_0pFqQ";

interface MapSection {
  title: string;
  description: string;
  latlong: [number, number];
  zoom: number;
}

const sections: MapSection[] = [
  {
    title: "CANADA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    latlong: [55.957, -93.563],
    zoom: 3.55,
  },
  {
    title: "COSTA RICA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    latlong: [8.931, -83.591],
    zoom: 7.75,
  },
];

export default function MapGallery() {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const focusMap = (latlong: [number, number], zoom: number) => {
    if (map === null) return;
    map.easeTo({
      center: [latlong[1], latlong[0]],
      zoom: zoom,
      duration: 2000,
    });
  };

  useEffect(() => {
    if (mapContainerRef.current === null) return;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current, // container ID
      style: "mapbox://styles/alex979/clj6looqk001o01pn0sd6c046", // style URL
      center: [sections[0].latlong[1], sections[0].latlong[0]], // starting position [lng, lat]
      zoom: sections[0].zoom, // starting zoom
      interactive: false,
    });
    setMap(map);

    return () => {
      map.remove();
      setMap(null);
    };
  }, []);

  return (
    <div>
      <div className="w-full h-screen sticky top-0">
        <div ref={mapContainerRef} className="w-full h-full"></div>
      </div>
      <div className="relative" style={{ marginTop: "-100vh" }}>
        {sections.map((item, index) => {
          return (
            <MapSection
              key={index}
              title={item.title}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              onEnter={() => focusMap(item.latlong, item.zoom)}
              onLeave={() => {
                if (index > 0) {
                  focusMap(
                    sections[index - 1].latlong,
                    sections[index - 1].zoom
                  );
                }
              }}
              latlong={item.latlong}
              zoom={item.zoom}
              map={map}
            />
          );
        })}
      </div>
    </div>
  );
}
