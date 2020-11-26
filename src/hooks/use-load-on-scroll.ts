/* eslint-disable react-hooks/exhaustive-deps */
// THIS rule has been disabled here since none of the dependencies change often or
// needs to be accounted for in the list of dependencies of the useEffect
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export const useLoadOnScroll = (
    callback: VoidFunction
): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        callback();
    }, [isFetching]);

    function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight ||
            isFetching
        )
            return;
        setIsFetching(true);
    }

    return [isFetching, setIsFetching];
};
