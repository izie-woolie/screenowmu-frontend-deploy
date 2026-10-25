import { isAxiosError } from "axios";

/**
 * Turn any error thrown by an API call into a message that is safe and
 * useful to show the user (Bahasa Malaysia).
 */
export function getApiErrorMessage(error: unknown): string {
  if (isAxiosError(error)) {
    // No response at all -> network / server down / CORS
    if (!error.response) {
      return "Tidak dapat berhubung dengan pelayan. Sila semak sambungan internet anda dan cuba lagi.";
    }

    const { status, data } = error.response;

    // Laravel validation error (422): { message, errors: { field: [msg] } }
    if (status === 422) {
      const errors = data?.errors as Record<string, string[]> | undefined;
      const first = errors ? Object.values(errors)[0]?.[0] : undefined;
      return first ?? data?.message ?? "Maklumat yang dihantar tidak sah.";
    }

    if (status >= 500) {
      return "Berlaku masalah pada pelayan. Sila cuba sebentar lagi.";
    }
  }

  return "Sesuatu tidak kena. Sila cuba lagi.";
}
