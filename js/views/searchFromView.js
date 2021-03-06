const SearchFromView = ({options,onSearch,onText,onDishType}) =>{
    return (
        <div class="searchform">
            <h3>SearchResults</h3><br/>
            <input onChange={e => onText(e.target.value)}/>
            <select onChange={e => onDishType(e.target.value)}>
                <option>Choose:</option>
                {options.map((opt)=> <option key={opt}>{opt}</option>)}
            </select>
            <button onClick={()=> onSearch()}>Search</button>
            {/* <button onClick = {e => window.location.hash = "#summary" }>Summary</button> */}
        </div>
    );
}

const  eventPrinter = (evt) =>{ console.log(evt);}