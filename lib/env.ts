export function getPublicApiBaseUrl(): string {
  const value = process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.NEXT_PUBLIC_API_URL;
  if (!value) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not configured.");
  }
  return value.replace(/\/+$/, "");
}

export function getAppBaseUrl(): string {
  const value = process.env.NEXT_PUBLIC_APP_BASE_URL ?? process.env.NEXT_PUBLIC_APP_URL;
  if (!value) {
    throw new Error("NEXT_PUBLIC_APP_BASE_URL is not configured.");
  }
  return value.replace(/\/+$/, "");
}
