import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";

function Form() {
  const { searchQuery, setSearchQuery, perPage, setPerPage, setPageCount } =
    useContext(Context);

  const [inputText, setInputText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(inputText);
    setPageCount(1);
    setInputText("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="search">
        <label htmlFor="search">Search:</label>
        <input
          name="search"
          id="search"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        {inputText.length > 0 ? (
          <button>Submit</button>
        ) : (
          <button disabled>Submit</button>
        )}
      </div>
      <div className="per-page">
        <label htmlFor="per_page">Results per page:</label>
        <select
          name="perPage"
          id="per_page"
          value={perPage}
          onChange={(e) => setPerPage(parseInt(e.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      <div className="results">
        {searchQuery === "" ? (
          <p>Currently Viewing Featured Photos</p>
        ) : (
          <p>Showing Results for: "{searchQuery}"</p>
        )}
        {searchQuery && <button>Clear Results</button>}
      </div>
    </form>
  );
}

export default Form;
