import './Opdracht2.css';
import students from '../data/students';
import { useState } from 'react';

const Button = ({ onClick, disabled, children }) => {
    return (
        <button disabled={disabled} onClick={onClick}>
            { children }
        </button>
    );
};

const Header = ({ children }) => {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    )

};

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>© ArteveldeHogeschool { year } • Michael Vanderpoorten</footer>
    )
};

const Item = ({ name, img, number, present, onClick }) => {
    return (
        <li className="student-item" onClick={() => onClick(name)}>
            <img className="student-item__img" src={img} alt={name} />
            <h3>{ name }</h3>
            <p>{ number }</p>
            <p>{ present ? 'Aanwezig' : 'Afwezig' }</p>
        </li>
    );
}

const List = ({ students, onStudentClick }) => {
    return (
        <ul className="student-list">
            {students.map((student) => (
                <Item key={student.number}
                      onClick={onStudentClick}
                      {...student} />
            ))}
        </ul>
    );
};

const Pagination = ({ currentPage, max, onClick }) => {
    let array = [];
    for (let i = 1; i <= max; i++) {
        array.push(
            <li className={currentPage === i ? 'active' : ''}>
                <Button onClick={() => onClick(i)}>{i}</Button>
            </li>
        )
    }

    return (
        <nav className="pagination">
            <ul>
                <Button disabled={currentPage === 1} onClick={() => onClick(currentPage - 1)}>&lt;</Button>
                {array}
                <Button disabled={currentPage === max} onClick={() => onClick(currentPage + 1)}>&gt;</Button>
            </ul>
        </nav>
    )
};

const MAX_PER_PAGE = 4;

const Opdracht2 = () => {
    const title = "Opdracht 2";

    const [page, setPage] = useState(1);

    const handleStudentClick = (name) => {
        window.alert(name);
    };

    const handlePageClick = (page) => {
        setPage(page);
    }

    const maxPages = Math.ceil(students.length / MAX_PER_PAGE);
    const pagedStudents = students.slice((page - 1) * MAX_PER_PAGE, page * MAX_PER_PAGE);

    return (
        <>
            <Header>
                { title }
            </Header>
            <main className="container">
                <List
                    students={pagedStudents}
                    onStudentClick={handleStudentClick}
                />
            </main>
            <Pagination
                currentPage={page}
                max={maxPages}
                onClick={handlePageClick}
                />
            <Footer />
        </>
    );
};

export default Opdracht2;
