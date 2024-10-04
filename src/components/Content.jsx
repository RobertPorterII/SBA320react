// The component with the main content i.e the search box for the app with is housed in the form tag

// Adding props to Content function for on the OnSubmit and a value to input

export default function Content(props) {
    return (

        <main>
            <div className="main-head">
                <form className="search-box"
                onSubmit={props.HandleSearch}>

                    <input type="search" placeholder="Look them up!" required 
                        value={props.search}
                        onChange={e => props.SetSearch(e.target.value)}
                    />
                </form>

            </div>
        </main>

    )
    
}