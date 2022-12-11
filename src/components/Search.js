import React from "react";

function Search({ search, onChangeSearch }) {
  //function to handle the onchange in input
//set the state and pass it back up to parent component
  function handleChange(event) {
    onChangeSearch(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
