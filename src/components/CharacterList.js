import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const StyledSection = styled.section`
display:flex;
flex-wrap: wrap;
`;



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
    <StyledSection className="character-list">

      {characters.map(newCharacter => {
        return (
          <CharacterCard character={newCharacter}/>
          
        )
      })}

    </StyledSection>
  );
}
