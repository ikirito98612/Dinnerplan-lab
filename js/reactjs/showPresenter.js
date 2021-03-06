const Show = ({children, hash}) => {
    const [hashState, setHash]=React.useState(window.location.hash);
    React.useEffect(() => {  
        const listener = () => setHash(window.location.hash);
        window.addEventListener("hashchange", listener);   // 1 subscribe
        return () => window.removeEventListener("hashchange", listener) // 2
}, []); 
    return(
    <div class = {hashState !== hash ? "hidden": ""}>
        {children}
    </div>
    );



}