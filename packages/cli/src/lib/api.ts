import fetch from "node-fetch";

const API_URL = process.env.SHIM_API_URL || "https://shim.kkga.me/api";

export interface ApiResponse {
  files: Array<{
    path: string;
    content: string;
  }>;
  dependencies?: string[];
}

export async function fetchComponent(name: string): Promise<ApiResponse> {
  const response = await fetch(`${API_URL}/registry/${name}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch component ${name}: ${response.status}`);
  }

  return (await response.json()) as ApiResponse;
}

export async function fetchUtilities(): Promise<ApiResponse> {
  const response = await fetch(`${API_URL}/utils`);

  if (!response.ok) {
    throw new Error(`Failed to fetch utilities: ${response.status}`);
  }

  return (await response.json()) as ApiResponse;
}

export async function fetchCSS(): Promise<ApiResponse> {
  const response = await fetch(`${API_URL}/css`);

  if (!response.ok) {
    throw new Error(`Failed to fetch CSS files: ${response.status}`);
  }

  return (await response.json()) as ApiResponse;
}
