import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
// import { SearchForm } from "../components/SearchForm";
import { GiphyResults } from "../components/GiphyResults";
import Footer from "../components/Footer"
import Image from "next/image"





export default function IndexPage({ catGiphys }) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("cats");
  const [formInputs, setformInputs] = useState({} as any);

  const handleInputs = (event) => {
    let { name, value } = event.target;
    setformInputs({ ...formInputs, [name]: value });
  };

  useEffect(() => {
    setSearchResults(catGiphys);
  }, [catGiphys]);

  const search = async (event) => {
    event.preventDefault();
    const results = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${formInputs.searchTerm}&api_key=yc30iaHwatuELqBgZqHKILNueRJu7tWN&limit=10`
    );
    const glyphs = await results.json();
    setSearchTerm(formInputs.searchTerm);
    setSearchResults(glyphs);
  };

  return (
    <>
      <Head>
        <title>Giphy Search app</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <h1>Giphy Search App</h1>
<div className="logo-container">
    <Image src="/logo.png"
           alt="logo"
           width="201" 
height="250"
           />
  </div>
      <div>
        Share this search with others:
        <Link href="/search/[pid]" as={`/search/${searchTerm}`}>
          <a>{`Search for ${searchTerm}`}</a>
        </Link>
      </div>
      <form onSubmit={search}>
        <input name="searchTerm" onChange={handleInputs} type="text" />
        <button type="submit">Search</button>
      </form>
      <h3>search results for {searchTerm}</h3>
      <GiphyResults giphys={searchResults} />
     
<Footer/>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/search?q=cats&api_key=yc30iaHwatuELqBgZqHKILNueRJu7tWN&limit=10"
  );
  const catGiphys = await response.json();
  return { props: { catGiphys } };
}
