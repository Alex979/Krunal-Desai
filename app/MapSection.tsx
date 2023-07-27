import { Libre_Baskerville } from "next/font/google";
import mapboxgl from "mapbox-gl";
import { useRef, useEffect } from "react";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function MapSection({
  title,
  description,
  onEnter,
  onLeave,
  latlong,
  zoom,
  map
}: {
  title: string;
  description: string;
  onEnter: () => void;
  onLeave: () => void;
  latlong: [number, number];
  zoom: number;
  map: mapboxgl.Map | null;
}) {
  const infographRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (map === null || infographRef.current === null) return;

    const infographDiv = infographRef.current;

    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        onEnter();
      } else {
        if (entries[0].boundingClientRect.top >= window.innerHeight) {
          onLeave();
        }
      }
    }, {threshold: 0.5});
    observer.observe(infographDiv);

    return () => {
      observer.unobserve(infographDiv);
    };
  }, [map, onEnter, onLeave]);

  return (
    <div className={"flex items-center h-screen " + libreBaskerville.className}>
      <div className="w-full md:max-w-xl m-5 md:m-14 bg-black bg-opacity-70 text-white p-5 md:p-8 rounded" ref={infographRef}>
        <h1 className="text-2xl md:text-3xl text-center pb-2 md:pb-4">
          {title}
        </h1>
        <p className="text-md md:text-lg">{description}</p>
      </div>
    </div>
  );
}
