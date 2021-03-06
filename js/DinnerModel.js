class DinnerModel{
    constructor(guests=2, dishes=[], currentDish=null, observers = []){
        this.observers = observers;
        this.setNumberOfGuests(guests);
        this.dishes = [...dishes];
        this.currentDish = currentDish;
        
    }
    
    addObserver(callback) {
        this.observers = [...this.observers,callback];
    }
    removeObserver(callback) {
        this.observers = this.observers.filter(cb => cb !== callback);
    }
    notifyObservers() {
        this.observers.forEach(cb => cb());
    }
    setDishes(dishes){
        if(dishes===null) dishes = []
        this.dishes= [...dishes]; /* notify observers! */ ;
        this.notifyObservers();
    }
    removeFromMenu(dishData){
        this.dishes = this.dishes.filter(dish=>dish.id!==dishData.id);
        this.notifyObservers();
    }
    addToMenu(dish){
        this.dishes=[...this.dishes,dish];
        this.notifyObservers();
    }
    setCurrentDish(id){
        if(this.currentDish===id) return;
        this.currentDish=id;
        this.currentDishDetails= this.currentDishError= null; 
        this.notifyObservers(); 

        if(this.currentDish !== null){
            DishSource.getDishDetails(this.currentDish).then(data => {
                this.currentDishDetails = data;
                this.notifyObservers();
            }).catch(e=>{
                this.currentDishError = e;
                this.notifyObservers();
            })
        }
    }
    setNumberOfGuests(x){ 
        if(x<=0 || !Number.isInteger(x)) throw "Number not Integer or Negative";
        this.numberOfGuests = x;

        this.notifyObservers();
    } 

    
};

/*
[1.2.3.4]
[{Ingretiende, Aisle, Quantity}]
Redeuce over Dishes arr.reduce((num,acc) => acc+num ,[])
{ Ingredient[], Ingredient[]}

*/

const getIngredients = (dishArr) => { // How do you do this with Reduce I am super curious 
    const result={}; // object used as mapping
    dishArr.forEach(d=> d.extendedIngredients.forEach(i=>{
         if(!result[i.id])
            // ingredient not taken into account yet
            // associate the ingredient with the ID
            // {...i } is a *copy* of the ingredient (spread syntax)
         // we copy just in case, as we’ll change the object below
         result[i.id]={...i};
        else
          {/*TODO: add i.amount to the amount of result[i.id]*/
        result[i.id].amount += i.amount; 
        }
    }))
   return Object.values(result);
 }
