import { getLocations } from "@/lib/locations";
import Map from "./Map";

export default async function MapPage() {
  const locations = await getLocations();

  return (
    <main>
      <div className="absolute w-screen h-screen">
        <Map locations={locations} />
      </div>
    </main>
  );
}
