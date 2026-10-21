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

    let cancelled = false;

    getPokemon(name).then((Result) => {
      if (!cancelled) {
        setState(resultToState(Result));
      }
    });

    return () => {
      cancelled = true;
    };
  }, [name]);

  return state;
}
