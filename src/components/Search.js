import React from "react";
import { Input } from "semantic-ui-react";

function Search({ search, onChangeSearch }) {

  function handleChange(event) {
    onChangeSearch(event.target.value)
  }

  return (
    <div className="ui search">
              <Input
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='search by name'
            value={search}
            onChange={handleChange}
  />
      </div>
    
  );
}

export default Search;
