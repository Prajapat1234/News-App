

import React, { useEffect, useState } from 'react';
import Card from './pages/pages/Card';
import "./News.css"
// import Searchbar from './pages/pages/Searchbar';

export default function News({ searchTerm }) {
  // let [Article, setArticle] = useState('');
  let [Data, setData] = useState([]);

  useEffect(() => {
    
    async function fetchData(){
      let data = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=publishedAt&apiKey=2290f246f92a4cdb8167ee36b7e089da`)
      data =await data.json();
      console.log(data.articles)
      setData(data.articles);
    }



    fetchData();
    
  }, [searchTerm]);


  return (
    <>

      <div id='mainBox'>

        {Data.map((n) => (

          <Card Title={n.title} desc={n.description} author={n.author} img={n.urlToImage} button={n.url} />

        ))}

      </div>
    </>
  );
}


