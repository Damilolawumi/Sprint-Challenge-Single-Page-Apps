import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
margin: 20px;
width:250px;
box-shadow: 2px 2px 4px 2px;
`;
export default function CharacterCard(props) {
  return (
   <StyledDiv>
    <h2>{props.character.name}</h2>
    <h3>{props.character.specie}</h3>
    <h4>{props.character.gender}</h4>
  </StyledDiv>
  )
  
}
