import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = ( { articles }: any) => {
  console.log(articles);
  return (
    <div >
      <Head>
        <title>This is our site title top of the website</title>
        <meta name='keywords' content='This is our site title top of the website'/>
      </Head>
      <h1>Hello world! This is my first next app</h1>
    </div>
  );
};
interface Iprops 
  {
    props:{
      useId:number,
    id:number,
    title:string,
    body:string,
    }
}
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

export default Home;


