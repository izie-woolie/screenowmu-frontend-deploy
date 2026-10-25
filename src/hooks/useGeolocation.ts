import { useCallback, useState } from "react";

type GeoStatus = "idle" | "requesting" | "granted" | "denied" | "unsupported";

interface Coords {
  lat: number;
  lng: number;
}

/**
 * Wraps the browser's Geolocation API. Requires HTTPS (or localhost) -
 * browsers block navigator.geolocation on plain HTTP.
 */
export function useGeolocation() {
  const [status, setStatus] = useState<GeoStatus>("idle");
  const [coords, setCoords] = useState<Coords | null>(null);

  const request = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setStatus("unsupported");
      return;
    }

    setStatus("requesting");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setStatus("granted");
      },
      () => {
        // Pengguna tolak kebenaran, atau GPS tidak tersedia/timeout.
        setStatus("denied");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }, []);

  return { status, coords, request, setCoords, setStatus };
}
