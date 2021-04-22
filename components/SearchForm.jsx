import { useState } from "react";

export const SearchForm = () => {
  const [formInputs, setformInputs] = useState({});

  const handleInputs = (event) => {
    let { name, value } = event.target;
    setformInputs({ ...formInputs, [name]: value });
  };

const search = async (event) => {
  event.preventDefault();
  const results = await fetch(`https://api.giphy.com/v1/gifs/search?q=${formInputs.searchTerm}&api_key=yc30iaHwatuELqBgZqHKILNueRJu7tWN&limit=10`)
  const glyphs = await results.json();
  console.log(glyphs)
}

  return (
    <form onSubmit={search}>
      <input name="searchTerm" onChange={handleInputs} type="text" />
      <button type="submit">Search</button>
    </form>
  );
};
