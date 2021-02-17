import './Opdracht1.css';
import students from '../data/students';

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>
            { children }
        </button>
    );
};

const Header = ({ children, onPrevClick, onNextClick }) => {
    return (
        <header>
            <Button onClick={onPrevClick}>Prev</Button>
            <h1>{children}</h1>
            <Button onClick={onNextClick}>Next</Button>
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

const List = (onStudentClick) => {
    return (
        <main className="container">
            <ul className="student-list">
                {students.map((student) => (
                    <Item key={student.number}
                          onClick={onStudentClick}
                          {...student} />
                ))}
            </ul>
        </main>
    );
};

const Opdracht1 = () => {
    const title = "Les 1";

    const handlePrevClick = () => {
        window.alert("prev");
    }

    const handleNextClick = () => {
        window.alert("next");
    }
    const handleStudentClick = (name) => {
        window.alert(name);
    };

    return (
        <>
            <Header onPrevClick={handlePrevClick}
                    onNextClick={handleNextClick}>
                { title }
            </Header>
            <main className="container">
                <List onStudentClick={handleStudentClick} />
            </main>
            <Footer />
        </>
    );
};

export default Opdracht1;
