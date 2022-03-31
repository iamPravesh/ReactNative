const UseAxios = (props) => {
    const { url, method, data, headers, onSuccess, onError } = props;
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const res = await axios({
                url,
                method,
                data,
                headers,
            });
            setResponse(res);
            onSuccess(res);
        } catch (err) {
            setError(err);
            onError(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url, method, data, headers]);

    return { response, error };
};

export default UseAxios;