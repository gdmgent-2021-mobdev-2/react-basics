import Les1 from './Les1/Les1';
import Opdracht1 from './Opdracht1/Opdracht1';
import { useState } from 'react';
import Les2 from './Les2/Les2';
import Opdracht2 from './Opdracht2/Opdracht2';

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
}];

const App = () => {
    const [index, setIndex] = useState(pages.length - 1);

    const handlePageClick = (index) => {
        setIndex(index);
    };

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
            default:
                return null;
        }
    };

    return (
        <main className="container">
            <ul className="navbar">
            {
                pages.map((page, idx) => (
                    <li className={index === idx ? 'active' : ''}>
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
