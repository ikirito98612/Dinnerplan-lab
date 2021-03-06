const  DishSource={   // object creation literal
    apiCall(params) {
     return fetch(BASE_URL+params, { // i dont understand should we deal with exceptions aswell? TW2.1
             "method": "GET",
             "headers": {
          'X-Mashape-Key' : API_KEY
          }
     })
     // check HTTP response:
     .then(response=>
      {if (response.statusText.includes("OK")==false)throw response;
        else return response;}
      /*TODO check response and throw an error if not OK (compose error msg from  
  response.statusText), Otherwise if response contains 200/OK just return response */ )   
     
     // from HTTP headers to HTTP response data
       .then(response => response.json())   ;
    }
    ,   // comma between object members
    searchDishes({type,query,offset,number}){ return DishSource.
      apiCall(`recipes/search?${new URLSearchParams({
        type: type === undefined ? "" : type,
        query: query === undefined ? "": query,
        offset: offset === undefined ? "": offset,
        number: number === undefined ? "": number
      })}`)
      .then(data => data.results)
      .catch(err => console.log(err)); 
   }
    ,   // comma between object members
    getDishDetails(id){ return DishSource.apiCall(`recipes/${id}/information`); }
   };
 