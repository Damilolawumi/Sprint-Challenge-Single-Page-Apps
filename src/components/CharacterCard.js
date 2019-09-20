import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
display:flex;
flex-wrap: wrap;
`;

const StyledDiv = styled.div`
margin: 20px;
width:250px;
box-shadow: 2px 2px 4px 2px;
`;


export default function CharacterCard(props) {
  return (
    <StyledSection>
    <StyledDiv>
      <p> <h2>{props.character.name}</h2> </p>
      <p> <h3>{props.character.specie}</h3> </p>
      <p> <h4>{props.character.gender}</h4> </p>
    </StyledDiv>
    </StyledSection>
  )

}
