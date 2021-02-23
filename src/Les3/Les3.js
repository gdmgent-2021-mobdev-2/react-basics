import { useState, useEffect } from 'react';
import './Les3.css';
import Intro from '../Shared/Intro';
import Detail from './Components/Detail';
import useGithubData from '../hooks/useGithubData';
import useStudents from '../hooks/useStudents';

const Students = ({ onStudentClick }) => {
    const { isLoading, error, students } = useStudents();

    if (isLoading) {
        return (
            <section>
                <p>Loading</p>
            </section>
        );
    }

    if (error) {
        return (
            <section>
                <p>{ error }</p>
            </section>
        )
    }

    return (
        <ul className="sidebar">
            {students.map((student) => (
                <Item key={student.number}
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

const Les3 = () => {
    const [activeStudent, setActiveStudent] = useState();

    const { data, error, isLoading } = useGithubData("yungpanda");

    return (
        <>
            <Intro
                title="Les 3"
                description="useEffect advanced"
            />
            <section>
                <h2>Lector</h2>
                <p>Michael Vanderpoorten</p>
                {
                    data && <p>Github ID: {data.id}</p>
                }
            </section>
            <h2>Studenten</h2>
            <section className="les3">
                <Students onStudentClick={(student) => setActiveStudent(student)}/>
                {
                    activeStudent && <Detail student={activeStudent}/>
                }
            </section>
        </>
    )

};

export default Les3;
