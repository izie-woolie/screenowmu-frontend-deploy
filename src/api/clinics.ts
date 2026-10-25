import { api } from "./client";
import type { NearbyClinicsResponse } from "../types/clinic";

export const clinicsApi = {
  nearby: async (
    lat: number,
    lng: number,
    limit = 10
  ): Promise<NearbyClinicsResponse> => {
    const { data } = await api.get<NearbyClinicsResponse>("/clinics/nearby", {
      params: { lat, lng, limit },
    });
    return data;
  },
};
