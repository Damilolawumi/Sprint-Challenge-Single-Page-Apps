import React, { useState } from "react";
import { tsPropertySignature } from "@babel/types";

export default function SearchForm(props) {
 


  
  return (
    <section className="search-form">
      <form>
        <label>
          Search
          <input type='' name='search' 
          value={props.searchText}
          onChange={props.onSearch}
          />
        </label>
        </form>
     
    </section>
  );
}
