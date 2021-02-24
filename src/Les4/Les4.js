import styles from './Les4.module.scss';
import { useState } from 'react';
import './Les4.css';
import useStudents from '../hooks/useStudents';
import Input from './Components/Input';
import Button from './Components/Button';

const Checkbox = ({ name, label, onChange, checked }) => {
    return (
        <div className="form-check">
            <input className="form-check-input"
                   type="checkbox"
                   name={name}
                   value=""
                   checked={checked}
                   onChange={onChange}
                   id={name}/>
            <label className="form-check-label" htmlFor={name}>
                {label}
            </label>
        </div>
    );
};

const StudentForm = ({ onSave }) => {
    const [data, setData] = useState({
        name: '',
        number: '',
        image: '',
        present: false,
    });

    const handleChange = (e) => {
        const newData = {
            ...data,
            [e.target.name]: e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value,
        };
        setData(newData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(data);
    };

    return (
        <div className="card">
            <div className="card-body">
                <form className="form mb-4" onSubmit={handleSubmit}>
                    <h2>Student toevoegen</h2>

                    <Input
                        name="name"
                        label="Name"
                        value={data.name}
                        onChange={handleChange}/>

                    <Input name="number"
                           label="Studentennummer"
                           value={data.number}
                           onChange={handleChange}/>

                    <Input name="image"
                           label="Image URL"
                           value={data.image}
                           onChange={handleChange}/>

                    <Checkbox name="present"
                              label="Present"
                              checked={data.present}
                              onChange={handleChange}/>

                    <Button>Toevoegen</Button>
                </form>
            </div>
        </div>
    )
};

const Students = ({ students, onStudentsChange }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const filteredStudents = students.filter((student) => {
        return student.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
    });

    const handleStudentAdd = (student) => {
        onStudentsChange([...students, student]);
    };

    return (
        <>
            <StudentForm
                onSave={handleStudentAdd}
            />

            <label htmlFor="search" className="form-label">Zoeken</label>
            <input value={query}
                   onChange={handleChange}
                   name="search"
                   type="text"
                   className="form-control"
                   id="search"/>

            <ul className="mt-4">
                {filteredStudents.map((student) => (
                    <li key={student.number}>
                        {student.name} <span className="badge bg-primary">{student.number}</span>
                    </li>
                ))}
            </ul>
        </>
    )
};

const Les4 = () => {
    const { students, setStudents, isLoading, error } = useStudents();

    if (error) {
        return <p className="alert alert-danger">{error}</p>;
    }

    if (isLoading) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    const handleOnStudentsChanged = (students) => {
        setStudents(students)
    };

    return (
        <div className="container">
            <Students
                students={students}
                onStudentsChange={handleOnStudentsChanged}
            />
        </div>
    )
};

export default Les4;
