import axios from "axios";

// Set VITE_API_URL in .env (see .env.example). Falls back to the local dev URL.
export const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ?? "http://screenowmu-api.test/api",
  headers: { Accept: "application/json" },
});
