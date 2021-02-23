import { useState, useEffect } from 'react';

const useStudents = () => {

    const [students, setStudents] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        let isCurrent = true;
        // fetch students
        fetch('/data/students.json')
            .then((response) => response.json())
            .then((data) => isCurrent && setStudents(data))
            .catch((e) => isCurrent && setError(String(e)));

        return () => isCurrent = false;
    }, []);


    const isLoading = !students && !error;

    return {
        students,
        error,
        isLoading,
    }

};

export default useStudents;
