import type { ApiError } from "./types";
import { type Result } from "./types";

export async function fetchPokemon(
  name: string,
): Promise<Result<unknown, ApiError>> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
      return { ok: false, error: { kind: "http", status: response.status } };
    }

    const data: unknown = await response.json();

    return { ok: true, data };
  } catch {
    return { ok: false, error: { kind: "network" } };
  }
}
