import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { profilesApi } from "../api/profiles";
import type { CreateProfileInput, UpdateProfileInput } from "../types/profile";

const PROFILES_KEY = ["profiles"] as const;

export function useProfiles() {
  return useQuery({
    queryKey: PROFILES_KEY,
    queryFn: profilesApi.getAll,
  });
}

export function useProfile(id: string) {
  return useQuery({
    queryKey: [...PROFILES_KEY, id],
    queryFn: () => profilesApi.getOne(id),
    enabled: !!id, // don't run if id is empty/undefined
  });
}

export function useCreateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateProfileInput) => profilesApi.create(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROFILES_KEY });
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UpdateProfileInput }) =>
      profilesApi.update(id, input),
    onSuccess: (updatedUser) => {
      // Update the single-user cache directly
      queryClient.setQueryData([...PROFILES_KEY, updatedUser.id], updatedUser);
      // Refetch the list
      queryClient.invalidateQueries({ queryKey: PROFILES_KEY });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => profilesApi.delete(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: PROFILES_KEY });
      queryClient.removeQueries({ queryKey: [...PROFILES_KEY, id] });
    },
  });
}
