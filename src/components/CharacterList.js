import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";


// imported styled components and styled the section that would be recieving the data from api
// so that they display flex
const StyledSection = styled.section`
display:flex;
flex-wrap: wrap;
`;



export default function CharacterList() {

  // Fetched a list of characters from the Rick and Morty API's Characters endpoint
  //  *`https://rickandmortyapi.com/api/character/`* and rendered them to the screen.


  //created a use state for characters
  const [characters, setCharacters] = useState([]);

  // created a useState for filteredcharacters
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  // created a usestate for searchtext
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

  // created a variable onSearchChange and passed a function that uses 
  //setSearchChange to change the state by targetting the value that is being typed
  const onSearchChange = (e) => {
    setSearchText(e.target.value)

    // set filteredCharacters to an empty array
    let filteredCharacters = [];

    //passed a method that goes into the character state and gets the text typed in by user,
    // then filters through the character array and compares the name of each character to that text.
    filteredCharacters = characters.filter(character => {
      return character.name.includes(e.target.value)
    })

    setFilteredCharacters(filteredCharacters)
  }

// created a variable and assigned the value of that to characters
  let charactersToShow = characters;
  if (searchText) {
    charactersToShow = filteredCharacters
  }
  return (
    <StyledSection className="character-list">

      {/* imported the SearchForm and passed in a prop on search */}
      <SearchForm onSearch={onSearchChange} searchText={searchText} />

      {charactersToShow.map(newCharacter => {
        return (

          <CharacterCard character={newCharacter} />

        )
      })}

    </StyledSection>
  );
}
