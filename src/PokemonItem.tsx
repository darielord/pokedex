import { usePokemon } from "./usePokemon";

import { renderState } from "./renderState";

export function PokemonItem(props: { name: string }) {
  const state = usePokemon(props.name);

  return <div className="PokemonItem">{renderState(state)}</div>;
}
