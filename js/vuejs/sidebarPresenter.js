function SidebarPresenter({model}){
    return <SidebarView guests={model.numberOfGuests}
                        dishes={model.dishes}
                       setGuests={(x) => model.setNumberOfGuests(x)} // ask question about arrow functions here
                       removeDish={(dish)=>model.removeFromMenu(dish)}
                       dishChoice={(dish)=>model.setCurrentDish(dish)}
     />
 }