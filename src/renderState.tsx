import { describeError } from "./describeError";

import { type RequestState } from "./types";

import { type Pokemon } from "./types";

import { type ApiError } from "./types";

import { PokemonCard } from "./PokemonCard";

export function renderState(request: RequestState<Pokemon, ApiError>) {
  switch (request.status) {
    case "idle":
      return <p> {"Escriba su nombre"} </p>;

    case "loading":
      return <p> {"Espera..."} </p>;

    case "success":
      return <PokemonCard Pokemon={request.data} />;

    case "error":
      return <p> {describeError(request.error)} </p>;

    default:
      const pred: never = request;
      throw new Error(`Estado desconocido ${pred}`);
  }
}
