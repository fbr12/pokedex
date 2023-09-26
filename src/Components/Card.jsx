import { useEffect, useState } from "react";
import "./Card.css";

function Card() {
  const [pokemonData, setPokemonData] = useState([]);
  const pokemonApi = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  useEffect(() => {
    fetch(pokemonApi)
      .then((response) => response.json())
      .then((data) => setPokemonData(data.results));
  });

  return (
    <>
      {pokemonData.map((pokemon, index) => {
        return (
          <div className="card" key={index}>
            <h2 className="pokemonName">{pokemon.name}</h2>
            <img
              className="pokemonImg"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`}
              alt={pokemon.name}
            />
          </div>
        );
      })}
    </>
  );
}
export { Card };
