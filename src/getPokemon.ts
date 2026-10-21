import { isPokemon } from "./guards";
import { fetchPokemon } from "./fetchPokemon";

import { type Result } from "./types";

import type { ApiError } from "./types";

import { type Pokemon } from "./types";

export async function getPokemon(
  name: string,
): Promise<Result<Pokemon, ApiError>> {
  const response = await fetchPokemon(name);

  if (!response.ok) {
    return response;
  } else if (isPokemon(response.data)) {
    return { ok: true, data: response.data };
  } else {
    return {
      ok: false,
      error: {
        kind: "invalid-data",
        message: "NO TIENE FORMA DE  POKEMON",
      },
    };
  }
}
