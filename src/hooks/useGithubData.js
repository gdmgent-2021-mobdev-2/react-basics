import { useState, useEffect } from 'react';

const createBasicAuth = () => {
    const auth = `${process.env.REACT_APP_GITHUB_USERNAME}:${process.env.REACT_APP_GITHUB_TOKEN}`;
    return 'Basic ' + btoa(auth);
};

const useGithubData = (username) => {
    const [data, setData] = useState();
    const [error, setError] = useState();

    // 1e keer runnen on start (bij aanmaken component)
    // Vanaf dan elke keer indien username wijzigt
    useEffect(() => {
        setData(null);
        setError(null);
        if (username) {
            let isCurrent = true;
            fetch(`https://api.github.com/users/${username}`,
                {
                    headers: {
                        'Authorization': createBasicAuth(),
                    }
                })
                .then((json) => json.json())
                .then((data) => isCurrent && setData(data))
                .catch((error) => isCurrent && setError(String(error)));

            return () => isCurrent = false;
        } else {
            setError('Github username is empty');
        }
    }, [username]);

    const isLoading = !data && !error;

    return {
        data,
        error,
        isLoading,
    }
};

export default useGithubData;
