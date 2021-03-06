const SummaryPresenter = ({model}) => { 
   const [numberOfGuests, dishes] = useModelProperties(model, ["numberOfGuests","dishes"]);
   return <SummaryView guests={numberOfGuests} dishes={dishes}/>
}


