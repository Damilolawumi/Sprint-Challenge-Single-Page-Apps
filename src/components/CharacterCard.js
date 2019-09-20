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

const StyledParagraph = styled.p`
text-align: center;
`;

const StyledImage = styled.img`
width: 250px;
height: fit-content;
`;
export default function CharacterCard(props) {
  return (
    <StyledSection>
      <StyledDiv>

        <StyledParagraph> <h2>{props.character.name}</h2> </StyledParagraph>
        <StyledParagraph> <h3>{props.character.specie}</h3> </StyledParagraph>
        <StyledParagraph> <h4>{props.character.gender}</h4> </StyledParagraph>
        <StyledParagraph> <h4>{props.character.type}</h4> </StyledParagraph>
        <StyledImage src={props.character.image} />

      </StyledDiv>
    </StyledSection>
  )

}
