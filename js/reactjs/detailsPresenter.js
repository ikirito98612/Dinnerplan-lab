const DetailsPresenter = ({model}) => {
    const [dishes, numberOfGuests, currentDish, currentDishDetails,currentDishError] 
    = useModelProperties(model, ["dishes", "numberOfGuests", "currentDish","currentDishDetails","currentDishError"])
    return promiseNoData(currentDish, currentDishDetails, currentDishError) ||
    <DetailsView	
    isDishInMenu={dishes.find(d => d.id === currentDish)}
    people={numberOfGuests}
    dish={currentDishDetails}
    dishAdded = {(dish) => model.addToMenu(dish)}
    />
    

}