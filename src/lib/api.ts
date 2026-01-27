const API_BASE_URL = "/api";
const DEFAULT_HEADERS = {
  Accept: "application/json",
} as const;

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

async function fetchJson<T>(
  url: string,
  options: RequestInit,
  context: string
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...DEFAULT_HEADERS,
          ...(options.headers ?? {}),
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(
          `${context} failed with ${response.status}: ${body.slice(0, 200)}`
        );
      }

      return (await response.json()) as T;
    } catch (error) {
      lastError = error;

      if (error instanceof Error && error.name === 'AbortError') {
        console.error(`${context} attempt ${attempt} timed out after 30s`);
      } else {
        console.error(`${context} attempt ${attempt} failed:`, error);
      }

      if (attempt < 2) {
        await sleep(1000);
        continue;
      }
    } finally {
      clearTimeout(timeout);
    }
  }

  let errorMessage = "Unknown error";
  if (lastError instanceof Error) {
    if (lastError.name === 'AbortError') {
      errorMessage = "Request timed out. The server is taking too long to respond.";
    } else {
      errorMessage = lastError.message;
    }
  } else {
    errorMessage = String(lastError);
  }

  console.error(`${context} failed after 2 attempts:`, errorMessage);
  throw new Error(`${context} failed: ${errorMessage}`);
}

export interface RegistrationData {
  name: string;
  state_country: string;
  role: "Instructor" | "Lead-Reader" | "Student";
  gender: "male" | "female";
  level: "beginner" | "intermediate" | "advanced";
  preferred_language: string;
  whatsapp_number: string;
}

export interface Registration extends RegistrationData {
  id: number;
  created_at: string;
}

export interface ApiResponse<T> {
  data: T;
}

export async function createRegistration(
  data: RegistrationData
): Promise<Registration> {
  const result = await fetchJson<ApiResponse<Registration>>(
    `${API_BASE_URL}/registrations`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
    "Create registration"
  );

  return result.data;
}

export async function getRegistrations(): Promise<Registration[]> {
  const result = await fetchJson<ApiResponse<Registration[]>>(
    `${API_BASE_URL}/registrations`,
    {
      cache: "no-store",
    },
    "Fetch registrations"
  );

  return result.data;
}
