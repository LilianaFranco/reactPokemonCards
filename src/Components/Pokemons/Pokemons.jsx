import pokemonsJson from "../../../pokemons.json";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export const Pokemons = ({ type }) => {
  let pokemonByType = pokemonsJson[type];

  return (
    <>
      {pokemonByType.map((element) => {
        return <PokemonCard element={element} key={element.id} />;
      })}
    </>
  );
};
