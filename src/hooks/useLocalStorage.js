import { useEffect, useState } from "react";

function useLocalStorage(key, initialData = []) {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const item = localStorage.getItem(key);
        const existingData =
            item && item !== "undefined" ? JSON.parse(item) : null;
        if (existingData) {
            setData(existingData);
        } else {
            localStorage.setItem(key, JSON.stringify(initialData));
        }
    }, []);

    const updateLocalStorage = (newData) => {
        if (typeof newData === "function") {
            localStorage.setItem(key, JSON.stringify(newData(data)));
        } else {
            localStorage.setItem(key, JSON.stringify(newData));
        }
        setData(newData);
    };

    return [data, updateLocalStorage];
}

export default useLocalStorage;
