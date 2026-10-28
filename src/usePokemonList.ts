import { useEffect, useState } from "react";
import { type PokemonList } from "./types";
import { type ApiError } from "./types";
import { getPokemonList } from "./getPokemonList";

import { type RequestState } from "./types";
import { resultToState } from "./resultToState";

export function usePokemonList(): RequestState<PokemonList, ApiError> {
  const [state, setState] = useState<RequestState<PokemonList, ApiError>>({
    status: "loading",
  });

  useEffect(() => {
    const abort = new AbortController();

    getPokemonList(abort.signal).then((Result) => {
      if (!abort.signal.aborted) {
        setState(resultToState(Result));
      }
    });
    return () => {
      abort.abort();
    };
  }, []);

  return state;
}
