import { useState } from 'react';
import Intro from './Components/Intro';
import Info from './Components/Info';
import students from '../data/students';
import Item from './Components/Item';

const Les1 = () => {
    const title = "Les 1";

    // state
    const [ showPresent, setShowPresent ] = useState(true);

    const onStudentClick = (name) => {
        window.alert(name);
    }

    const handleToggleClick = () => {
        setShowPresent(!showPresent);
    };

    const filteredStudents = showPresent ?
        students.filter((student) => student.present) : students;

    const count = filteredStudents.length;

    return (
        <>
            <Intro title={title} />

            <button onClick={handleToggleClick}>Toggle</button>
            {
                showPresent ?
                    <h2>Aanwezige studenten</h2> :
                    <h2>Alle studenten</h2>
            }
            <Info><span>Totaal studenten: {count}</span></Info>
            <ul>
                { filteredStudents.map((student) => (
                    <Item
                        onItemClick={onStudentClick}
                        {...student}
                        key={student.number} />
                )) }
            </ul>
        </>
    );
};

export default Les1;
