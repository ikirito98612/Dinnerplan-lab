const persistModel = (model) => { // how to make this look pretty
    let loadingFromFirebase=false;
    model.addObserver(() => {
        if(loadingFromFirebase===true) return;
        firebase.database().ref("dinnerModel").set({  // object literal
            guests: model.numberOfGuests/*TODO*/,
            dishes: model.dishes,
            currentDish: model.currentDish
			// TODO dishes, currentDish
		});


    });

    firebase.database().ref("dinnerModel").on("value",(data)=>{
        // object litera
        console.log(data.val())
        loadingFromFirebase= true;
        if(data.val()){
            console.log(data.val())
            model.setNumberOfGuests(data.val().guests);
            model.setDishes(data.val().dishes || null);
            model.setCurrentDish(data.val().currentDish || null);
        }
        loadingFromFirebase= false;

   // TODO dishes, currentDish
});

}
