import Head from "next/head";
import Link from 'next/link'
import { useRouter } from "next/router";
import Footer from "../../components/Footer"


export default function Search(initialData) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Search</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <p><Link href="/">Go Home</Link></p>
      <h1> search results for: {router.query.searchTerm}</h1>
      {initialData.giphys.map((giph, index) => {
        return (
          <div key={index}>
            <h3> {giph.title}</h3>
            <img src={giph.images.original.url} alt={giph.title} />
          </div>
        );
      })}
      <Footer/>
    </>
  );
}

export async function getServerSideProps(context) {
  const searchTerm = context.query.searchTerm;
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=yc30iaHwatuELqBgZqHKILNueRJu7tWN&limit=10`
  );
  const giphys = await response.json();
  return { props: { giphys: giphys.data } };
}
