import { api } from "./client";
import type {
  Profile,
  CreateProfileInput,
  CreateProfileResponse,
  UpdateProfileInput,
} from "../types/profile";

export const profilesApi = {
  getAll: async (): Promise<Profile[]> => {
    const { data } = await api.get<Profile[]>("/profiles");
    return data;
  },

  getOne: async (id: string): Promise<Profile> => {
    const { data } = await api.get<Profile>(`/profiles/${id}`);
    return data;
  },

  create: async (input: CreateProfileInput): Promise<CreateProfileResponse> => {
    const { data } = await api.post<CreateProfileResponse>("/profiles", input);
    return data;
  },

  update: async (id: string, input: UpdateProfileInput): Promise<Profile> => {
    const { data } = await api.put<Profile>(`/profiles/${id}`, input);
    return data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/profiles/${id}`);
  },
};
