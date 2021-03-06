
const SearchPresenter = ({model}) => {
    const [promise,setPromise] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchType, setSearchType] = React.useState(""); 
    const [data, error,setData] = usePromise(promise);
    const amountOfItemsToLoad = 30;
    const offset = React.useRef(0);
    const firstRenderLoadMore = React.useRef(true);
    const firstRenderSearch = React.useRef(true);
    const [atBottom, setAtBottom] = React.useState(false);
    
    
    

    const LoadMoreItems = (event) => {
        const bottom = event.target.scrollHeight - event.target.scrollTop <= event.target.clientHeight;
        if(!bottom) setAtBottom(false);
        if (bottom) setAtBottom(true);

        
        
    }
    React.useEffect(()=>{
        if(firstRenderLoadMore.current===true){firstRenderLoadMore.current = false; return;}
        if(setAtBottom===false) return; 
        offset.current += amountOfItemsToLoad;
        const timecall = setTimeout(()=>
                DishSource.searchDishes({type: searchType, query: searchQuery, number: amountOfItemsToLoad, offset: offset.current })
                .then((dataProm)=>{
                    setData([...data,...dataProm])
                }),1000);
        return () => clearTimeout(timecall);

    },[atBottom])

    React.useEffect(()=>{
        setPromise(DishSource.searchDishes({number: amountOfItemsToLoad}));
    },[])


    React.useEffect(()=>{
        if(firstRenderSearch.current===true){firstRenderSearch.current = false; return;} 
        offset.current = 0;
        const handler = setTimeout(() => setPromise(DishSource.searchDishes({type: searchType, query: searchQuery,number: amountOfItemsToLoad})),3000)
        return () => clearTimeout(handler);
    },[searchQuery])

    
    
    return (
    <div class = "mainContent entiresearch" onScroll={LoadMoreItems} >
        <SearchFromView 
        onText={txt => setSearchQuery(txt)} 
        onDishType = {dishType => setSearchType(dishType)}
        onSearch = {() => setPromise(DishSource.searchDishes({type: searchType, query: searchQuery}))} 
        options={["starter", "main course", "dessert"]} />
        {promiseNoData(promise, data, error) ||
        <SearchResultsView searchResults={data} dishChosen = {(id)=> model.setCurrentDish(id)}/>}
    </div>)

}