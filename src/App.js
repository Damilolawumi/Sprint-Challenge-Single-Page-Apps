import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";

import CharacterList from "./components/CharacterList";


export default function App() {


  return (
    <main>
      <Header />
      <CharacterList />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/LocationCard' component={LocationCard} />
      <Route path='/CharacterCard' component={CharacterCard} />



    </main>
  );
}
