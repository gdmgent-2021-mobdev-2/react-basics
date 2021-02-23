import { useState, useEffect } from 'react';
import './Opdracht3.css';

const Detail = ({ student }) => {
    return (
        <div className="main">
            <h2>{student.name}</h2>
        </div>
    );
}

const Students = ({ onStudentClick }) => {
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

    if (isLoading) {
        return (
            <section>
                <p>Loading</p>
            </section>
        );
    }

    return (
        <ul className="sidebar">
            {students.map((student) => (
                <Item
                    onClick={(student) => onStudentClick(student)}
                    student={student}/>
            ))}
        </ul>
    );
};

const Item = ({ student, onClick }) => {
    return (
        <li>
            <button onClick={() => onClick(student)}>
                {student.name} ({student.number})
            </button>
        </li>
    );
}

const Opdracht3 = () => {
    const [activeStudent, setActiveStudent] = useState();

    return (
        <section className="opdracht3">
            <Students onStudentClick={(student) => setActiveStudent(student)}/>
            {
                activeStudent && <Detail student={activeStudent}/>
            }
        </section>
    )

};

export default Opdracht3;
