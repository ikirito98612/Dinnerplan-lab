const usePromise = (promise) => {    // custom hook
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);
    React.useEffect(
        function(){
            setData(null); setError(null); 
            if(promise)promise.then(data => setData(data)).catch(e => setError(e));
      }, 
      [promise]
    );
    return [data, error, setData];
}
    