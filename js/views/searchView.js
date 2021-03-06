const SearchResultsView = ({searchResults, dishChosen}) => {
    return (
        <div class="results">
            {
            searchResults.map(({id,title,image}) => 
                <span key={id} class="searchResult" onClick={() => {
                    dishChosen(id); 
                    window.location.hash ="#details"
                }}>
                    <img src={"https://spoonacular.com/recipeImages/"+image} height="100px"/>
                    <div>{title}</div><br/>
                </span>
            )
        }
        </div>
        )



}

/*            return (
                <span key={id} class="searchResult" onClick={() => dishChosen(id)}>
                    <img src={image} alt="Girl in a jacket" width="500" height="400"/>
                    <div>{title}</div>
                </span>
                
            );
             */