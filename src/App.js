// import React from "react";
// import "./App.css"
// import { useState } from "react";

// import Demo1 from "./Demo1"
// import Demo2 from './Demo2'
// import Demo3 from './Demo3'

// export default function App() {

//   let [count,setCount] = useState(0)

// setTimeout(()=>{
//     setCount(count+1);
//   },2000)

// return(
//     <> 
//     {/* {eval (useState + 1)} */}

//       <div id="main">

//         <h1>Hello, I am a react js </h1>

//         <div id="main1">
//           {count}
//         </div>


//      <Demo1 Data = {count+1}/>
//       <Demo2 Data = {count+2}/>
//       <Demo3 />


//        <button onClick={()=>setCount(count+1)}> click here </button>
//        {/* <button onClick={()=>setCount(count-1)}> click here -</button>
//        <button onClick={()=>setCount(count*count)}> click here *</button>
//        <button onClick={()=>setCount(count/2)}> click here /</button>
//        <button onClick={()=>setCount()}> clear</button> */}
//       </div>

//       </>
//  )
// }

// --------------------------second project---------------------------------------------------
// import React from 'react'
// import "./App.css"
// import Navbar from './Navbar'
// import Demo2 from "./Demo2"

// import { useState } from 'react'



// export default function App() 
// {

//   let [count,Setcount] = useState(0)

//   function counter()
//   {
//       Setcount(count+1)
//   }

//   return (
//     <> 
//     <Navbar/>

//     <div id='main' >
//         <img src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'/>
//      </div>
//     <div id='cards'> 
//        <Demo2 pname = {"product - 1"} color = "teal" c = {count} add = {counter}/>
//        <Demo2 pname = {"product - 2"} color = "green" c = {count} add = {counter}/>
//        <Demo2 pname = {"product - 3"} color = "green" c = {count} add = {counter}/>
//        <Demo2 pname = {"product - 4"} color = "blue" c = {count} add = {counter}/>
//        </div>
//         </>
//   )
// }

// -----------------wheather------------------------------------------


// import React from 'react'

// import "./App.css"


// import { useState } from 'react'

// export default function App() {

//   let [search, setSearch] = useState("");
//   // let [Desc, setDesc] = useState("");


//   const Getwheather = ()=>  {

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c3a921ebfae39d0c4c8b2dfd61967e5b`)

//       .then((response)=> {
//         return response.json();
//       })
//       .then((Data)=> {

//         console.log(Data);
//         setSearch(Data);

//       })
//  }
//   return (
//     <>

//       <div id='main'>   
//         <center>

//           <h2>Temprature</h2>

//           <input type='search' 
//            placeholder='City temprature'
//            onChange={(e)=>setSearch(e.target.value)}/>

//            {typeof weather.main !="undefined"? 
//           <div>

//           <p> City name : {search.name}</p>

//            <p>Temprature : {search.main.temp}°C </p>
// {/* 
//            <p> Weather : {search.weather[0].main}</p>
//            <p>Description : {search.weather[0].description}</p> */}

//          <button onClick={Getwheather}>Get Now</button>
//           </div>

//            :
//            ''
//            }


//         </center>
//       </div>
//     </>
//   )
// }


// ------------------router-------------------------

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Loader from "./pages/Loader"

import './App.css';

import Navbar1 from './pages/Navbar1';

const News = lazy(() => import('./pages/News'));
const Politics = lazy(() =>import ( './pages/Politics'));
const Travel = lazy(() =>import('./pages/pages/Travel'));
const Sports = lazy(() =>import( './pages/Sports'));

export default function App() {
  const [searchTerm, setSearchTerm] = useState('India');

  return (
    <div id='main'>
      <BrowserRouter>
        <Navbar1 setSearchTerm={setSearchTerm} />
        <Routes>
          <Route
            path='News'
            element={
              <Suspense fallback={<Loader/>}>
                <News searchTerm={searchTerm} />
              </Suspense>
            }
          />
          <Route path='Politics' element={ 
          <Suspense fallback={<Loader/>}>
           <Politics /></Suspense>} /> 
          <Route path='Travel' element={
          <Suspense fallback={<Loader/>}>
            <Travel />
            </Suspense>} />
          <Route path='Sports' element={
             <Suspense fallback = {<Loader/>}>
               <Sports /> 
               </Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// ------------------GPT copy-----------

// App.js
// import React, { useState } from 'react';
// import SearchBar from './pages/pages/pages/SearchBar1';
// import SearchIcon from '@mui/icons-material/Search';

// // import SearchResults from './pages/pages/pages/SearchResults';
// import Card from "./Card";

// const App = () => {
//   const [results, setResults] = useState([]);
//   const [Data, SetData] = useState([]);
//   const [query, setQuery] = useState([]);

//   const handleSearch = (query) => {
//     // Replace the URL with the actual API endpoint
//     fetch(`https://newsapi.org/v2/everything?q=${Data}&sortBy=publishedAt&apiKey=2290f246f92a4cdb8167ee36b7e089da`)
//       .then((response) =>
//         response.json())
//       .then((data) => {
//         setResults(data.articles);
//         console.log(data);
//       })

//       .catch((error) => console.error('Error fetching data:', error));
      
//       };

//   return (
//     <>

//       <div>
//         <h1>seach bar </h1>
//       {/* <input type="text" />trading */}
//       {/* <SearchIcon/> */}
//       {/* <button onClick={handleSearch}>Search</button> */}
//     </div>
//       <div>
//         {results.map((n) => (

//           <Card Title={n.title} desc={n.description} author={n.author} img={n.urlToImage} button={n.url} />

//         ))}
//       </div>
//     </>
//   );
// };

// export default App;


 