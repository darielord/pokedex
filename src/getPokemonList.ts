import { type ApiError } from "./types";

import { type Result } from "./types";

import { type PokemonList } from "./types";

import { isPokemonList } from "./guards";

export async function getPokemonList(
  signal: AbortSignal,
): Promise<Result<PokemonList, ApiError>> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`, {
      signal,
    });

    if (!response.ok) {
      return { ok: false, error: { kind: "http", status: response.status } };
    }

    const data: unknown = await response.json();

    if (isPokemonList(data)) {
      return { ok: true, data };
    }
    return { ok: false, error: { kind: "invalid-data", message: "Error" } };
  } catch {
    return { ok: false, error: { kind: "network" } };
  }
}
