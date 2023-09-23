type Coordinate = [number, number];

function toRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

function toDegrees(radians: number) {
  return (radians * 180) / Math.PI;
}

export function haversineDistance(coord1: Coordinate, coord2: Coordinate) {
  const R = 6371; // Radius of the Earth in kilometers
  const lat1 = toRadians(coord1[1]);
  const lon1 = toRadians(coord1[0]);
  const lat2 = toRadians(coord2[1]);
  const lon2 = toRadians(coord2[0]);

  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in kilometers
}

export function calculateCentroid(coordinates: Coordinate[]): Coordinate {
  if (coordinates.length === 0) return [0, 0];

  let x = 0;
  let y = 0;
  let z = 0;

  coordinates.forEach(coord => {
    const lng = toRadians(coord[0]);
    const lat = toRadians(coord[1]);

    x += Math.cos(lat) * Math.cos(lng);
    y += Math.cos(lat) * Math.sin(lng);
    z += Math.sin(lat);
  });

  x /= coordinates.length;
  y /= coordinates.length;
  z /= coordinates.length;

  const lng = toDegrees(Math.atan2(y, x));
  const hyp = Math.sqrt(x * x + y * y);
  const lat = toDegrees(Math.atan2(z, hyp));

  return [lng, lat];
}