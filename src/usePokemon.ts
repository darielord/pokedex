import { type Pokemon } from "./types";

import { type ApiError } from "./types";

import { type RequestState } from "./types";

import { useState } from "react";

import { useEffect } from "react";

import { getPokemon } from "./getPokemon";

import { resultToState } from "./resultToState";

export function usePokemon(name: string): RequestState<Pokemon, ApiError> {
  const [state, setState] = useState<RequestState<Pokemon, ApiError>>({
    status: "idle",
  });

  useEffect(() => {
    if (name === "") {
      setState({ status: "idle" });
      return;
    }

    setState({ status: "loading" });

    const abort = new AbortController();

    getPokemon(name, abort.signal).then((Result) => {
      if (!abort.signal.aborted) {
        setState(resultToState(Result));
      }
    });

    return () => {
      abort.abort();
    };
  }, [name]);

  return state;
}
