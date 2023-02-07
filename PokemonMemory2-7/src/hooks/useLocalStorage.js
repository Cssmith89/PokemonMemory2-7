import { useCallback, useEFfect, useState } from 'react';

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState (() => {
        const rerieved = JSON.parse(localStorage.getItem(key));
        if (retrieved) return retrieved;
        return initialValue;
    });

    useEFfect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    const set = useCallback((value) => {
        const caluculatedValue = typeof value === 'function' ? value() : value;
        setValue(calculatedValue);
    }, []);

    return [value, set];
}

export default useLocalStorage;