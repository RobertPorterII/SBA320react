import { useState,useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar';

import './App.css'

function App() {
  // Using UseState hook to for functionality of the app with Search bar and top Hero list

  const [animeList, SetAnimeList] = useState([]);
  const [topHeroes,SetTopHeroes] = useState([]);
  // going be searching by name so empty string instead of array for teh searchbar
  const [search, Setsearch] = useState("");
  
// Sidebar will place the Top heroes on side of the app using a div to contain contents

  return (
    <>
      <div>
        <Header />
        
        <div className='content-warp'>
          <Sidebar topHeroes={topHeroes} />
        </div>
      
      </div>
      
    </>
  );
}

export default App
