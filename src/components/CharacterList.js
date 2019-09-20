import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const StyledSection = styled.section`
display:flex;
flex-wrap: wrap;
`;



export default function CharacterList() {


  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  let [searchText, setSearchText] = useState('');
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

  const onSearchChange = (e) => {
    setSearchText(e.target.value)
    let filteredCharacters = [];

    filteredCharacters = characters.filter(character => {
      return character.name.includes( e.target.value)
    })

    setFilteredCharacters(filteredCharacters)
  }

  let charactersToShow = characters;
  if(searchText){
    charactersToShow = filteredCharacters
  }
  return (
    <StyledSection className="character-list">
      <SearchForm onSearch={onSearchChange} searchText={searchText} />

      {charactersToShow.map(newCharacter => {
        return (
          <CharacterCard character={newCharacter} />

        )
      })}

    </StyledSection>
  );
}
