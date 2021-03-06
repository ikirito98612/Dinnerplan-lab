const SummaryView = ({guests,dishes}) =>{
    return (
        <div>
            Summary for <span title="nr. guests">{guests}</span> guests:
            <button onClick = {e => window.location.hash = "#search"}>Back To Search</button>
            <table class = "summaryTable">
                <tr>
                    <th>Ingredient</th>
                    <th>Aisle</th>
                    <th>Quantity</th>
                </tr>
                {getIngredients(dishes).sort(compareIngredients).map(({name, aisle,amount,unit}) =>{
                    return (
                        <tr>
                            <td>{name}</td>
                            <td>{aisle}</td>
                            <td>{(amount*guests).toFixed(2)} {unit}</td>
                        </tr>
                    );
                })}
            </table>
       </div>
    );
}
const compareIngredients =(a,b) => {
    if(a.aisle < b.aisle)
	   return -1;
    // TODO return 1 if a.aisle > b.aisle. Note: not >= !!!
    if(a.aisle > b.aisle)
	   return 1;
    // At this point, we know that a.aisle===b.aisle


    // TODO compare a.name with b.name, return 1 or -1 based on that
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    if(a.name === b.name) throw "Error";
    /* if a.name===b.name throw an error because 
       ingredient names are not unique as specified, so 
       there’s a bug */
}

/*
Dish 1 - Ing 1
dish 2 - Ing 1
Dish 3 - Ing 1
*/

