import { useState, useEffect } from 'react';
import Intro from '../Shared/Intro';
import StudentsOverview from './Components/StudentsOverview';

const Les2 = () => {
    // state
    const [ students, setStudents ] = useState();
    const [ error, setError ] = useState();

    useEffect(() => {
        let isCurrent = true;

        // fetch students
        fetch('/data/students.json')
            .then((response) => response.json())
            // shorter isCurrent
            .then((data) => isCurrent && setStudents(data))
            // longer isCurrent
            .catch((e) => {
                if (isCurrent) {
                    setError(String(e));
                }
            });

        // return "destroy" function
        return () => {
            // inside destroy function, so react called our function
            // react wants to destroy useEffect, set isCurrent false for async fetch
            isCurrent = false;
        };
    }, []);

    const isLoading = !students && !error;

    return (
        <>
            <Intro
                title="Les 2"
                description="useState en useEffect"
                />

            {
                error && <p className="error">{error}</p>
            }

            {
                isLoading && <p>Loading</p>
            }

            {
                students && <StudentsOverview students={students} />
            }
        </>
    );
};

export default Les2;
