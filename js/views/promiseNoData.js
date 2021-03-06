const promiseNoData = (promise, data, error) => {
    if(promise === null) return <span>no data</span>
    if(data===null && error===null) return <img src="http://www.csc.kth.se/~cristi/loading.gif"/>
    if(data===null) return <span>some error</span>
    return false;
}