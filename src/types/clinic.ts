export interface NearbyClinic {
  id: string;
  name: string;
  address: string | null;
  phone: string | null;
  latitude: number;
  longitude: number;
  distance_km: number;
  google_maps_url: string;
  waze_url: string;
}

export interface NearbyClinicsResponse {
  clinics: NearbyClinic[];
}
