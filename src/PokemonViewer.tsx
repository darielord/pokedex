import { useState } from "react";

import { usePokemon } from "./usePokemon";

import { describeError } from "./describeError";

import { type RequestState } from "./types";

import { type Pokemon } from "./types";

import { type ApiError } from "./types";

export function renderState(request: RequestState<Pokemon, ApiError>) {
  switch (request.status) {
    case "idle":
      return <p> {"Escriba su nombre"} </p>;

    case "loading":
      return <p> {"Espera..."} </p>;

    case "success":
      return (
        <div>
          {request.data.name}
          {request.data.sprites.front_default && (
            <img
              src={request.data.sprites.front_default}
              alt={request.data.name}
            />
          )}
          <ul>
            {request.data.types.map((t) => {
              return <li key={t.slot}>{t.type.name}</li>;
            })}
          </ul>
        </div>
      );

    case "error":
      return <p> {describeError(request.error)} </p>;

    default:
      const pred: never = request;
      throw new Error("Estado desconocido");
  }
}

export function PokemonViewer() {
  const [texto, setTexto] = useState<string>("");

  const state = usePokemon(texto);

  return (
    <div className="PokemonView">
      <input
        value={texto}
        onChange={(event) => setTexto(event?.target.value)}
      ></input>

      {renderState(state)}
    </div>
  );
}
