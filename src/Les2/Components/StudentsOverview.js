import Info from './Info';
import Item from './Item';
import { useState } from 'react';

const StudentsOverview = ({ students }) => {
    const [ showPresent, setShowPresent ] = useState(true);

    const handleToggleClick = () => {
        setShowPresent(!showPresent);
    };

    const handleStudentClick = (name) => {
        window.alert(name);
    }

    const filteredStudents = showPresent ?
        students.filter((student) => student.present) : students;

    const count = filteredStudents.length;

    return (
        <>
            <button style={{marginTop: '2rem'}} onClick={handleToggleClick}>Toggle</button>
            {
                showPresent ?
                    <h2>Aanwezige studenten</h2> :
                    <h2>Alle studenten</h2>
            }
            <Info><span>Totaal studenten: {count}</span></Info>
            <ul>
                {filteredStudents.map((student) => (
                    <Item
                        onItemClick={handleStudentClick}
                        {...student}
                        key={student.number}/>
                ))}
            </ul>
        </>
    );

};

export default StudentsOverview;
