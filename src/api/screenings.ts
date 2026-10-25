import { api } from "./client";
import type {
  CreateScreeningInput,
  CreateScreeningResponse,
} from "../types/survey";

export const screeningsApi = {
  create: async (
    input: CreateScreeningInput
  ): Promise<CreateScreeningResponse> => {
    const { data } = await api.post<CreateScreeningResponse>(
      "/screenings",
      input
    );
    return data;
  },
};
