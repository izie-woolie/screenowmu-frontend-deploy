import { useMutation } from "@tanstack/react-query";
import { screeningsApi } from "../api/screenings";
import type { CreateScreeningInput } from "../types/survey";

export function useCreateScreening() {
  return useMutation({
    mutationFn: (input: CreateScreeningInput) => screeningsApi.create(input),
  });
}
