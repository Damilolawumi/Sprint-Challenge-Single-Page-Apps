import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {


  const [characters, setCharacters] = useState([])

  useEffect(() => {

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results)
        console.log(response.data);
      })

  }, []);


  return (
    <section className="character-list">

      {characters.map(newCharacter => {
        return (
          <div>
            <h2>{newCharacter.name}</h2>
            <h3>{newCharacter.specie}</h3>
            <h4>{newCharacter.gender}</h4>
          </div>
        )
      })}

    </section>
  );
}
