const useModelProperties = (model, propertyNames) => {
    return propertyNames.map(name => {
        const [value, setValue] = React.useState(model[name]);
        React.useEffect(() => {
            const obs = () => { setValue(model[name]) }
            model.addObserver(obs);
            return () => model.removeObserver(obs);
        }, [model]);
        return value;
    })
}