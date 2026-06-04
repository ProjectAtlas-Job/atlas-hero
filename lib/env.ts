export function getPublicApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";
}

export function getAppBaseUrl(): string {
  return process.env.NEXT_PUBLIC_APP_BASE_URL ?? "http://localhost:3000";
}
