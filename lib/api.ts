import axios from "axios";

import { getPublicApiBaseUrl } from "@/lib/env";

export const api = axios.create({
  baseURL: getPublicApiBaseUrl(),
  withCredentials: true,
});
