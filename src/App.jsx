import { useState,useEffect,  } from 'react'

import Header from './components/Header'
// import Sidebar from './components/Sidebar';
import { AnimeInfo } from './components/AnimeInfo'
import { AnimeList } from './components/AnimeList'

import './App.css'


// so the Previous fetches work but something about data wouldnt load to the page so going to have re-do the whole layout  and code to something simpler like labs we did in class....
function App() {

// new more simplified useState variables with initial state value of Berserk cause Berserk  is awesome 

const [search, setSearch] = useState('Berserk')
const [animeData, SetAnimeData] = useState()
const [animeInfo, setAnimeInfo] = useState();

  // getting data again with async function and fetch and Jikan link from Docs

  const fetchData = async() => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=15`)
    const resData = await res.json();
    // console.log(resData);  === there for testing now adding teh useSTate variables with it
    SetAnimeData(resData.data)
  }

  // now that i have my data again will pass to useEffect again so the data will load when page loads, still need my empty array at start but once my code gets updated in content for search..then fill it in

  useEffect(() => {
    fetchData()
  }, [search])








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
          <main>
          <div className="main-head">
          <form className='search-box'>
          <input type="search" placeholder="Look them up!" required 
                     onChange={(e) => setSearch(e.target.value)}/>   

          </form>
          </div>
          <div className='animeInfo'>
          {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}
          </div>
          {/* <AnimeInfo /> */}
          <div className="anime-row">
            <h3 className="text-heading">An<strong>I</strong>me</h3>
            <div className="row">
                <AnimeList 
                animelist={animeData}
                setAnimeInfo={setAnimeInfo}
                />
            </div>
            </div>

          </main>
        </div>
      
      <div className='container'>

        <div className='animeInfo'>

        </div>
        <div className='anime-row'>
          <div className='row'>

          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default App
