import React from "react";
import { Pokemons } from "./Pokemons";

export const PokemonList = () => {
  return (
    <div>
      <li>
        <Pokemons type="water" />
      </li>
    </div>
  );
};
