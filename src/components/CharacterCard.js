import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  return (
   <div>
    <h2>{props.character.name}</h2>
    <h3>{props.character.specie}</h3>
    <h4>{props.character.gender}</h4>
  </div>
  )
  
}
