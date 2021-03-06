const SidebarView = ({guests, setGuests, dishes,removeDish,dishChoice}) => {
    console.log(dishes);
    return (
    <div class="sidebar2">
        <h3>Menu</h3>
        <div class="guests">
            <span>guests:</span><br/>
            <div>
                <button onClick={() => setGuests(guests-1)} disabled={guests<=1} >-</button>
                <span> {guests} </span>
                <button onClick={() => setGuests(guests+1)}>+</button>
            </div>
        </div>
        <table>
        {
            [...dishes].sort(compareDishes).map((dish)=>{
            let {title, pricePerServing} = dish; 
            return (
            <tr>
                <td><button onClick={()=>removeDish(dish)}>X</button></td>
                <td><a href="" onClick={e=>{e.preventDefault()/*TODO call the method preventDefault of the event! */; 
                         dishChoice(dish.id)/*TODO fire the dishChoice custom event  with the dish id as parameter */;
                        window.location.hash = "#details"} } 
                    >{title}</a></td>
                <td>{dishType(dish)}</td>
                <td>{(pricePerServing*guests).toFixed(2)}</td>
            </tr>)})}
            <tr>
                <td></td>
                <td>Total:</td>
                <td></td>
                <td>{[...dishes].reduce((accumulator, {pricePerServing})=> (accumulator + pricePerServing*guests),0).toFixed(2)}</td>
            </tr>
        </table>
        <button class="summary" onClick = {e => window.location.hash = "#summary" }>Summary</button>
    </div>);

}

const types=["starter", "main course", "dessert"];

const dishType = (dish) => {
    if(dish.dishTypes!=undefined){
    const tp= dish.dishTypes.filter(value => types.includes(value));
    if(tp.length)
	    return tp[0];
    return "";}
    else return;
}


const  compareDishes = (a,b) => {
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b));
    if(ai < bi) return -1
    if(ai > bi) return 1
    if(ai === bi) return 0
  /*TODO return 
      -1 if ai < bi, 
      1 if ai > bi, 
      or 0 if equal */ 
}
