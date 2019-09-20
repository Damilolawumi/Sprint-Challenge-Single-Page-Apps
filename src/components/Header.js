import React from "react";
import {Link }from "react-router-dom";
import styled from "styled-components";




export default function Header() {


  return (

    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      
      <Link to="/" ><div>Home</div></Link>
      <Link to="/characters" > <div>Characters</div></Link>
      
    </header>
  );
}
