// The component with the main content i.e the search box for the app with is housed in the form tag

export default function Content() {
    return (

        <main>
            <div className="main-head">
                <form className="search-box">

                    <input type="search" placeholder="Look them up!" required />
                </form>

            </div>
        </main>

    )
    
}