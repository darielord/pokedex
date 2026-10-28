import { useState } from "react";

import { usePokemon } from "./usePokemon";
import { renderState } from "./renderState";

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
