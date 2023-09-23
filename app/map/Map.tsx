"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { SublocationWithLocationSlug } from "@/lib/locations";
import { createRoot } from "react-dom/client";
import { haversineDistance, calculateCentroid } from "@/lib/map-utils";
import MapMarker from "./MapMarker";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxleDk3OSIsImEiOiJjbGo2bDQ5c2MwZWN3M2VzMWMweXh5MGM2In0.ayglNS9UFxOcFENE_0pFqQ";

interface MapProps {
  sublocations: SublocationWithLocationSlug[];
}

interface MarkerWithSlug {
  marker: mapboxgl.Marker;
  slug: string;
  onRemove?: () => void;
}

export default function Map({ sublocations }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<MarkerWithSlug[]>([]);
  const zoomRef = useRef<number>(0);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/alex979/clj6looqk001o01pn0sd6c046",
      });

      mapRef.current.on("load", () => {
        if (!mapRef.current) return;
        zoomRef.current = mapRef.current.getZoom();
        updateMarkers(sublocations, mapRef.current);
      });

      mapRef.current.on("zoom", () => {
        if (!mapRef.current) return;
        if (Math.abs(zoomRef.current - mapRef.current.getZoom()) > 0.5) {
          zoomRef.current = mapRef.current.getZoom();
          updateMarkers(sublocations, mapRef.current);
        }
      });
    } else {
      updateMarkers(sublocations, mapRef.current);
    }

    return () => {
      mapRef.current?.remove();
    };
  }, [sublocations]);

  const updateMarkers = (
    sublocations: SublocationWithLocationSlug[],
    map: mapboxgl.Map
  ) => {
    const clusters = generateClusters(
      sublocations,
      3000 / Math.pow(2, map.getZoom() - 1)
    );
    const clustersSet = new Set<string>();
    clusters.forEach((cluster) => {
      clustersSet.add(cluster.locationSlug + cluster.slug);
    });

    // Remove existing markers that are not in the new cluster group.
    markersRef.current = markersRef.current.filter((marker) => {
      if (clustersSet.has(marker.slug)) {
        clustersSet.delete(marker.slug);
        return true;
      }
      marker.marker.remove();
      if (marker.onRemove) marker.onRemove();
      return false;
    });

    // Add new markers.
    clusters.forEach((sublocation) => {
      if (!clustersSet.has(sublocation.locationSlug + sublocation.slug)) return;

      const el = document.createElement("div");
      const root = createRoot(el);
      root.render(<MapMarker sublocation={sublocation} />);

      const marker = new mapboxgl.Marker(el)
        .setLngLat(sublocation.coordinates)
        .addTo(map);

      markersRef.current.push({
        marker,
        slug: sublocation.locationSlug + sublocation.slug,
        onRemove: () => {
          root.unmount();
        }
      });
    });
  };

  return <div className="w-full h-full" ref={mapContainerRef}></div>;
}

function generateClusters(
  sublocations: SublocationWithLocationSlug[],
  minDistKm: number
): SublocationWithLocationSlug[] {
  // Peform DBSCAN clustering on sublocations.
  const visited = new Set<number>();
  const clusters: SublocationWithLocationSlug[] = [];

  sublocations.forEach((sublocation, index) => {
    if (visited.has(index)) return;

    visited.add(index);

    const neighbors = findUnclusteredNeighbors(
      sublocations,
      index,
      minDistKm,
      visited
    );

    if (neighbors.length > 0) {
      // Create cluster.
      clusters.push(createCluster(sublocations, index, neighbors, visited));
    } else {
      clusters.push(sublocation);
    }
  });

  return clusters;
}

function findUnclusteredNeighbors(
  sublocations: SublocationWithLocationSlug[],
  index: number,
  epsilonKm: number,
  visited: Set<number>
): number[] {
  const neighbors: number[] = [];

  for (let i = 0; i < sublocations.length; i++) {
    if (i === index || visited.has(i)) continue;

    const distance = haversineDistance(
      sublocations[index].coordinates,
      sublocations[i].coordinates
    );
    if (distance <= epsilonKm) {
      neighbors.push(i);
    }
  }

  return neighbors;
}

function createCluster(
  sublocations: SublocationWithLocationSlug[],
  index: number,
  neighbors: number[],
  visited: Set<number>
): SublocationWithLocationSlug {
  neighbors.forEach((neighborIndex) => {
    if (!visited.has(neighborIndex)) {
      visited.add(neighborIndex);
    }
  });
  return sublocations[index];
}
