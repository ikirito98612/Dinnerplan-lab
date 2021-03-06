    const SidebarPresenter = ({model}) => {
    const [numberOfGuests, dishes] = useModelProperties(model, ["numberOfGuests","dishes"]);
    return <SidebarView guests={numberOfGuests}
                        dishes={dishes}
                       setGuests={(x) => model.setNumberOfGuests(x)} // ask question about arrow functions here
                       removeDish={(dish)=>model.removeFromMenu(dish)}
                       dishChoice={(dish)=>model.setCurrentDish(dish)}
     />
 }