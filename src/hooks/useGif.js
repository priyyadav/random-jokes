import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://api.chucknorris.io/jokes/random';

const useGif = () => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        const response = await axios.get(url);
        const jokeData = response.data.value; 
        setGif(jokeData);
        setLoading(false);
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    return { gif, loading, fetchData };
}

export default useGif;
