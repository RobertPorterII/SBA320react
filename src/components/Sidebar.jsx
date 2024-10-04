import React from "react"
/* eslint-disable react/prop-types */
// Sidebar components for displaying top heros, will be place aside was navbar with links directed from the open source Jikan api, no referrer so referrer info

// now Fetch is working time to loop the data for teh Sidebar

export default function Sidebar({topHeroes}) {
    return(
        <aside>
        <nav>
            <h3>Top <strong>Heroes</strong></h3>
            {topHeroes.map(characters => (
// getting error needs a key the data has mal_id so using that

            <a 
            href={characters.url} 
            target="_blank"  
            key={characters.mal_id}
            rel="noreferrer">
           { characters }
            </a>
            
            ))}
        </nav>

        </aside>
    )
    
}