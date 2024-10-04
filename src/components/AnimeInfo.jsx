import React from "react"
// The component with the main content i.e the search box for the app with is housed in the form tag

// Adding props to Content function for on the OnSubmit and a value to input
// another Update the Search was oddly not importing right so i moved it to main App js and re-purposed this page for the anime info going back Jikan docs have to use props and there query values i couldnt get the  data loop and map to work in previous code version so im just going list them out its easier

export const AnimeInfo = (props) => {
    const {title,images:{jpg:{large_image_url}},source,rank,score,popularity,members,status,rating,duration}=props.animeInfo
    return (
        <>
        <div className="anime-content">
            <h3>{title}</h3><br />
            <img src={large_image_url} alt="" /><br /><br />
            <div className="info">
                <h3>#Rank: {rank}</h3>
                <h3>#Score: {score}</h3>
                <h3>#Popularity: {popularity}</h3><hr/><br />
                <h4>Members:{members}</h4>
                <h4>Source:{source}</h4>
                <h4>Duration:{duration}</h4>
                <h4>Status:{status}</h4>
                <h4>Rating:{rating}</h4>
            </div>
        </div>
    </>
  )
}