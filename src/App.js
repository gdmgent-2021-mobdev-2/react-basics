import Les1 from './Les1/Les1';
import Opdracht1 from './Opdracht1/Opdracht1';
import { useState, useEffect } from 'react';
import Les2 from './Les2/Les2';
import Opdracht2 from './Opdracht2/Opdracht2';
import Opdracht3 from './Opdracht3/Opdracht3';
import Les3 from './Les3/Les3';
import Les4 from './Les4/Les4';

const pages = [{
    key: 'les1',
    title: 'Les 1',
}, {
    key: 'opdracht1',
    title: 'Opdracht 1',
}, {
    key: 'les2',
    title: 'Les 2',
}, {
    key: 'opdracht2',
    title: 'Opdracht 2',
}, {
    key: 'opdracht3',
    title: 'Opdracht 3',
}, {
    key: 'les3',
    title: 'Les 3',
}, {
    key: 'les4',
    title: 'Les 4',
}];

const KEY_INDEX = 'current_page';

const getInitialIndex = () => {
    if (localStorage.getItem(KEY_INDEX) !== null) {
        return parseInt(localStorage.getItem(KEY_INDEX));
    }
    return 0;
};

const App = () => {
    const [index, setIndex] = useState(getInitialIndex());

    const handlePageClick = (index) => {
        setIndex(index);
    };

    // 1) De pagina laadt (onze component laadt)
    // 2) Indien de pagina wijzigt
    useEffect(() => {
        document.title = pages[index].title;
        localStorage.setItem(KEY_INDEX, `${index}`);
    }, [index])

    const getPage = (index) => {
        const key = pages[index].key;
        switch (key) {
            case 'les1':
                return <Les1 />;
            case 'opdracht1':
                return <Opdracht1 />;
            case 'les2':
                return <Les2 />;
            case 'opdracht2':
                return <Opdracht2 />;
            case 'opdracht3':
                return <Opdracht3 />;
            case 'les3':
                return <Les3 />;
            case 'les4':
                return <Les4 />;
            default:
                return null;
        }
    };

    return (
        <main className="container">
            <ul className="navbar">
            {
                pages.map((page, idx) => (
                    <li key={page.key} className={index === idx ? 'active' : ''}>
                        <button onClick={() => handlePageClick(idx)}>
                            {page.title}
                        </button>
                    </li>
                ))
            }
            </ul>
            { getPage(index) }
        </main>
    );
};

export default App;
