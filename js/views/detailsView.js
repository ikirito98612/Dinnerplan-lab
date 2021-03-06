const DetailsView = ({dish, people, isDishInMenu, dishAdded}) => {
    console.log(dish)
    return (
        <div>
            <div class="dishDetails">
                <div class="costandname"> 
                    <div class="dishDetailsTop">
                            <img src={dish.image}/>
                            <h3>{dish.title}</h3>

                    </div>
                    <div class="confirmButtons">
                        <button disabled={isDishInMenu} onClick={() => {
                            dishAdded(dish)
                            window.location.hash = "#search"
                            }}>
                            Add to menu
                        </button>
                        <button onClick={ () => {
                            window.location.hash = "#search"
                        }}>
                            Cancel
                        </button><br/>
                        <br/>
                        <div>
                            <strong>Cost:</strong>
                            <p>Price: {(dish.pricePerServing).toFixed(2)}</p>
                            <p>for {people} guests {(people*dish.pricePerServing).toFixed(2)}</p>
                    </div>
                    </div>
                    

                </div>


                <div class="DishDetailsDescription">

                    <div class="Ingredients">
                    <strong>Ingredients</strong>
                        {
                        dish.extendedIngredients.map(Ingredient =>{
                            return (
                            <p key={Ingredient.id}>{Ingredient.name}: {(Ingredient.amount).toFixed(2)} {Ingredient.unit} </p>
                            )})
                        }
                    </div>
                    <div class="instructions">
                        <p>{
                        dish.instructions==null?"No data":dish.instructions
                        }</p>
                    </div>
                </div>
            </div>
            <div class="link">
                <a href={dish.sourceUrl}>More information</a>
            </div>
        </div>
        )

}


//dish={details} people={3}  isDishInMenu={false} 
//dishAdded={()=>console.log("User wants to add this dish! ", details)
               /* <div>
                    <span></span>
                </div>*/

/* */