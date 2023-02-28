import React from "react";
import { Pokemons } from "./Pokemons";

export const PokemonList = () => {
  let type = "fire";

  return (
    <>
      <li>
        <Pokemons type={type} />
      </li>
    </>
  );
};
