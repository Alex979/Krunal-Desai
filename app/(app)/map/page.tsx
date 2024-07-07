import { getAllSublocations } from "@/lib/locations";
import Map from "./Map";

export default async function MapPage() {
  const sublocations = await getAllSublocations();

  return (
    <main>
      <div className="absolute w-screen h-screen">
        <Map sublocations={sublocations} />
      </div>
    </main>
  );
}
