import { useState,useEffect,  } from 'react'

import Header from './components/Header'
// import Sidebar from './components/Sidebar';
import Content from './components/Content';

import './App.css'

function App() {
  // Using UseState hook to for functionality of the app with Search bar and top Hero list
  // const [animeList, SetAnimeList] = useState([]);
  // const [topHeroes, SetTopHeroes] = useState([]);

  // // empty string needed cause will be using text to run searches
  // const [search,SetSearch] = useState("");
  

  // fetching api data
  // useEffect(() => {
  //   fetch(`https://api.jikan.moe/v4/top/characters?=q/1&limit=5`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       SetTopHeroes(data);
        
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  
// console.log(topHeroes);


// // grab the form and stopping it from refreshing the page

// const HandleSearch = e => {
//   e.preventDefault();

//   // logging for testing
//   //  console.log(search);
   
//   FetchAnime(search);
// }

// const FetchAnime = async (anime) => {
//   const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`)

// }
//   // const GetTopAnime = async () => {
  //   const temp = await fetch(`https://api.jikan.moe/v4/top/anime?=query/tv/1/bypopularity`)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  //     SetTopHeroes(data)
      
  //   }
  // }
  // fetching the APi data, was not forgoting to put query in the fetch link so data was not showing in the array during testing
  
  // useEffect(() => {
  //   fetch(`https://api.jikan.moe/v4/top/characters?=query/1`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       SetTopHeroes(data);
  //       // SetTopHeroes(data.arr.slice[0 ,5]);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  // const GetTopHeroes = async () => {
  //   const temp = await fetch(`https://api.jikan.moe/v4/top/characters?=query/1/10`)
  //   .then((res) => res.json())
  //   .then((data) => { 
  //     console.log(data);
  //     SetTopHeroes(data)
  //     SetTopHeroes(data.top.slice(0,5))
      
  //   },[]);

  //   useEffect(() => {

  //   })
 
      // useEffect(() => {
      //   GetTopHeroes()
      //   .catch((err) =>{
      //     console.log(err);
      // });
          
        
   
  
    // console.log(GetTopHeroes);
    // console.log(topHeroes);
    
    
    
    // have to use slice for the fetch results cause the APi auto spits out 50 just gonna use top 5 for app
    
    // let SetTopHeroes arr.slice = [0,5]
    
  // }



// Now so the List of TOp Heroes on page load will use UseEffect hook with empty dependency

// useEffect(() => {
//   GetTopHeroes();
  
//   // checking log to see if its working
//   console.log("Top Heroes");
  

  
//   },[])


// console.log(topHeroes);





// Sidebar will place the Top heroes on side of the app using a div to contain contents

  
  return (
    <>
      <div>
        <Header />
        
        <div className='content-warp'>
          {/* <Sidebar topHeroes={topHeroes} /> */}
          {/* <Content 
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
            animeList={animeList} /> */}
        </div>
      
      </div>
      
    </>
  );
}

export default App
